import Choice from '../Choice/Choice';
import './ChoiceSet.css';

type ChoiceSetProps = {
  choices: string[];
  hold: boolean;
  disabledChoices: string[];
  onChoiceSelection: (note: string) => void;
};


const ChoiceSet = (props: ChoiceSetProps) => (
  <ul className="ChoiceSet">
    {props.choices.map((choice: string, index: number) =>
      <li key={index} className="ChoiceSet__item">
        <Choice choice={choice} onClick={props.onChoiceSelection} disabled={props.hold || props.disabledChoices.includes(choice)}/>
      </li>
    )}
  </ul>
);

export default ChoiceSet;
