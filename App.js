import React, { Component } from 'react'
import AdminLogin from './AdminLogin'
import ChefLogin from './ChefLogin';
import UserLogin from './UserLogin';
import SignUp from './SignUp';
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';
import AppHome from './AppHome';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* <Home/> */}
          <Routes>
            <Route exact path="/" element={<AppHome/>}></Route>
            <Route exact path="/AppHome" element={<AppHome/>}></Route>
            <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
            <Route exact path="/ChefLogin" element={<ChefLogin/>}></Route>
            <Route exact path="/UserLogin" element={<UserLogin/>}></Route>
            <Route exact path="/SignUp" element={<SignUp/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App