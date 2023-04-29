import React, {useContext} from 'react';
import noteContext from '../context/notes/NoteContext';

function About() {
  const a  = useContext(noteContext);
  return (
    <div>
      My name is {a.name}
    </div>
  )
}

export default About
