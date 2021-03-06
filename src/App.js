import React from "react";

import Table from "./Table";
import Form from "./Form";
import Clock from "./Clock";
import SpaceData from "./Solarsysteam";

class App extends React.Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((char, i) => i !== index),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        ></Table>
        <Form handleSubmit={this.handleSubmit} />
        <Clock></Clock>
        <SpaceData></SpaceData>
      </div>
    );
  }
}

export default App;
