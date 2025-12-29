import Note from '../Note/Note.tsx'
import './Choice.css'

type ChoiceProps = {
  choice: string;
  onClick: (note: string) => void;
  disabled?: boolean;
};

const Choice = (props: ChoiceProps) => {

  const handleClick = () => {
    console.log("guessing");
    props.onClick(props.choice);
  }

  return (
    <div className="Choice" onClick={handleClick}>
      <Note
        note={props.choice}
        disabled={props.disabled}
      />
    </div>
  );
}

export default Choice
