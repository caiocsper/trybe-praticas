import React, { Component } from 'react';
import estados from './data/estados';

class PersonalFieldset extends Component {
  render() {
    const {
      onChangeHandler,
      onBlurHandler,
      currentState
    } = this.props;

    return (
      <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                value={ currentState.name }
                onBlur={ onBlurHandler }
                onChange={ onChangeHandler }
                required
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                value={ currentState.email }
                onBlur={ onBlurHandler }
                onChange={ onChangeHandler }
                required
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                value={ currentState.cpf }
                onBlur={ onBlurHandler }
                onChange={ onChangeHandler }
                required
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                value={ currentState.address }
                onBlur={ onBlurHandler }
                onChange={ onChangeHandler }
                required
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                value={ currentState.city }
                onBlur={ onBlurHandler }
                onChange={ onChangeHandler }
                required
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                value={ currentState.countryState }
                onChange={ onChangeHandler }
                required
              >
                <option value="">Selecione</option>
                {
                  estados.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={onChangeHandler}
                  checked={ currentState.addressType === 'house'}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={onChangeHandler}
                  checked={ currentState.addressType === 'apartment'}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}

export default PersonalFieldset;