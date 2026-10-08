import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../firebase/config";
import { signInWithEmailAndPassword} from "firebase/auth"; 


function Login() {
    const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")

     const navigate = useNavigate ();

     const handleLogin=async(e) => {
      e.preventDefault();
      try{
       await signInWithEmailAndPassword (auth,email,password);
       alert( "login succesful")
       navigate("/dashboard")
      } catch(error){
        alert(error.message);
      }
     }
  return (
    <div className='auth-page'>
        <form className="auth-card" onSubmit={handleLogin}>
            <h1>Login  🚀</h1>
            <p>Join Mini School LMS today</p>

            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>

              <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>

              <button>Login!</button>
              <p className="auth-switch"> Don't have an Account? <Link to="/signup">SignUp!!</Link></p>
        </form>
    </div>
  )
}

export default Login