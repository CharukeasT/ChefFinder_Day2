import React, { useState,Component } from 'react'
import '../assets/FindChef.css';
import { Link } from 'react-router-dom';
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import ChefCard from './ChefCard';
const FindChef = () => {
  const chef = [
    {id:1,name:"Charu",experience:4,rating:4.5},
    {id:2,name:"Ajay",experience:3,rating:4.2},
    {id:3,name:"Chandru",experience:5,rating:4.3},
    {id:4,name:"Abishek",experience:7,rating:4.7},
    {id:5,name:"Jason",experience:6,rating:4.3},
    {id:6,name:"Vijay",experience:1,rating:4.1},
    {id:7,name:"Indhuprakash",experience:2,rating:4.2},
    {id:8,name:"Imay",experience:3,rating:4.3},
    {id:9,name:"Kumar",experience:4,rating:4.4},
]
  return (
    <><div className='body1'>
      <div>
        <nav className='nav1b1afc'>
          <div>
            <ul id="navbarb1afc">
              <li><a><div><Link to="/ChefHome"><div className='userlogo11a'></div></Link></div></a></li>
              <li><a><div><Link to="/AppHome"><Button className='button31b1afc'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1b1afc'>Logout</h1></Button></Link></div></a></li>
            </ul>
          </div>
        </nav>
        <div className='divfc'>
            {chef.map(data =>(
                <ChefCard details={data}/>
        ))}
        </div>
      </div>
      </div></>
  );
};

export default FindChef;
