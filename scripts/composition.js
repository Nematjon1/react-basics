import React from "react";

const FancyBorder = (props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog">Welcome</h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
};

// Different approach
const SplitPane = (props) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  );
}

const Dialog = (props) => {
  return (
    <FancyBorder color="blue">
      <h2 className="Dialog-title">{props.title}</h2>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

const WelcomeDialog = () => (
  <Dialog
    title="Welcome"
    message="Thank you for vsiting."
  />
);
class SignUpDialog extends React.Component {
  state = {
    login: ""
  }

  handleChange = (e) => {
    this.setState({login: e.target.value})
  }

  handleSignUp = () => {
    alert("Welcome aboard", this.state.login);
  }

  render() {
    return (
      <Dialog
        title="Mars program"
        message="How should we refer to you?">
        <input
          value={this.state.login}
          onChange={this.handleChange} />
        <button
          onClick={this.handleSignUp}>
          Sign Me Up
        </button>
      </Dialog>
    );
  }
}
