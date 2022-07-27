import React, { Component } from "react";

export default class FancyButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0
    }
  }

  handleClick = ({ target }) => {
    this.setState(
      ({ clickCount }) => ({
        clickCount: clickCount + 1
      }),
      () => {
        const { clickCount } = this.state;

        console.log(this.getBtnBgColor(clickCount));
      }
    );
  }

  getBtnBgColor = (clickCount) => clickCount % 2 === 0 && clickCount ? 'green' : 'white';

  render() {
    const { clickCount } = this.state;
    

    return (
      <button
        onClick={ this.handleClick }
        style={{ backgroundColor: this.getBtnBgColor(clickCount) }}
      >
        { clickCount }
      </button>
    )
  }
}