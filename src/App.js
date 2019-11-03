import React, { Component } from 'react'
import CardSet from './components/CardSet/CardSet'
import Card from './components/Card/Card'
import './App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [
        'do4',
        're4',
        'mi4',
      ],
      count: 0,
      active: 0,
      shuffledNotes: []
    }
  }

  handleStart() {
    this.setState({
      active: 0,
      count: 0,
      shuffledNotes: this.shuffle(this.state.notes),
    })
  }

  handleGuess(note) {
    if (note === this.state.shuffledNotes[this.state.active]) {
      const count = this.state.count + 1
      let shuffledNotes = this.state.shuffledNotes
      if (count === shuffledNotes.length) {
        shuffledNotes = []
      }
      this.setState({
        count: count,
        active: count,
        shuffledNotes: shuffledNotes,
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
          <>
            <CardSet cards={this.state.notes}/>
            <button onClick={() => this.handleStart()}>Start</button>
          </> :
          <>
            <Card note={this.state.shuffledNotes[this.state.active]} hide={true}/>
            <ul>
              {this.state.notes.map((note, index) => 
                <li key={index}><button onClick={() => this.handleGuess(note)}>{note}</button></li>
              )}
            </ul>
          </>
        }
      </div>
    );
  }
}

export default App
