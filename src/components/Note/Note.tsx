import { Component } from 'react'
import './Note.css'

type NoteProps = {
  note: string;
  disabled?: boolean;
  concealed?: boolean;
};

class Note extends Component<NoteProps> {

  private audio: HTMLAudioElement;

  constructor(props: NoteProps) {
    super(props);
    this.audio = new Audio(this.getUrl(this.props.note))
    this.audio.load();
  }

  componentDidUpdate(prevProps: NoteProps) {
    if (prevProps.note !== this.props.note) {
      this.audio = new Audio(this.getUrl(this.props.note));
      this.audio.load();
    }
  }

  getUrl(note: string) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return baseUrl + 'assets/audio/notes/' + note + '.m4a';
  }

  play() {
    if (!this.props.disabled) {
      this.audio.currentTime = 0;
      this.audio.play();
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
