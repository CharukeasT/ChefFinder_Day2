import React, { useState,Component } from 'react'
import '../assets/ChefAddMenu.css';
import '../assets/UserAddMenu.css';
import { Link, Navigate } from 'react-router-dom';
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const UserAddMenu = () => {
  const [chef_food_id, setFoodNo] = useState('');
  const [chef_food_name, setFoodName] = useState('');
  const [chef_food_price, setFoodPrice] = useState('');

  const handleFoodNoChange = (event) => {
    setFoodNo(event.target.value);
  };

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleFoodPriceChange = (event) => {
    setFoodPrice(event.target.value);
  };
  const navigate = useNavigate();
   const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      chef_food_id:chef_food_id,
      chef_food_name:chef_food_name,
      chef_food_price:chef_food_price,
    };
    zero();
    navigate("/FindChef");
    const response = await axios.post('http://localhost:8081/chefFood', data);
  };
  const initialize = () =>{
    setFoodNo('')
    setFoodName('')
    setFoodPrice('')
  }
  const counter = useSelector((state)=>state.counter);
  const increment = () =>{
    dispatch({type:"INC"})
    initialize()
  }
  const zero = () =>{
    dispatch({type:"ZERO"})
  }
  const dispatch = useDispatch();

  return (
    <>
      <div className="back3">
        <nav className='nav1b1a'>
          <div>
            <ul id="navbarb1a">
              <li>
                <a>
                  <div>
                    <Link to="/ChefHome">
                      <div onClick={zero} className='userlogo11a'></div>
                    </Link>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div>
                    <Link to="/AppHome">
                      <Button onClick={zero} className='button31b1a'>
                        <img src={logout} alt="my" width={"40px"} />
                        <h1 className='bh1b1'>Logout</h1>
                      </Button>
                    </Link>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <form className='contcad1a' onSubmit={handleSubmit}>
          <div className='divcad1a'>
            <h1>Menu Details</h1>
            <p>Food No :</p>
            <input type='text' value={chef_food_id} onChange={handleFoodNoChange}></input>
            <p>Food Name :</p>
            <input type='text' value={chef_food_name} onChange={handleFoodNameChange}></input>
            <p>Food Price :</p>
            <input type='number' value={chef_food_price} onChange={handleFoodPriceChange}></input>
            <br></br>
            <button onClick={increment} type='button'>Add Item</button>
            <h2>Or</h2>
            <button type='submit'>Finalize Menu</button>
            <h3>Entered menu items : {counter}</h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAddMenu;
