import React, { Component } from 'react'
import './AppHome.css';
import { Link } from 'react-router-dom';
class AppHome extends Component {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
  <div className="backm">
    <nav>
      <div>
            <ul id="navbar" className={this.state.clicked ? 
            "#navbar active" : "#navbar"}>
                <li><a><Link to="/AdminLogin"><button className='button3'>Admin</button></Link></a></li>
                <li><a><Link to="/ChefLogin"><button className='button3'>Chef</button></Link></a></li>
                <li><a><Link to="/UserLogin"><button className='button3'>User</button></Link></a></li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar"
          className={this.state.clicked ? 
            'fas fa-times':'fas fa-bars'}>
        </i>
        </div>
    </nav>
  </div>
    </>
  );
}
}

export default AppHome;