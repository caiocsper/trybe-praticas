import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset'
import JobFieldset from './JobFieldset'

class Form extends Component {
  render() {
    const {
      sendForm,
      resetForm,
      onBlurHandler,
      onChangeHandler,
      onMouseEnterHandler,
      currentState,
    } = this.props;

    return (
      <form onSubmit={ sendForm }>
        <PersonalFieldset
          onChangeHandler={ onChangeHandler }
          onBlurHandler={ onBlurHandler }
          currentState={ currentState }
        />
        <JobFieldset
          onChangeHandler={ onChangeHandler }
          onBlurHandler={ onBlurHandler }
          onMouseEnterHandler={ onMouseEnterHandler }
          currentState={ currentState }
        />
        <button
          type="submit"
        >
          Enviar
        </button>
        <button
          type="reset"
          onClick={ resetForm }
        >
          Limpar
        </button>
      </form>
    );
  }
}

export default Form;