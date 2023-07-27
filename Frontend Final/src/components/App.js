import React, { Component } from 'react'
import AdminLogin from './AdminLogin'
import ChefLogin from './ChefLogin';
import UserLogin from './UserLogin';
import ChefSignUp from './ChefSignUp';
import UserSignUp from './UserSignUp';
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';
import AppHome from './AppHome';
import AdminHome from './AdminHome';
import ChefHome from './ChefHome';
import UserHome from './UserHome';
import ChefAddDetails from './ChefAddDetails';
import ChefAddMenu from './ChefAddMenu';
import UserAddMenu from './UserAddMenu';
import FindChef from './FindChef';
import ChefCard from './ChefCard';
import ChefDetails from './ChefDetails';
import UserAddDetails from './UserAddDetails';
import Feedback from './Feedback'

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
            <Route exact path="/ChefSignUp" element={<ChefSignUp/>}></Route>
            <Route exact path="/UserSignUp" element={<UserSignUp/>}></Route>
            <Route exact path="/AdminHome" element={<AdminHome/>}></Route>
            <Route exact path="/UserHome" element={<UserHome/>}></Route>
            <Route exact path="/UserAddDetails" element={<UserAddDetails/>}></Route>
            <Route exact path="/ChefHome" element={<ChefHome/>}></Route>
            <Route exact path="/ChefAddDetails" element={<ChefAddDetails/>}></Route>
            <Route exact path="/ChefAddMenu" element={<ChefAddMenu/>}></Route>
            <Route exact path="/UserAddMenu" element={<UserAddMenu/>}></Route>
            <Route exact path="/ChefCard" element={<ChefCard/>}></Route>
            <Route exact path="/FindChef" element={<FindChef/>}></Route>
            <Route exact path="/ChefDetails" element={<ChefDetails/>}></Route>
            <Route exact path="/Feedback" element={<Feedback/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App