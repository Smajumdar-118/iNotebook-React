import React from 'react';



import Note from './Note';
function Home(props) {
 const {showAlert} = props
  return (
    
   
      <div>

      <Note showAlert={showAlert}/>
      </div>
      
   
  )
}

export default Home
