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
      playing: false,
      count: 0,
      active: 0,
    }
  }

  handleStart() {
    this.setState({
      playing: true,
      active: 0,
      count: 0,
    })
  }

  handleGuess(note) {
    if (note === this.state.notes[this.state.active]) {
      const count = this.state.count + 1
      const playing = count !== this.state.notes.length
      this.setState({
        count: count,
        active: count,
        playing: playing,
      })
    }
  }

  render() {
    return (
      <div className="App">
        {!this.state.playing ? 
          <>
            <CardSet cards={this.state.notes}/>
            <button onClick={() => this.handleStart()}>Start</button>
          </> :
          <>
            <Card note={this.state.notes[this.state.active]} hide={true}/>
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
