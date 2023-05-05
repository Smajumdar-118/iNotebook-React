import React, { useEffect } from 'react'
import { useContext } from 'react';

import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

function Note() {
    const Context = useContext(noteContext);
    const {note,getNotes} = Context;
    useEffect(()=>{
      getNotes();
    },[])
  return (
    <>
    <AddNote/>
    <div className="container">
        <h2>Your Notes : </h2>
        <div className="row my-3">

        {note.map((note)=>{
          return <Noteitem note= {note}/>
        })}
        </div>
      </div>
      </>
  )
}

export default Note
