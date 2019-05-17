import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  state = {
    sayHello: "Hello!"
  }
  
  render() {
    return (
      <div>
        {this.state.sayHello} from the state.
      </div>
    );
  }
}
export default MyComponent;

// **********
tick() {
  const element = (
    <div>
      <h2>Hello, World!</h2>
      <h3>{new Date().toLocaleTimString()}</h3>
    </div>
  );

  return element;
}

class Clock extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      return this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("app"));


// We can use Clock pomponent anywhere since it has its own state.
const App = () => {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
};
