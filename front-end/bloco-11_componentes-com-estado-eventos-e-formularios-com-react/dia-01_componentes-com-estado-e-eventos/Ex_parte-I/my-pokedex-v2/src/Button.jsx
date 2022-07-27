import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      cssClasses,
      handleClick,
      dataAttr,
      dataAttrValue,
      disabled,
      children,
    } = this.props;
    const btnAttributes = {
      className: cssClasses,
      onClick: handleClick,
    };

    if (disabled) btnAttributes.disabled = disabled;
    if (dataAttr) btnAttributes[dataAttr] = dataAttrValue;

    return (
      <button
        type="button"
        { ...btnAttributes }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  cssClasses: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  dataAttr: PropTypes.string,
  dataAttrValue: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  dataAttr: null,
  dataAttrValue: null,
  disabled: false,
};

export default Button;
