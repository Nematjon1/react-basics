import React from "react";
const A = 65;

class Alphabet extends React.Component {
  state = {
    justClicked: null,
    letters: Array.from(length: 26), (_, i) => String.fromCharCode(A + i)
  }

  handleClick = (letter) => {
    this.setState({ justClicked: letter});
  }

  render() {
    return (
      <div>
        Just Clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
