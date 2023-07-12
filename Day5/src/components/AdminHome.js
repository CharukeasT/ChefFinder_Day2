import React, { Component } from 'react'
import '../assets/AdminHome.css';
import { Link } from 'react-router-dom';
import add from '../assets/AddUser.png'
import edit from '../assets/ViewUser.png'
import view from '../assets/ViewPayment.png'
import logout from '../assets/Logout.png'
import { Button } from '@mui/material';
class AdminHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="back3">
    <nav className='nav1a'>
      <div>
        <ul id="navbara">
        <li><a><div><Link to="/AdminLogin"><div className='adminlogo1'></div></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31a'><img src={add} alt="my" width={"35px"} /><h1 className='bh1a'>Add details</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31a'><img src={edit} alt="my" width={"40px"} /><h1 className='bh1a'>View chefs</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AdminLogin"><Button className='button31a'><img src={view} alt="my" width={"40px"} /><h1 className='bh1a'>Payments</h1></Button></Link></div></a></li>
          <li><a><div><Link to="/AppHome"><Button className='button31a'><img src={logout} alt="my" width={"40px"} /><h1 className='bh1a'>Logout</h1></Button></Link></div></a></li>
        </ul>
      </div>
    </nav>
  </div>
    </>
  );
}
}

export default AdminHome;