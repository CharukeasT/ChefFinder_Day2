import React, { Component } from 'react'
import '../assets/UserHome.css';
import { Link } from 'react-router-dom';
import add from '../assets/AddUser.png'
import edit from '../assets/EditUser.png'
import view from '../assets/ViewUser.png'
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
class UserHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="back3">
    <nav className='nav1c'>
      <div>
        <ul id="navbarc">
        <li><a><div><Link to="/UserLogin"><div className='userlogo1'></div></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31c'><img src={add} alt="my" width={"35px"} /><h1 className='bh1c'>Add details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31c'><img src={edit} alt="my" width={"40px"} /><h1 className='bh1c'>Edit details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31c'><img src={view} alt="my" width={"40px"} /><h1 className='bh1c'>View details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AppHome"><Button className='button31c'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1c'>Logout</h1></Button></Link></div></a></li>
        </ul>
      </div>
    </nav>
  </div>
    </>
  );
}
}

export default UserHome;