// PersonDetails.js
import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  state = {
    loading: true,
    person: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;

    return nextState.person[0].dob.age <= AGE;
  }

  fetchUser = async () => {
    const url = 'https://api.randomuser.me/';
    const requestReturn = await fetch(url);
    const requestObject = await requestReturn.json();

    this.setState({
      person: requestObject.results,
      loading: false,
    });
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  renderUser = (userState) => userState
    .map((currentPerson) => (
      <PersonCard
        key={ currentPerson.login.uuid }
        person={ this.getUserElements(currentPerson) }
      />
    ))

  render() {
    const { person, loading } = this.state;

    return ( loading ? <Loading /> : <div>{ this.renderUser(person) }</div>);
  }
}

export default PersonDetails;