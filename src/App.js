import './App.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlassMartiniAlt} from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.jpg';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import About from './components/about';




function App() {
  return (
    // <div className="App">
    //   <div>
      <Router>
        <Navbar className="navHeader">
        
          <Navbar.Brand className="navStyle" href="#home">  
          <img src={logo} alt="martini glass" />

          </Navbar.Brand >
          <Nav className="ml-auto">
            <Link className="navStyle" to="/">Home</Link>
            <Link className="navStyle" to="/about">About</Link>
            <Link className="navStyle" to="/login">Login</Link>
          </Nav>
       </Navbar>
          <Route path="/"></Route>
          <Route path="/about"><About /></Route>
          <Route path="/login"><Login /></Route>
    </Router>
       //<br />
       //</div>
      
  )
    function Form() {
      return(
        <div>
      
      
          <form className="formbox">
            <div className="formlayout">
              
              <label className="formstyle">
                <h3>search your favorite cocktail</h3>
                

              </label>
               <p><input className="formcolor" type="text" name="name" id="name"></input></p>
              
            </div>
          </form>
      
       </div>
       //</div>
      )  
  }}

export default App;
