import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom';


function Login() {
    const [credential , setCredential] = useState({email: "",password: ""})
    let navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST", 
            
            headers: {
              "Content-Type": "application/json",
              
              
            },
            
            body: JSON.stringify({email : credential.email , password : credential.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
              localStorage.setItem('token' , json.authtoken);
              navigate('/');
              
          }
          else{
            alert("Invalid Credential")
          }
    }
    const onChange =(e) =>{
        
        setCredential({...credential , [e.target.name] : e.target.value})
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credential.email} aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
