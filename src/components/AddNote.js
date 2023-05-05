import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

function AddNote() {
    const Context = useContext(noteContext);
    const {addNote} = Context;
    const [note , setNote] = useState({title : '' , description : '' ,tag : 'default'});

    const handleClick = (e) =>{
      e.preventDefault();
        addNote(note.title , note.description ,note.tag);
    }

    const onChange = (e)=>{
        setNote({...note , [e.target.name] : e.target.value})
    }
  return (
    <div>
      
      <div className="container">
        <h2 className='text-center'>Add Your Notes</h2>
      </div>

      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  {/* <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default AddNote
