import {useState} from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/UserLogin.css"
import axios from 'axios';
import {Link} from 'react-router-dom';
function UserLogin() {
  const navigate=useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(true){

      try {
        const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
          email: email,
          password: password
        });
  
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));
        navigate("../UserHome");
      } catch (error) {
        setEmail("")
        setPassword("")
        window.alert("Invalid email or password")
        }
    }
    }
    return (
      <div className='back1'>
          <form onSubmit={handleSubmit} className='form1c'>
              <h1 className='h11c'>User Login</h1> 
              <div className='login1c'>
              <p className='p1c'>Email</p>
              <input required className='input1c' placeholder="Email" type="text" id="text" name='uname' value={email} onChange={handleEmailChange}/>
              <br></br>
              <p className='p1c'>Password</p>          
              <input required className='input1c' placeholder='Password' type="password" id="password" name='pass' value={password} onChange={handlePasswordChange}/>
              <button className='button1c' type="submit">Login</button>
              <h1 className='h12c'>New to our App ? 
              <Link to="../UserSignUp"><button className='button2c'>Register</button></Link>
              </h1>
              </div>
          </form>
      </div>
    )
}

export default UserLogin