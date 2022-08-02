import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class DogCard extends Component {
  render() {
    const {
      dogName,
      dogImgUrl,
    } = this.props;
    console.log(dogImgUrl);
    return (
      <div className="dogCard">
        <img src={ dogImgUrl } alt={ dogName } />
        { dogName }
      </div>
    );
  }
}

DogCard.propTypes = {
  dogName: PropTypes.string.isRequired,
  dogImgUrl: PropTypes.string.isRequired,
};
