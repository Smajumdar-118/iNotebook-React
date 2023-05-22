import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

function Note(props) {
  const Context = useContext(noteContext);
  const { note, getNotes, editNote } = Context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    }
    else {
      navigate('/login');
    }
// getNotes();

  }, [])

  const [notes, setNote] = useState({ id: '', etitle: '', edescription: '', etag: '' });
  const ref = useRef(null)
  const refClose = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  const handleClick = (e) => {
    console.log("Updated")
    editNote(notes.id, notes.etitle, notes.edescription, notes.etag);
    refClose.current.click();

  }

  const onChange = (e) => {
    setNote({ ...notes, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="etitle">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={notes.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />

                </div>
                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <input type="text" className="form-control" id="edescription" value={notes.edescription} name="edescription" onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input type="text" className="form-control" id="etag" value={notes.etag} name="etag" onChange={onChange} />
                </div>

                {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Notes</button>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <h2 className='my-2'>Your Notes : </h2>
        {note.lenght === 0 && 'No Note to Display. Please add your note.'}
        <div className="row my-3">

          {note.map((notes) => {
            return <Noteitem note={notes} updateNote={updateNote} showAlert={props.showAlert} />
          })}
        </div>
      </div>
    </>
  )
}

export default Note
