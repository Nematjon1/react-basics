import React, {Component} from "react";
import debounce from "lodash.debounce";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 250);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  handleChange(e) {
    // React pools events, so we read the value before debounce.
    // Alternately we could call `event.persist()` and pass the entireevent.
    // For more info see reactjs.org/docs/evemtss.html#event-pooling
    this.emitChangeDebounce(e.target.value);
  }

  emitChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Search..."
        defaultValue={this.props.value}
      />
    );
  }
}

export default Searchbox;
