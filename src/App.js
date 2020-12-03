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
import {Router, Route, Link, Switch } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <div>
        <Navbar className="navHeader">
        
          <Navbar.Brand className="navStyle" href="#home">  
          <img src={logo} alt="martini glass" />

          </Navbar.Brand >
          <Nav className="ml-auto">
        <Nav.Link className="navStyle" href="#home">Home</Nav.Link>
        <Nav.Link className="navStyle" href="#features">About</Nav.Link>
        <Nav.Link className="navStyle" href="#pricing">Login</Nav.Link>
        </Nav>
        
       </Navbar>

      <br />
      </div>
      
        
      

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
      </div>
  );
  }

export default App;
