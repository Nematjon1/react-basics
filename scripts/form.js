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

class Reservation extends React.Component {
  state = {
    isGoing = true,
    numberOfGuests: 2
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ?
      target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
