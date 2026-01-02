import { Component } from 'react'
import './Note.css'

type NoteProps = {
  note: string;
  disabled?: boolean;
  concealed?: boolean;
};

type NoteState = {
  audio: HTMLAudioElement;
};

class Note extends Component<NoteProps, NoteState> {

  constructor(props: NoteProps, state: NoteState) {
    super(props, state);
    this.state = {
      audio: new Audio(this.getUrl(props.note))
    }
  }

  componentDidUpdate(prevProps: NoteProps) {
    if (prevProps.note !== this.props.note) {
      this.setState({
        audio: new Audio(this.getUrl(this.props.note))
      })
    }
  }

  getUrl(note: string) {
    console.log(note);
    const baseUrl = import.meta.env.BASE_URL || '/';
    return baseUrl + 'assets/audio/notes/' + note + '.m4a';
  }

  play() {
    if (!this.props.disabled) {
      this.state.audio.load();
      this.state.audio.play();
    }
  }

  render() {
    return (
      <div className="Note">
        <button className={"Note__button" + (this.props.disabled ? " Note__button--disabled" : "")} onClick={() => this.play()}>{!this.props.concealed ? this.props.note : "?"}</button>
      </div>
    );
  }
}

export default Note
