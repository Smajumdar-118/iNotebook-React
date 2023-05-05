import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
  const host = 'http://localhost:5000'
    const innitialNote = []
    const getNotes = async () =>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
        
        headers: {
          "Content-Type": "application/json",
          'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDIzMDY3ZWEyODA4OTg1YmZhNWI1In0sImlhdCI6MTY4MTkyNDg3MH0.Q5Cg-wHfYKlYgEfyeKIoO4AHCRRS4ziEguKAwJwHWE0"
          
        },
      });
     const json = await response.json();
     console.log(json)
    //  setNote(json);

    }


        

          const [note , setNote ] = useState (innitialNote);

          const addNote = async (title,description,tag) =>{

            const response = await fetch(`${host}/api/notes/addnotes`, {
              method: "POST", 
              
              headers: {
                "Content-Type": "application/json",
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDIzMDY3ZWEyODA4OTg1YmZhNWI1In0sImlhdCI6MTY4MTkyNDg3MH0.Q5Cg-wHfYKlYgEfyeKIoO4AHCRRS4ziEguKAwJwHWE0"
                
              },
              
              body: JSON.stringify({title,description,tag})
            });
           


            const notes = {
              "_id": "644152ce4c066b1c799aa497",
              "user": "644023067ea2808985bfa5b5",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2023-04-20T14:57:18.762Z",
              "__v": 0
            }
            setNote(note.concat(notes))
          }
          const deleteNote = (id) =>{
            console.log("id : " + id);
            const newNote = note.filter((note)=>{return note._id!==id});
            setNote(newNote);
          }

          const editNote = async (id,title,description,tag) =>{

            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
              method: "POST", 
              
              headers: {
                "Content-Type": "application/json",
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDIzMDY3ZWEyODA4OTg1YmZhNWI1In0sImlhdCI6MTY4MTkyNDg3MH0.Q5Cg-wHfYKlYgEfyeKIoO4AHCRRS4ziEguKAwJwHWE0"
                
              },
              
              body: JSON.stringify({title,description,tag})
            });
            const json =  response.json(); 
          

           for(let index=0 ; index<note.length;index++){
            const element = note[index];
            if(element._id === id){
              element.title =title;
              element.description =description;
              element.tag =tag;
            }
           }
          }
    

    return (
       <noteContext.Provider value={{note , addNote,deleteNote,editNote,getNotes}}>
            {props.children}
       </noteContext.Provider> 
    )
}

export default NoteState;