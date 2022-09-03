import React from 'react';
import { connect } from 'react-redux';
import { requestDog, getImage, failedRequest } from './redux/actions';

function fetchDog() {
  return async (dispatch) => {
    dispatch(requestDog());
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(getImage(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

function App({ isFetching, src, fetchDogImage }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDogImage}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = ({ dogImage }) => ({
  src: dogImage.imagePath,
  isFetching: dogImage.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDogImage: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
