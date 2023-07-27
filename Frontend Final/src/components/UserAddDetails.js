import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import add from '../assets/AddUser.png'
import menu from '../assets/AddMenu.png'
import payment from '../assets/Payment.png'
import logout from '../assets/Logout.png'
import '../assets/UserAddDetails.css';
import axios from 'axios';

const UserAddDetails = () =>{
    const[user_id,setUserId] = useState('');
    const[user_location,setLocation] = useState('');
    const[user_date,setDate] = useState('');
    const[user_time,setTime] = useState('');
    const[user_size,setSize] = useState('');
    const handleUserIdChange = (e) =>{
        setUserId(e.target.value);
    }
    const handleLocationChange = (e) =>{
        setLocation(e.target.value);
    }
    const handleDateChange = (e) =>{
        setDate(e.target.value);
    }
    const handleTimeChange = (e) =>{
        setTime(e.target.value);
    }
    const handleSizeChange = (e) =>{
        setSize(e.target.value);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            user_id:user_id,
            user_location:user_location,
            user_date:user_date,
            user_time:user_time,
            user_size:user_size,
        };
        console.log(data);
      // const response = await axios.post('http://localhost:8082/api/v1/user/addUserDetails', data)
      // console.log((await response).data)
      initialize();
    };
    const initialize = () =>{
        setUserId('')
        setLocation('')
        setDate('')
        setTime('')
        setSize('')
      }
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   const data = {
    //     chef_id: chef_id,
    //     chef_location: chef_location,
    //     chef_experience: chef_experience,
    //     chef_speciality_cuisine: chef_speciality_cuisine,
    //     chef_culinary_background: chef_culinary_background,
    //   };
    //   console.log(data);
    //   const response = await axios.post('http://localhost:8082/api/v1/user/addChefDetails', data,{
    //     headers:{
    //       "Authorization": `Bearer ${token}`,
    //       "cache-control":'no-cache',
    //     }
    //   });
    //   console.log((await response).data)
    //   initialize()
    // };
    // const initialize = () =>{
    //   setChefId('')
    //   setLocation('')
    //   setExperience('')
    //   setCulinaryBackground('')
    //   setSpecialityCuisine('')
    // }
  return (
    <>
    <div className="back3">
    <nav className='nav1c1'>
      <div>
        <ul id="navbarc1">
        <li><a><div><Link to="/UserHome"><div className='userlogo12'></div></Link></div></a></li>
          <li><a><div><Link to="/UserAddMenu"><Button className='button31c1'><img src={menu} alt="my" width={"40px"} /><h1 className='bh1b1'>Order details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31c1'><img src={payment} alt="my" width={"40px"} /><h1 className='bh1c'>Make payment</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AppHome"><Button className='button31c1'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1c'>Logout</h1></Button></Link></div></a></li>
        </ul>
      </div>
    </nav>
    <form className='contcad1' onSubmit={handleSubmit}>
          <div className='divcad1'>
            <h1>Details</h1>
            <p>User Id :</p>
            <input type='text' className='incad' value={user_id} onChange={handleUserIdChange}></input>
            <p>Location :</p>
            <input type='text' className='incad' value={user_location} onChange={handleLocationChange}></input>
            <p>Date :</p>
            <input type='date' className='incad1' value={user_date} onChange={handleDateChange}></input>
            <p>Time :</p>
            <input type='time' className='incad1' value={user_time} onChange={handleTimeChange}></input>
            <p>Size :</p>
            <input type='number' className='incad' value={user_size} onChange={handleSizeChange}></input>
            <br></br>
            <button type='submit'>Save</button>
          </div>
        </form>
  </div>
  </>
  )
}

export default UserAddDetails