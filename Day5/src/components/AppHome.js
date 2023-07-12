import React, { Component } from 'react'
import '../assets/AppHome.css';
import { Link } from 'react-router-dom';
class AppHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="back3">
    <nav className='nav1'>
      <div>
        <ul id="navbar">
        <li><a><div><Link to="/AdminLogin"><div className='adminlogo'></div></Link></div></a></li>
        <li><a><div><Link to="/ChefLogin"><div className='cheflogo'></div></Link></div></a></li>
        <li><a><div><Link to="/UserLogin"><div className='userlogo'></div></Link></div></a></li>
        </ul>
      </div>
    </nav>
  </div>
    </>
  );
}
}

export default AppHome;