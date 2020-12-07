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
  Route
} from "react-router-dom";
import FormCom from './components/FormCom';
//import FormCom from './components/FormCom';


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
        <Nav.Link className="navStyle" href="#home">Home</Nav.Link>
        <Nav.Link className="navStyle" href="#features">About</Nav.Link>
        <Nav.Link className="navStyle" href="#pricing">Login</Nav.Link>
        </Nav>
        
       </Navbar>
       </div>
       <FormCom />
       </Router>



  )     
  }

  // function Home() {
  //   return(
  //     <div>
  //       <h2>Home</h2>
  //     </div>
  //   )
  
    
  // }


      //  class FormCom extends React.Component {
      //    render() {
      //     return (
      //     <div>
      //       <p>Works</p>
      //       </div>
      //   )}
      //   }
        
          


export default App;
