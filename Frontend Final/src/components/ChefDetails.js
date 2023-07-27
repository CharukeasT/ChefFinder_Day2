import React, { useState,Component } from 'react'
import '../assets/ChefDetails.css';
import { Link } from 'react-router-dom';
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
// import ChefCard from './ChefCard';
import { useNavigate } from 'react-router-dom';
const ChefDetails = () => {
    const menu = [
        { no:1,name:"Idly",price:8},
        { no:2,name:"Dosa",price:20},
        { no:3,name:"Parotta",price:15},
        { no:4,name:"Poori",price:12},
        { no:5,name:"Chappathi",price:15},
      ];
      const navigate = useNavigate();
      const bookchef = () =>{
        window.alert("Chef Booked Successfully");
        navigate('/AppHome')
      }
  return (
    <><body className='body2'>
        <nav className='nav1b1afcd'>
          <div>
            <ul id="navbarb1afcd">
              <li><a><div><Link to="/FindChef"><div className='userlogo11a'></div></Link></div></a></li>
              <li><a><div><Link to="/AppHome"><Button className='button31b1afcd'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1b1afcd'>Logout</h1></Button></Link></div></a></li>
            </ul>
          </div>
        </nav>
        <div className='divcd'><h1>Menu details</h1>
        <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((m) => (
            <tr>
              <td>{m.no}</td>
              <td>{m.name}</td>
              <td>{m.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
      <center><button className='bookchef1' onClick={bookchef}>Book Chef</button></center>
      </body></>
  );
};

export default ChefDetails;
