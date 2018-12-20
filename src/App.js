import React, { Component } from "react";
import office from "./office.json";

import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function shuffledCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
class App extends Component {
  state = {
    office,
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
    let shuffledOffice = shuffledCards(office);
    this.setState({ office: shuffledOffice });
  };

  render() {
    return (
      <Wrapper>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.office.map(card => (
          <Card
            key={card.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
