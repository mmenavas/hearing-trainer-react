import React, { Component } from 'react'
import './Choice.css'

class Choice extends Component {

  select() {
    this.props.onClick(this.props.choice)
  }

  render() {
    return (
      <div className="Choice">
        <button className="Choice__button" onClick={() => this.select()}>{this.props.choice}</button>
      </div>
    );
  }
}

export default Choice
