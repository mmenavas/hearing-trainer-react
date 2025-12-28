import React, { Component } from 'react'
import Note from '../Note/Note'
import './Choice.css'

class Choice extends Component {

  handleClick() {
    console.log("guessing")
    this.props.onClick(this.props.choice)
  }

  render() {
    return (
      <div className="Choice" onClick={() => this.handleClick()}>
        <Note
          note={this.props.choice}
          disabled={this.props.disabled}
        >{this.props.choice}</Note>
      </div>
    );
  }
}

export default Choice
