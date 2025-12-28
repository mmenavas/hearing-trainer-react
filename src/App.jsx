import React, { Component } from 'react'
import NoteSet from './components/NoteSet/NoteSet'
import ChoiceSet from './components/ChoiceSet/ChoiceSet'
import Note from './components/Note/Note'
import './App.css'

class App extends Component {

  statusMessages = {
    start: "Push the yellow buttons to become familiar with the sounds of the music notes. When you're ready, push the start button to beginn playing.",
    play: "Push the card with the question mark to listen to a musical note, then select the correct note from the multiple choices.",
    match: "Very well! Now guess the next note.",
    fail: "Try again! That was not the correct note.",
    win: "Excellent! You won.",
  }

  constructor() {
    super();
    this.state = {
      count: 0,
      active: 0,
      reveal: false,
      shuffledNotes: [],
      message: this.statusMessages.start,
    }
  }

  handleStart() {
    this.setState({
      active: 0,
      count: 0,
      shuffledNotes: this.shuffle(this.props.notes),
      message: this.statusMessages.play
    })
  }

  handleGuess(note) {
    console.log("guess taken")
    let message = this.statusMessages.fail
    if (note === this.state.shuffledNotes[this.state.active]) {
      const count = this.state.count + 1
      let shuffledNotes = this.state.shuffledNotes
      message = this.statusMessages.match
      if (count === shuffledNotes.length) {
        message = this.statusMessages.win
      }
      this.setState({
        reveal:true,
        message: message,
      })
      setTimeout(() => {
        this.setState({
          count: count,
          active: count,
          shuffledNotes: shuffledNotes,
          reveal:false,
        })
      }, 1000);
    }
    else if (this.state.reveal) {
      return false;
    }
    else {
      this.setState({
        message: message
      })
    }
  }

  /**
   * Fisher-Yates shuffle algorithm.
   * Source: https://javascript.info/task/shuffle
   * 
   * @param [] items 
   * 
   * @return []
   */
  shuffle(items) {
    let newItems = items.slice(0)

    for (let i = newItems.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
    }

    return newItems
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__name">Hearing Trainer</h1>
        {this.state.shuffledNotes.length === 0 ? 
          <div className="App__home-screen">
            <NoteSet notes={this.props.notes} />
            <button className="App__start-button" onClick={() => this.handleStart()}>Start</button>
          </div> :
          <div className="App__play-screen">
            <Note note={[this.state.shuffledNotes[this.state.active]]}  hidden={!this.state.reveal} />
            <ChoiceSet choices={this.props.notes} selectChoice={(note) => this.handleGuess(note)} disabled={[...this.state.shuffledNotes.slice(0, this.state.active)]}/>
            {this.state.shuffledNotes.length === this.state.active ?
              <button className="App__start-button" onClick={() => this.handleStart()}>Start Over</button>
              :
              <></>
            }
          </div>
        }
        <div className="App__status">
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App
