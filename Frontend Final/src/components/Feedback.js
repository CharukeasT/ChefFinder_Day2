import React from 'react'
import '../assets/Feedback.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[subject,setSubject] = useState('');
  const[message,setMessage] = useState('');
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  const handleSubjectChange = (e) =>{
    setSubject(e.target.value)
  }
  const handleMessageChange = (e) =>{
    setMessage(e.target.value)
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(data);
    const response = await axios.post('http://localhost:8082/api/v1/auth/send',data);
    navigate('/AppHome')
  }
  return (
    <div className='back3'>
        <form className='feedform' onSubmit={handleSubmit}>
        <h1 className='h111'>FeedBack</h1> 
            <div className='signup11'>
            <p className='p11'>Name</p>
            <input required className='input11' value={name} onChange={handleNameChange} type="text" id="text" placeholder="Name"/>
            <br></br>
            <p className='p11'>Email</p>
            <input required className='input11' value={email} onChange={handleEmailChange} type="email" id="email" placeholder="Mobile"/>
            <br></br>
            <p className='p11'>Subject</p>
            <input required className='input11' value={subject} onChange={handleSubjectChange} type="text" id="subject" placeholder="Subject"/>
            <br></br>
            <p className='p11'>Message</p>          
            <textarea required className='tt1' rows={5} cols={50} value={message} onChange={handleMessageChange} type="textarea" id="message" placeholder="Message"/>
            <br></br>
            <br></br>
            <br></br>
            <button className='button11' type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Feedback