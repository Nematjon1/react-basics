class NameForm extends Component {
  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ value: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

