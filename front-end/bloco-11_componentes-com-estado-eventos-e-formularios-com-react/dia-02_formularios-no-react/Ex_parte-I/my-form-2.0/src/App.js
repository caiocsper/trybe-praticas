import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  jobAlert: false,
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onChangeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value.trim());
  }

  onMouseEnterHandler = () => {
    const { jobAlert } = this.state;

    if (!jobAlert) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ jobAlert: true });
    }
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s\x2e]/g, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const regex = /^(?:[\w\x2e]+)+@(?:[\w\x2e]+)+.com(?:.br)?$/;
        return regex.test(value) || ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => {
    this.setState(({ jobAlert }) => ({
      ...INITIAL_STATE,
      jobAlert
    }));
  };

  sendForm = (event) => { 
    event.preventDefault();
    this.setState({ submitted: true })
  };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
          onChangeHandler={this.onChangeHandler}
          onMouseEnterHandler={ this.onMouseEnterHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;