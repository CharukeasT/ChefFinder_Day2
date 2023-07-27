import React, {useState, Component } from 'react'
import '../assets/ChefAddDetails.css';
import { Link } from 'react-router-dom';
import menu from '../assets/AddMenu.png'
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
import axios from 'axios';
import email from './ChefSignUp'
const ChefAddDetails = () => {
  const [chef_id, setChefId] = useState('');
  const [chef_location, setLocation] = useState('');
  const [chef_experience, setExperience] = useState('');
  const [chef_speciality_cuisine, setSpecialityCuisine] = useState('');
  const [chef_culinary_background, setCulinaryBackground] = useState('');
  const token = localStorage.getItem("token");
  const handleChefIdChange = (event) => {
    setChefId(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  
  const handleSpecialityCuisineChange = (event) => {
    setSpecialityCuisine(event.target.value);
  };
  const handleCulinaryBackgroundChange = (event) => {
    setCulinaryBackground(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      chef_id: chef_id,
      chef_location: chef_location,
      chef_experience: chef_experience,
      chef_speciality_cuisine: chef_speciality_cuisine,
      chef_culinary_background: chef_culinary_background,
    };
    console.log(data);
    console.log(email);
    const response = await axios.post('http://localhost:8082/api/v1/user/addChefDetails', data,{
      headers:{
        "Authorization": `Bearer ${token}`,
        "cache-control":'no-cache',
      }
    });
    console.log((await response).data)
    initialize()
  };
  const initialize = () =>{
    setChefId('')
    setLocation('')
    setExperience('')
    setCulinaryBackground('')
    setSpecialityCuisine('')
  }

  return (
    <>
      <div className="back3">
        <nav className='nav1b1'>
          <div>
            <ul id="navbarb1">
              <li><a><div><Link to="/ChefHome"><div className='cheflogo11'></div></Link></div></a></li>
              <li><a><div><Link to="/ChefAddMenu"><Button className='button31b1'><img src={menu} alt="my" width={"40px"} /><h1 className='bh1b1'>Add Menu</h1></Button></Link></div></a></li>
              <li><a><div><Link to="/AppHome"><Button className='button31b1'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1b1'>Logout</h1></Button></Link></div></a></li>
            </ul>
          </div>
        </nav>
        <form className='contcad1' onSubmit={handleSubmit}>
          <div className='divcad1'>
            <h1>Details</h1>
            <p>Chef Id :</p>
            <input type='text' className='incad' value={chef_id} onChange={handleChefIdChange}></input>
            <p>Location :</p>
            <input type='text' className='incad' value={chef_location} onChange={handleLocationChange}></input>
            <p>Experience :</p>
            <input type='number' className='incad' value={chef_experience} onChange={handleExperienceChange}></input>
            <p>Speciality Cuisine :</p>
            <input type='text' className='incad' value={chef_speciality_cuisine} onChange={handleSpecialityCuisineChange}></input>
            <p>Culinary Background :</p>
            <input type='text' className='incad' value={chef_culinary_background} onChange={handleCulinaryBackgroundChange}></input>
            <br></br>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChefAddDetails;
