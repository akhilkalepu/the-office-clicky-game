import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CardArray from "./components/CardArray";

class App extends Component {
  state = {
    // selectedCard
    // clickedCards: [],
    // score: 0,
    // topScore: 0
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          score={this.state.topScore}
        />
        <CardArray />
      </div>
    );
  }
}

export default App;
