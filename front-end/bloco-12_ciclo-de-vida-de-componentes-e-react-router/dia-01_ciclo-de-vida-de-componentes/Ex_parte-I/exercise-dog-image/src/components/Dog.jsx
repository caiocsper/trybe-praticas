import React, { Component } from 'react';
import Loading from './Loading';
import DogCard from './DogCard';

export default class Dog extends Component {
  state = {
    loading: true,
    fetchedDog: {},
    dogName: '',
    dogInfo: [],
  }

  componentDidMount() {
    const dogInfo = localStorage.getItem('dogInfo');
    if (dogInfo) this.setState({ dogInfo: JSON.parse(dogInfo) });
    this.fetchDog();
  }

  shouldComponentUpdate(_, { fetchedDog }) {
    if (Object.keys(fetchedDog).length) {
      console.log(fetchedDog);
      const { message, status } = fetchedDog;
      const isDogTerrier = message
        .toLowerCase()
        .includes('terrier');
      return status === 'success' && !isDogTerrier;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogInfo } = this.state;
    localStorage.setItem('dogInfo', JSON.stringify(dogInfo));
  }

  fetchDog = async () => {
    try {
      const BASE_URL = 'https://dog.ceo/api';
      const ENDPOINT = 'breeds/image/random';
      const URL = `${BASE_URL}/${ENDPOINT}`;
      const requestReturn = await fetch(URL);
      const requestObject = await requestReturn.json();

      this.setState({
        fetchedDog: requestObject,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  onClickChangeDog = () => {
    const { fetchedDog: { message: dogImgUrl } } = this.state;
    alert(dogImgUrl.match(/(?<=breeds?\x2f).*(?=\x2f)/i));
    this.fetchDog();
  }

  onClickSaveDogName = () => {
    const { fetchedDog: { message: dogImgUrl }, dogName } = this.state;
    const dogObj = { dogImgUrl, dogName };

    this.setState(({ dogInfo }) => ({
      dogInfo: [...dogInfo, dogObj],
    }));
  }

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { loading, dogInfo, fetchedDog, dogName } = this.state;

    if (loading) return <Loading />;
    return (
      <div>
        {
          loading
            ? <Loading />
            : (
              <div className="dogShow">
                <DogCard
                  dogName={ dogName }
                  dogImgUrl={ fetchedDog.message }
                />
                <label htmlFor="dogName">
                  Nome
                  <input
                    type="text"
                    id="dogName"
                    name="dogName"
                    value={ dogName }
                    onChange={ this.onChangeHandler }
                  />
                </label>
                <button
                  type="button"
                  onClick={ this.onClickSaveDogName }
                >
                  Salvar dog
                </button>
                <button
                  type="button"
                  onClick={ this.onClickChangeDog }
                >
                  Trocar dog
                </button>
              </div>
            )
        }
        <div className="dogList">
          {
            dogInfo.map(({ dogName: name, dogImgUrl }, ind) => (
              <DogCard
                key={ ind }
                dogName={ name }
                dogImgUrl={ dogImgUrl }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
