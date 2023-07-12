import {useState} from 'react'
import React from 'react'
import "../assets/ChefLogin.css"
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';
function ChefLogin() {
    const [formErrors,setFormErrors]=useState({});
    const [Login, setLogin] = useState({
        email: "",
        password: "",
      });
      function handleSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(Login));
        console.log(Login);
    }
    const validate=(Login)=>{
      const errors={};
      if(!Login.password)
      errors.password="Please Fill the password";
      else if(Login.password.length<8)
      errors.password="Password is Weak";
      return errors;
  }
  return (
    <div className='back1'>
        <form cnonSubmit={(e) => { handleSubmit(e);}} className='form1b'>
            <h1 className='h11b'>Chef Login</h1> 
            <div className='login1b'>
            <p className='p1b'>Email</p>
            <input required className='input1b' value={Login.email} onChange={(e) => {setLogin({ ...Login, email: e.target.value });}} type="email" id="email"/>
            <br></br>
            <p className='p1b'>Password</p>          
            <input required className='input1b' type="password" id="password" value={Login.password} onChange={(e) => {setLogin({ ...Login, password: e.target.value });}}/>
            <p  style={{color:"red",fontSize:'20px',marginTop:'2px'}}>{formErrors.password}</p>
            <a><Link to="/ChefHome"><button className='button1b' type="submit">Login</button></Link></a>
            <h1 className='h12b'>New to our App ? 
            <a><Link to="/SignUp"><button className='button2b'>Register</button></Link></a>
            </h1>
            </div>
        </form>
    </div>
  )
}

export default ChefLogin