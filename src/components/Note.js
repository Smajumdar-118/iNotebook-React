import React from 'react'
import { useContext } from 'react';

import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

function Note() {
    const Context = useContext(noteContext);
    const {note , setNote} = Context;
  return (
    <div className="container">
        <h2>Your Notes : </h2>
        <div className="row my-3">

        {note.map((note)=>{
          return <Noteitem note= {note}/>
        })}
        </div>
      </div>
  )
}

export default Note
