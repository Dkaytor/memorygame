import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import MemoryCard from "./components/MemoryCard";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures,
    count: 0,
    topScore: 0,
    clickArray: []
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    let newScore = this.state.count + 1;
    this.setState({ count: newScore });

  };

  handleTopScore = () => {
    let newTopScore = this.state.topScore + 1;
    this.setState({ topScore: newTopScore });
  };

  shuffle = () => {
    const pictures = this.state.pictures;
    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }
    this.setState({ pictures });

  };

  lostGame = () => this.setState({
    count: 0,
    clickArray: []
  });

  handleClick = (id) => {

    let newArr = this.state.clickArray;

    if (newArr.length === 0) {
      console.log("check if 0");
      newArr.push(id);
      console.log("in if " + newArr.length);
      this.handleIncrement();
      this.shuffle();
      this.setState({ clickArray: newArr });
      return
    }

      if (newArr.length < 11) {
        console.log("check if less than 11");

        if (newArr.includes(id)) {

          console.log("you lost");
          alert("You lost");
          this.lostGame();
          console.log(newArr);
          this.shuffle();
          return;
        }
       

          console.log("keep going");
          newArr.push(id);
          this.handleIncrement();
          this.shuffle();
          this.setState({ clickArray: newArr });
        
           }
           else {
    if (newArr === 11) {
    
    console.log("you won");
    this.lostGame();
    this.handleTopScore();
    this.shuffle();
    return
    }
    console.log("why not stopping");
    alert("You won!");
    this.handleTopScore();
    this.lostGame();
    this.shuffle();
    return
  }
  console.log("outside form");
}




render() {
  return (
    <Wrapper score={this.state.count} topScore={this.state.topScore}>
      <Title></Title>
      <div></div>
      {this.state.pictures.map(pictures => (
        <MemoryCard
          shuffle={this.shuffle}
          id={pictures.id}
          key={pictures.id}
          image={pictures.image}
          handleClick={this.handleClick}
        />
      ))}

    </Wrapper>
  );
}

}

export default App;
