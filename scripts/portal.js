import React from "ract";
import ReactDOM from "react-dom";

ReactDOM.createPortal(child, container)

const appRoot = document.getElementById("app-root");
const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  state = {
    this.ei = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.ei);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.ei);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.ei
    )
  }
}

class Parent extends React.Component {
  state = {
    clicks: 0
  }

  handleClick = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

const Child = () => {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
};

ReactDOM.render(<Parent />, appRoot);
