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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormCom from './components/FormCom';
//import FormCom from './components/FormCom';
import About from './components/about';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="navHeader">
        
          <Navbar.Brand className="navStyle" href="#home">  
          <img className="imgStyle" src={logo} alt="martini glass" />
          <a className="navbar-brand" href="#">
            <span className="firstcharacter">C</span>
              lassic 
              <span className="firstcharacter">C</span>
              ocktail Index
          </a>
            

          </Navbar.Brand >
          <Nav className="ml-auto">
            <Link className="navStyle" to="/">Home</Link>
            <Link className="navStyle" to="/about">About</Link>
            <Link className="navStyle" to="/contact">Contact</Link>
          </Nav>
       </Navbar>
       </div>

          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/"></Route>

       <FormCom />
       </Router>



  )     
  }


export default App;
