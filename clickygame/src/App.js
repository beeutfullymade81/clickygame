import React, { Component } from "react";
import Photostuff from "./Components/photostuff";
import Wrapper from "./Components/wrapper/wrapper";
import Header from "./Components/header/header";
import character from "./photos.json";
import "./App.css";


class App extends Component {

  
  state = {
    score: 0,
    highscore: 0,
    character
   }

  quitGame = () => {
    if (this.state.score > this.state.highscore) {
          this.setState({highscore: this.state.score})
        }
        this.state.character.forEach(characters => {
          characters.count = 0;
        });
        this.setState({score: 0});
        return true;
      };
    

  
  clickCount = id => { // eslint-disable-next-line
    this.state.character.find((photo, i) => {
      if (photo.id === id) {
        if(character[i].count === 0){
          character[i].count = character[i].count + 1;
          this.setState({score : this.state.score + 1})
          console.log(this.state.score);
          this.state.character.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          alert ("You have lost the game");
          this.quitGame();
   };
      };
    });
  };



  render() { return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}><h1>The Ultimate Clicky Game</h1></Header>
       <div className="row">
        {this.state.character.map(photo => (
          <Photostuff
            clickCount={this.clickCount}
            id={photo.id}
            key={photo.id}
            image={photo.image}
            className="col-sm-1"
          />
    
        ))}
        </div>
      </Wrapper>
    )
  }
}
export default App;
