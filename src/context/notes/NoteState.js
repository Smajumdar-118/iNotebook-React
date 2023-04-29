import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
    const innitialNote = 
        [
           
            {
              "_id": "644152ce4c066b1c799aa497",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note",
              "description": "This is my first note",
              "tag": "NoteApp",
              "date": "2023-04-20T14:57:18.762Z",
              "__v": 0
            },
            {
              "_id": "644167d481bf98fa304c6ddb",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note to Modify",
              "description": "This is first Note that is gonna be modified",
              "tag": "NoteApp",
              "date": "2023-04-20T16:27:00.358Z",
              "__v": 0
            },
            {
              "_id": "644152ce4c066b1c799aa497",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note",
              "description": "This is my first note",
              "tag": "NoteApp",
              "date": "2023-04-20T14:57:18.762Z",
              "__v": 0
            },
            {
              "_id": "644167d481bf98fa304c6ddb",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note to Modify",
              "description": "This is first Note that is gonna be modified",
              "tag": "NoteApp",
              "date": "2023-04-20T16:27:00.358Z",
              "__v": 0
            },
            {
              "_id": "644152ce4c066b1c799aa497",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note",
              "description": "This is my first note",
              "tag": "NoteApp",
              "date": "2023-04-20T14:57:18.762Z",
              "__v": 0
            },
            {
              "_id": "644167d481bf98fa304c6ddb",
              "user": "644023067ea2808985bfa5b5",
              "title": "First Note to Modify",
              "description": "This is first Note that is gonna be modified",
              "tag": "NoteApp",
              "date": "2023-04-20T16:27:00.358Z",
              "__v": 0
            },
          ]

          const [note , setNote ] = useState (innitialNote);
    

    return (
       <noteContext.Provider value={{note , setNote}}>
            {props.children}
       </noteContext.Provider> 
    )
}

export default NoteState;