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
    return (
      <div>
        <button onClick={this.handleClick}>Class Button {this.props.text} {this.state.times}</button>
      </div>
    );
  }
}
