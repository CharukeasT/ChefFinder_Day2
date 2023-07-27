import React, { Component } from 'react'
import '../assets/AppHome.css';
import { Link } from 'react-router-dom';
import instagram from '../assets/Instagram.png'
import facebook from '../assets/Facebook.png'
import linkedin from '../assets/Linkedin.png'
import twitter from '../assets/Twitter.png'
import feedback from '../assets/Feedback.png'
import { Button } from '@mui/material';
class AppHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className='back3'>
    <nav className='nav1'>
      <div>
        <ul id="navbar">
        <li><a><div><Link to="/AdminLogin"><div className='adminlogo'></div></Link></div></a></li>
        <li><a><div><Link to="/ChefLogin"><div className='cheflogo'></div></Link></div></a></li>
        <li><a><div><Link to="/UserLogin"><div className='userlogo'></div></Link></div></a></li>
        </ul>
      </div>
    </nav>
    <div className='foot'>
      <div className='copy1'>
      <h1 className='copyh'>ChefFinder © Copyrights Reserved - 2023 </h1></div>
      <div className='foots'>
      <h1 className='copyh'>Follow us on : </h1>
          <a><div><Link to="https://www.facebook.com/charu.keas/"><Button className='button311b1'><img src={facebook} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://www.instagram.com/_charu_keas_/"><Button className='button311b1'><img src={instagram} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://twitter.com/_charu_keas_"><Button className='button311b1'><img src={twitter} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://www.linkedin.com/in/charukeas-t-708b55242/"><Button className='button311b1'><img src={linkedin} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="/Feedback"><Button className='button311b1'><img src={feedback} alt="my" width={"60px"} /></Button></Link></div></a>
          </div>
    </div>
  </div>
    </>
  );
}
}

export default AppHome;