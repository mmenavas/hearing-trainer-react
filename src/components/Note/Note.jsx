import { Component } from 'react'
import './Note.css'

class Note extends Component {

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
    return '/hearing-trainer-react/assets/audio/notes/' + note + '.m4a'
  }

  play() {
    if (!this.props.disabled) {
      this.state.audio.load()
      this.state.audio.play()
    }
  }

  render() {
    return (
      <div className="Note">
        <button className={"Note__button" + (this.props.disabled ? " Note__button--disabled" : "")} onClick={() => this.play()}>{!this.props.hidden ? this.props.note : "?"}</button>
      </div>
    );
  }
}

export default Note
