import {useState} from 'react'
import React from 'react'
import "../assets/UserSignUp.css"
import {useNavigate} from 'react-router-dom'

const UserSignUp = () =>{
  const[name,setName] = useState("");
  const[mobile,setMobile] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");
  const[role,setRole] = useState('CHEF');
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
        navigate('/UserLogin');
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
    <div className='back12'>
        <form onSubmit={handleSubmit} className='form22'>
            <h1 className='h112'>User Sign Up</h1> 
            <div className='signup12'>
            <p className='p12'>Name</p>
            <input required className='input12' value={name} onChange={handleNameChange} type="text" id="text" placeholder="Name"/>
            <br></br>
            <p className='p12'>Mobile</p>
            <input required className='input12' value={mobile} onChange={handleMobileChange} type="text" id="text" placeholder="Mobile"/>
            <br></br>
            <p className='p12'>Email</p>
            <input required className='input12' value={email} onChange={handleEmailChange} type="email" id="email" placeholder="Email"/>
            <br></br>
            <p className='p12'>Password</p>          
            <input required className='input12' value={password} onChange={handlePasswordChange} type="password" id="password" placeholder="Password"/>
            <br></br>
            <p className='p12'>Confirm Password</p>          
            <input required className='input12' value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" id="password" placeholder="Confirm Password"/>
            <br></br>
            <br></br>
            <button className='button12' onClick={checkPassword} type="submit">SignUp</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default UserSignUp