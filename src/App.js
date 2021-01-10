import './App.css';
import React, { Component } from 'react';

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
import Layout from './components/Layout';
import { render } from '@testing-library/react';

 const axios = require('axios');

// initializing Axios Instance
const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
})

class App extends Component {

  state = {
    drinks: []
  }

  constructor() {
    super();
    api.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then(res => {
       console.log(res.data)
      }, error => {
        console.log(error);
      }
  )}

  render() {
  return (
    <div>
      <NavRouter />
      <FormCom /> 
      <Layout />

      {this.state.drinks.map(drink => <p key={drink.idDrink}>{drink.strDrink}</p>)}
    </div>
        );
      }
}
   
   
  export default App;


