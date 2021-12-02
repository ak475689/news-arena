import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom'
import {
  Link
} from "react-router-dom";
// import { boolLogin } from './login';
export default function Navbar() {
   
  const history=useNavigate();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Categories</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/technology">technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/health">health</Link>
              </li>
              </ul>
          </div>
          <div className="d-flex flex-row-reverse bd-highlight">
              <button  onClick={()=>
                history('/register')}className="btn btn-primary p-2 bd-highlight mx-2">Sign up</button>
              <button  onClick={()=>
                history('/')}className="btn btn-primary p-2 bd-highlight mx-2">login</button>
              </div>
        </div>
      </nav>
    )
}