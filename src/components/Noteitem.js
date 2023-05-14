import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

function Noteitem(props) {
  const {note , updateNote , showAlert } = props;
  const Context = useContext(noteContext);
  const {deleteNote} = Context;
  return (
    <div className='col-md-3'>
      <div className="card my-3" >
  
  <div className="card-body">
    <div className="d-flex ">

    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square fa-beat mx-4" onClick={updateNote}></i>
    </div>
    <p className="card-text">{note.description} </p>
    <i className="fa-solid fa-trash fa-bounce mx-2" onClick={()=>{deleteNote(note._id);showAlert("Deleted Successfully","success")}}></i>
    
    
  </div>
</div>
    </div>
  )
}

export default Noteitem
