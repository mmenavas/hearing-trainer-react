import React from 'react'
import Note from '../Note/Note'
import './NoteSet.css'

const NoteSet = props => (
  <ul className="NoteSet">
    {props.notes.map((note, index) =>
      <li key={index} className="NoteSet__item">
        <Note note={note}/>
      </li>
    )}
  </ul>
);

export default NoteSet;
