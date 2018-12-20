import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CardArray from "./components/CardArray";
import djs from "./djs.json";


function shuffledCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
class App extends Component {
  state = {
    djs,
    score: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    } else if (newScore === 12) {
      this.setState({
        rightWrong: "You win!"
      });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDJs = shuffledCards(djs);
    this.setState({ djs: shuffledDJs });
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.djs.map(dj => (
          <CardArray
            key={dj.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={dj.id}
            image={dj.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
