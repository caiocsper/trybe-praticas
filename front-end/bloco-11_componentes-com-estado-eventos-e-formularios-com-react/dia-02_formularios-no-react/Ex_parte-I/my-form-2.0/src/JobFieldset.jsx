import React, { Component } from 'react';

class JobFieldset extends Component {
  render() {
    const {
      onChangeHandler,
      onBlurHandler,
      onMouseEnterHandler,
      currentState
    } = this.props;

    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            value={ currentState.resume }
            onBlur={ onBlurHandler }
            onChange={ onChangeHandler }
            required
          />
        </div>
        <div className="container">
          Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              value={ currentState.role }
              onBlur={ onBlurHandler }
              onChange={ onChangeHandler }
              onMouseEnter={ onMouseEnterHandler }
              required
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            value={ currentState.roleDescription }
            onBlur={ onBlurHandler }
            onChange={ onChangeHandler }
          />
        </div>
      </fieldset>
    );
  }
}

export default JobFieldset;