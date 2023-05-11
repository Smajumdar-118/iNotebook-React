import React , {useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

function Navbar() {

  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  }, [location])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className={`nav-item ${location.pathname==='/'?"active" : ""}`}>
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className={`nav-item ${location.pathname==='/about'?"active" : ""}`}>
        <Link className="nav-link" to="/about">About</Link>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
    <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar

