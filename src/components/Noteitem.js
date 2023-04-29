import React from 'react'

function Noteitem(props) {
  const {note} = props;
  return (
    <div className='col-md-3'>
      <div class="card my-3" >
  
  <div class="card-body">
    <div className="d-flex ">

    <h5 class="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square fa-beat mx-4"></i>
    </div>
    <p class="card-text">{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate ullam numquam. Dicta sint non reiciendis delectus unde nam autem expedita deserunt minus consequatur quam sunt nesciunt reprehenderit, nemo temporibus quaerat? Consectetur, consequatur doloremque.</p>
    <i className="fa-solid fa-trash fa-bounce mx-2"></i>
    
    
  </div>
</div>
    </div>
  )
}

export default Noteitem
