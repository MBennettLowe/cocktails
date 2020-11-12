import './App.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';





function App() {
  return (
    <div className="App">
      <div>
        <Navbar className="navHeader" bg="dark" variant="dark">
          <Navbar.Brand className="navStyle" href="#home">Navbar</Navbar.Brand >
          <Nav className="mr-auto">
        <Nav.Link className="navStyle" href="#home">Home</Nav.Link>
        <Nav.Link className="navStyle" href="#features">About</Nav.Link>
        <Nav.Link className="navStyle" href="#pricing">Login</Nav.Link>
        </Nav>
        
       </Navbar>

      <br />
      </div>
      
        
      

        <div>
          <form>
            <label>
              search your favorite cocktail
            </label>
            <input type="text" name="name" id="name"></input>
          </form>
        </div>
      </div>
  
  
      


  );
}

export default App;
