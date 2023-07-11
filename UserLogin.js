import {useState} from 'react'
import React from 'react'
import "./UserLogin.css"
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';
function UserLogin() {
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
        <form cnonSubmit={(e) => { handleSubmit(e);}} className='form1c'>
            <h1 className='h11c'>User Login</h1> 
            <div className='login1c'>
            <p className='p1c'>Email</p>
            <input required className='input1c' value={Login.email} onChange={(e) => {setLogin({ ...Login, email: e.target.value });}} type="email" id="email"/>
            <br></br>
            <p className='p1c'>Password</p>          
            <input required className='input1c' type="password" id="password" value={Login.password} onChange={(e) => {setLogin({ ...Login, password: e.target.value });}}/>
            <p  style={{color:"red",fontSize:'20px',marginTop:'2px'}}>{formErrors.password}</p>
            {/* <br></br> */}
            {/* <br></br> */}
            <button className='button1c' type="submit">Login</button>
            <h1 className='h12c'>New to our App ? 
                <a><Link to="/SignUp"><button className='button2c'>Register</button></Link></a>
            </h1>
            </div>
        </form>
    </div>
  )
}

export default UserLogin