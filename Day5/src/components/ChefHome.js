import React, { Component } from 'react'
import '../assets/ChefHome.css';
import { Link } from 'react-router-dom';
import add from '../assets/AddUser.png'
import edit from '../assets/EditUser.png'
import view from '../assets/ViewUser.png'
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
class ChefHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="back3">
    <nav className='nav1b'>
      <div>
        <ul id="navbarb">
          <li><a><div><Link to="/ChefLogin"><div className='cheflogo1'></div></Link></div></a></li>
          <li><a><div><Link to="/ChefAddDetails"><Button className='button31b'><img src={add} alt="my" width={"35px"} /><h1 className='bh1b'>Add details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31b'><img src={edit} alt="my" width={"40px"} /><h1 className='bh1b'>Edit details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31b'><img src={view} alt="my" width={"40px"} /><h1 className='bh1b'>View details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AppHome"><Button className='button31b'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1b'>Logout</h1></Button></Link></div></a></li>
        </ul>
      </div>
    </nav>
  </div>
    </>
  );
}
}

export default ChefHome;