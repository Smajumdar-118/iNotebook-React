import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Signup(props) {
  const [credential , setCredential] = useState({name : '',email: "",password: "", cpassword : ''})
  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {name,email,password} = credential;
    const response = await fetch(`http://localhost:5000/api/auth/CreateUser`, {
        method: "POST", 
        
        headers: {
          "Content-Type": "application/json",
          
          
        },
        
        body: JSON.stringify({name,email,password})
      });
      const json = await response.json();
      console.log(json);
     if(json.success){

       localStorage.setItem('token' , json.authToken);
       navigate('/');
       props.showAlert("Account Created Successfully", "success");
     }
     else{
      props.showAlert("Invalid Credential","danger");
     }
        
}

  const onChange =(e) =>{
        
    setCredential({...credential , [e.target.name] : e.target.value})
}
  

  return (
    <div className='container mt-3'>
      <h2>Signup to use iNotebook</h2>
     <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name : </label>
    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
