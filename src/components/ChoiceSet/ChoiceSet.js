import React from 'react';
import Choice from '../Choice/Choice';
import './ChoiceSet.css';

const ChoiceSet = props => (
  <ul className="ChoiceSet">
    {props.choices.map((choice, index) =>
      <li key={index} className="ChoiceSet__item">
        <Choice choice={choice} onClick={props.selectChoice} />
      </li>
    )}
  </ul>
);

export default ChoiceSet;
