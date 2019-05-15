import React from "react";

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
