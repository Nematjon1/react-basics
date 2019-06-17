import React, {Component} from "react";
import throttle from "lodash.throttle";

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);
  }

  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }

  handleClick = () => {
    this.props.loadMore();
  }

  render() {
    return <button onClick={this.handleClickThrottled}>Load More</button>
  }
}

export default LoadMoreButton;
