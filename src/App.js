import './App.css';
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlassMartiniAlt} from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormCom from './components/FormCom';
import About from './components/About';
import Contact from './components/Contact';
import NavRouter from './components/NavRouter'

const axios = require('axios');
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(response => {
    console.log(response);
  });


  function App() {
     return (
       <div>
           <FormCom />
          < NavRouter />
          </div>
    )};  
   
         
  
export default App;


