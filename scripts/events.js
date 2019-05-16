import React, { Component } from "react";
import ReactDOM from "react-dom":

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>Click</a>
  );
}

class Toggle extends Component {
  state = {
    isToggleOn: true
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));
