import React, { Component } from 'react'
import '../assets/ChefAddDetails.css';
import { Link } from 'react-router-dom';
import add from '../assets/AddUser.png'
import edit from '../assets/EditUser.png'
import view from '../assets/ViewUser.png'
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
class ChefAddDetails extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="back3">
    <nav className='nav1b1'>
      <div>
        <ul id="navbarb1">
          <li><a><div><Link to="/ChefHome"><div className='cheflogo11'></div></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31b1'><img src={add} alt="my" width={"35px"} /><h1 className='bh1b1'>Add details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31b1'><img src={edit} alt="my" width={"40px"} /><h1 className='bh1b1'>Edit details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31b1'><img src={view} alt="my" width={"40px"} /><h1 className='bh1b1'>View details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AppHome"><Button className='button31b1'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1b1'>Logout</h1></Button></Link></div></a></li>
        </ul>
      </div>
    </nav>
  </div>
    </>
  );
}
}

export default ChefAddDetails;