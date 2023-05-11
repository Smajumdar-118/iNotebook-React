import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

function AddNote() {
    const Context = useContext(noteContext);
    const {addNote} = Context;
    const [note , setNote] = useState({title : '' , description : '' ,tag : ''});

    const handleClick = (e) =>{
      e.preventDefault();
        addNote(note.title , note.description ,note.tag);
        setNote({title : '' , description : '' ,tag : ''})
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
    <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange}/>
    {note.title.length<4 && <small id="emailHelp" className="form-text text-muted">Title Should be minimum 4 Character</small>}
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
    {note.description.length<5 && <small id="emailHelp" className="form-text text-muted">Description Should be minimum 5 Character</small>}
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
  </div>
 
  <button disabled={note.title.length<4 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default AddNote
