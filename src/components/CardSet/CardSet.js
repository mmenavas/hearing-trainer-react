import React from 'react';
import Card from '../Card/Card';
import './CardSet.css';

const CardSet = props => (
  <ul className="CardSet">
    {props.cards.map((card, index) =>
      <li key={index} className="CardSet__item">
        <Card note={card} />
      </li>
    )}
  </ul>
);

export default CardSet;
