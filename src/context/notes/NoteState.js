import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
  const host = 'http://localhost:5000'
    const innitialNote = []
    const [note , setNote ] = useState (innitialNote);
    const getNotes = async () =>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json() 
      setNote(json)

    }


        

          

          const addNote = async (title,description,tag) =>{

            const response = await fetch(`${host}/api/notes/addnotes`, {
              method: "POST", 
              
              headers: {
                "Content-Type": "application/json",
                'auth-token' : localStorage.getItem('token')
                
              },
              
              body: JSON.stringify({title,description,tag})
            });
            const notes = await response.json();
            setNote(note.concat(notes))
          }
          const deleteNote = async (id) =>{

            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
              method: "DELETE", 
              
              headers: {
                "Content-Type": "application/json",
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDIzMDY3ZWEyODA4OTg1YmZhNWI1In0sImlhdCI6MTY4MTkyNDg3MH0.Q5Cg-wHfYKlYgEfyeKIoO4AHCRRS4ziEguKAwJwHWE0"
                
              },
            });
            const json = await response.json();
            console.log(json)

            console.log("id : " + id);
            const newNote = note.filter((note)=>{return note._id!==id});
            setNote(newNote);
          }

          const editNote = async (id,title,description,tag) =>{
            

            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
              method: "PUT", 
              
              headers: {
                "Content-Type": "application/json",
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDIzMDY3ZWEyODA4OTg1YmZhNWI1In0sImlhdCI6MTY4MTkyNDg3MH0.Q5Cg-wHfYKlYgEfyeKIoO4AHCRRS4ziEguKAwJwHWE0"
                
              },
              
              body: JSON.stringify({title,description,tag})
            });
            const json =  response.json();
            console.log(json);
          
            const newNotes =JSON.parse(JSON.stringify(note));
           for(let index=0 ; index<newNotes.length;index++){
            const element = newNotes[index];
            if(element._id === id){
              newNotes[index].title =title;
              newNotes[index].description =description;
              newNotes[index].tag =tag;
              break;
            }
           }
           setNote(newNotes)
          // getNotes();
          }
    

    return (
       <noteContext.Provider value={{note , addNote,deleteNote,editNote,getNotes}}>
            {props.children}
       </noteContext.Provider> 
    )
}

export default NoteState;