import Note from '../Note/Note.tsx'
import './NoteSet.css'

type NoteSetProps = {
  notes: string[];
};

const NoteSet = (props: NoteSetProps) => (
  <ul className="NoteSet">
    {props.notes.map((note: string, index: number) =>
      <li key={index} className="NoteSet__item">
        <Note note={note} />
      </li>
    )}
  </ul>
);

export default NoteSet;
