import Choice from '../Choice/Choice';
import './ChoiceSet.css';

type ChoiceSetProps = {
  choices: string[];
  disabled: string[];
  onChoiceSelection: (note: string) => void;
};


const ChoiceSet = (props: ChoiceSetProps) => (
  <ul className="ChoiceSet">
    {props.choices.map((choice: string, index: number) =>
      <li key={index} className="ChoiceSet__item">
        <Choice choice={choice} onClick={props.onChoiceSelection} disabled={props.disabled.includes(choice)}/>
      </li>
    )}
  </ul>
);

export default ChoiceSet;
