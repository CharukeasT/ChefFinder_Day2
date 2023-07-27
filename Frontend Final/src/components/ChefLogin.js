import {useState} from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/ChefLogin.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
function ChefLogin() {
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
        navigate("../ChefHome");
      } catch (error) {
        setEmail("")
        setPassword("")
        window.alert("Invalid email or password")
        }
    }
    }
    return (
      <div className='back1'>
          <form onSubmit={handleSubmit} className='form1b'>
              <h1 className='h11b'>Chef Login</h1> 
              <div className='login1b'>
              <p className='p1b'>Email</p>
              <input required className='input1b' placeholder="Email" type="text" id="text" name='uname' value={email} onChange={handleEmailChange}/>
              <br></br>
              <p className='p1b'>Password</p>          
              <input required className='input1b' placeholder='Password' type="password" id="password" name='pass' value={password} onChange={handlePasswordChange}/>
              <button className='button1b' type="submit">Login</button>
              <h1 className='h12b'>New to our App ? 
              <Link to="../ChefSignUp"><button className='button2b'>Register</button></Link>
              </h1>
              </div>
          </form>
      </div>
    )
  };
export default ChefLogin