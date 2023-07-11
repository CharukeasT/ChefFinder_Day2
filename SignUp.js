import {useState} from 'react'
import React from 'react'
import "./SignUp.css"
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';

function SignUp() {
    const [SignUp, setSignUp] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
      });
      function handleSubmit(e) {
        e.preventDefault();
        console.log(SignUp);
    }
  return (
    <div className='back1'>
        <form cnonSubmit={(e) => { handleSubmit(e);}} className='form2'>
            <h1 className='h11'>SignUp</h1> 
            <div className='signup1'>
            <p className='p1'>Name</p>
            <input required className='input1' value={SignUp.name} onChange={(e) => {setSignUp({ ...SignUp, name: e.target.value });}} type="text" id="text"/>
            <br></br>
            <p className='p1'>Mobile</p>
            <input required className='input1' value={SignUp.mobile} onChange={(e) => {setSignUp({ ...SignUp, mobile: e.target.value });}} type="NUMBER" id="text"/>
            <br></br>
            <p className='p1'>Email</p>
            <input required className='input1' value={SignUp.email} onChange={(e) => {setSignUp({ ...SignUp, email: e.target.value });}} type="email" id="email"/>
            <br></br>
            <p className='p1'>Password</p>          
            <input required className='input1' type="password" id="password" value={SignUp.password} onChange={(e) => {setSignUp({ ...SignUp, password: e.target.value });}}/>
            <br></br>
            <br></br>
            <a><Link to="/AppHome"><button className='button1' type="submit">SignUp</button></Link></a>
            </div>
        </form>
    </div>
  )
}

export default SignUp