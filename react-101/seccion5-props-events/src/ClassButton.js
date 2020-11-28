import React, { Component } from "react";

export default class ClassButton extends Component {
  state = {
    times : 5
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleClick = () => {
   console.log("times")
   this.setState({times : this.state.times +1 })
  }

  render() {
    const {times , onButtonClick} = this.props;
    return (
      <div>
        <button onClick={onButtonClick}>Class Button {times}</button>
      </div>
    );
  }
}
