import {useState} from 'react'
import React from 'react'
import axios from 'axios'
import "../assets/ChefSignUp.css"
import {useNavigate} from 'react-router-dom'

const ChefSignUp = () =>{
  const[name,setName] = useState("");
  const[mobile,setMobile] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");
  const[role,setRole] = useState('USER');
  const navigate = useNavigate();
  const checkPassword = (e) =>{
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      window.alert(
        "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      );
      initialize1()
      return;
    }else if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      initialize2()
      return;
    }else{
      window.alert("Passwords match perfectly \n SignUp successful");
    }
  }
  const initialize1 = () =>{
    setPassword('')
    setConfirmPassword('')
  }
  const initialize2 = () =>{
    setConfirmPassword('')
  }
  const handleNameChange = (e) =>{
    setName(e.target.value);
  }
  const handleMobileChange = (e) =>{
    setMobile(e.target.value);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleConfirmPasswordChange = (e) =>{
    setConfirmPassword(e.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(name, email, mobile, password, role);
    let pass = password;
    const registrationData = {
      name,
      email,
      mobile,
      password,
      role
    };
    try {
      const response = await fetch('http://localhost:8082/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      if (response.status === 200) {
        navigate('/ChefLogin');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  return (
    <>
    <div className='back11'>
        <form onSubmit={handleSubmit} className='form21'>
            <h1 className='h111'>Chef Sign Up</h1> 
            <div className='signup11'>
            <p className='p11'>Name</p>
            <input required className='input11' value={name} onChange={handleNameChange} type="text" id="text" placeholder="Name"/>
            <br></br>
            <p className='p11'>Mobile</p>
            <input required className='input11' value={mobile} onChange={handleMobileChange} type="text" id="text" placeholder="Mobile"/>
            <br></br>
            <p className='p11'>Email</p>
            <input required className='input11' value={email} onChange={handleEmailChange} type="email" id="email" placeholder="Email"/>
            <br></br>
            <p className='p11'>Password</p>          
            <input required className='input11' value={password} onChange={handlePasswordChange} type="password" id="password" placeholder="Password"/>
            <br></br>
            <p className='p11'>Confirm Password</p>          
            <input required className='input11' value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" id="password" placeholder="Confirm Password"/>
            <br></br>
            <br></br>
            <button className='button11' onClick={checkPassword} type="submit">SignUp</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default ChefSignUp