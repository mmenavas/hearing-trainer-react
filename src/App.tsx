import { Component } from 'react'
import NoteSet from './components/NoteSet/NoteSet.tsx'
import ChoiceSet from './components/ChoiceSet/ChoiceSet.tsx'
import Note from './components/Note/Note.tsx'
import './App.css'

type AppProps = {
  notes: string[];
};

type AppState = {
  // How many notes have been guessed correctly.
  count: number;
  // Number of incorrect guesses.
  mistakes: number;
  // Whether or not to show the random note.
  reveal: boolean;
  // The notes in random order.
  shuffledNotes: string[];
  // The notes already guessed correctly.
  guessedNotes: string[];
  // Message to be displayed to the user.
  message: string;
};

class App extends Component<AppProps, AppState> {

  statusMessages = {
    start: "Push the yellow cards to become familiar with the sounds of the music notes. When you're ready, push the start button to begin playing.",
    play: "Push the card with the question mark to listen to a random music note, then select the correct note from the multiple choices.",
    match: "Very well! Now guess the next note.",
    fail: "Try again! That was not the correct note.",
    win: "Excellent! You won.",
  };

  constructor(props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      count: 0,
      mistakes: 0,
      reveal: false,
      shuffledNotes: [],
      guessedNotes: [],
      message: this.statusMessages.start,
    };
  }

  handleStart() {
    this.setState({
      count: 0,
      mistakes: 0,
      reveal: false,
      shuffledNotes: this.shuffle(this.props.notes),
      guessedNotes: [],
      message: this.statusMessages.play
    })
  }

  handleGuess(note: string) {
    console.log("guess taken");
    if (note === this.state.shuffledNotes[this.state.count]) {
      const count = this.state.count + 1;
      if (count === this.state.shuffledNotes.length) {
        // Handle game over.
        this.setState({
          count: count,
          reveal:true,
          guessedNotes: [...this.state.guessedNotes, note],
          message: this.statusMessages.win,
        })
      }
      else {
        // Handle note match.
        this.setState({
          reveal:true,
          message: this.statusMessages.match,
        })
        setTimeout(() => {
          this.setState({
            count: count,
            reveal: false,
            guessedNotes: [...this.state.guessedNotes, note]
          })
        }, 1000);
      }
    }
    else if (
      // Do nothing if a correct guess was just made.
      this.state.reveal ||
      // Do nothing if a disabled card was clicked on.
      this.state.guessedNotes.includes(note)
    ) {
      return false;
    }
    else {
      // An incorrect guess was made.
      this.setState({
        mistakes: this.state.mistakes + 1,
        message: this.statusMessages.fail 
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
  shuffle(items: string[]) {
    const newItems = items.slice(0)

    for (let i = newItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
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
            <p>Mistakes: { this.state.mistakes }</p>
            <Note note={this.state.count === this.state.shuffledNotes.length ? this.state.shuffledNotes[this.state.count - 1] : this.state.shuffledNotes[this.state.count]}  concealed={!this.state.reveal} disabled={this.state.count === this.state.shuffledNotes.length}/>
            <ChoiceSet choices={this.props.notes} onChoiceSelection={(note: string) => this.handleGuess(note)} disabledChoices={this.state.guessedNotes} hold={this.state.reveal} />
            {this.state.shuffledNotes.length === this.state.count ?
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
