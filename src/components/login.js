import React,{useState} from 'react';
// import Register from './register.js';
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
var boolLogin=false;
function Login() {

  const navigate=useNavigate();
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [loginstatus, setloginstatus] = useState('welcome to news app')
  const submitReview=()=>
  {  

    Axios.post('http://localhost:3001/login',{email:email,password:pass}).then((response)=>
    {    
      if(response.data.message)
      {
        setloginstatus('no user found');
        boolLogin=false;
      }
      else{
        boolLogin=true;
        setloginstatus('user found');
        navigate('/home')
      }
    });
  }
  return (

    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://i.pinimg.com/originals/26/99/81/2699815cc29b5b98a544f87ef54fa192.png" alt="error" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form  >
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" onChange={(e)=>
                  {
                    setemail(e.target.value)
                  }}/>
                <label className="form-label" for="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password"  onChange={(e)=>
                    {
                      setpass(e.target.value);
                    }}/>
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button  onClick={submitReview} type="button" className="btn btn-primary btn-lg"
                >Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <button onClick={()=>
                navigate('/register')}> Register </button></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-center">{loginstatus}</h1>
    </section>
  )
}
export  default Login;
