import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

  constructor(props) {
    super();
    this.state = {
      audio: new Audio(this.getUrl(props.note))
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.note !== this.props.note) {
      this.setState({
        audio: new Audio(this.getUrl(this.props.note))
      })
    }
  }

  getUrl(note) {
    return 'assets/audio/notes/' + note + '.m4a'
  }

  play() {
    this.state.audio.load()
    this.state.audio.play()
  }

  render() {
    return (
      <div className="Card">
        <button className="Card__button" onClick={() => this.play()}>{!this.props.hide ? this.props.note : "?"}</button>
      </div>
    );
  }
}

export default Card
