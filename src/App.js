import React, { Component } from 'react'
import NoteSet from './components/NoteSet/NoteSet'
import ChoiceSet from './components/ChoiceSet/ChoiceSet'
import './App.css'

class App extends Component {

  statusMessages = {
    start: "Push the start button to start your training.",
    play: "Push the wild card to listen to a musical note, then select the correct note from the multiple choices.",
    match: "Very well! Now guess the next note.",
    fail: "Try again! That was not the correct note.",
    win: "Excellent! You completed this round.",
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
      message: this.statusMessages.start
    })
  }

  handleGuess(note) {
    let message = this.statusMessages.fail
    if (note === this.state.shuffledNotes[this.state.active]) {
      const count = this.state.count + 1
      let shuffledNotes = this.state.shuffledNotes
      message = this.statusMessages.match
      if (count === shuffledNotes.length) {
        shuffledNotes = []
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
        {this.state.shuffledNotes.length === 0 ? 
          <div className="App__start-section">
            <NoteSet notes={this.props.notes} hide={false}/>
            <button className="App__start-button" onClick={() => this.handleStart()}>Start</button>
          </div> :
          <div className="App__start-section">
            <NoteSet notes={[this.state.shuffledNotes[this.state.active]]}  hide={!this.state.reveal} />
            <ChoiceSet choices={this.props.notes} selectChoice={(note) => this.handleGuess(note)} />
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
