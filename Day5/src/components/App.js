import React, { Component } from 'react'
import AdminLogin from './AdminLogin'
import ChefLogin from './ChefLogin';
import UserLogin from './UserLogin';
import SignUp from './SignUp';
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';
import AppHome from './AppHome';
import AdminHome from './AdminHome';
import ChefHome from './ChefHome';
import UserHome from './UserHome';
import ChefAddDetails from './ChefAddDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<AppHome/>}></Route>
            <Route exact path="/AppHome" element={<AppHome/>}></Route>
            <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
            <Route exact path="/ChefLogin" element={<ChefLogin/>}></Route>
            <Route exact path="/UserLogin" element={<UserLogin/>}></Route>
            <Route exact path="/SignUp" element={<SignUp/>}></Route>
            <Route exact path="/AdminHome" element={<AdminHome/>}></Route>
            <Route exact path="/ChefHome" element={<ChefHome/>}></Route>
            <Route exact path="/UserHome" element={<UserHome/>}></Route>
            <Route exact path="/ChefAddDetails" element={<ChefAddDetails/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App