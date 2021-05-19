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
import Cards_new from './components/Cards_new';
import { render } from '@testing-library/react';

 const axios = require('axios');

// initializing Axios Instance
const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
})

class App extends Component {
    constructor(props) {
    super(props);

    this.state = { 
      drinks: [],
      loading: true,
      drink: null,
    }
    
    
  }
      
    loadData = () => {
      this.setState({loading: true });
      return axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then(response => {
      //  console.log(response.data.drinks);
       this.setState({drinks: response.data.drinks});
       console.log(this.state.drinks);
       // how do I define setState to check its contents
        // this.setState({ drink: data.drinks[0]}
      }, error => {
        console.log(error);
      }

    )}
    
    // api.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    //   .then(response => {
    //    console.log(response);
    //    this.setState({drinks: response.data})
    //   }, error => {
    //     console.log(error);
    //   }
    
    
    
    componentDidMount() {
      this.loadData();
    }

  render() {
    // const {drinks} = this.state.drinks;
    // console.log(Hello);
      return (
        <div>
          <NavRouter />
          <FormCom /> 
          <Cards_new drinks={this.state.drinks} />
          {/* <Cards_new drinks={ drinks } />  */}
        </div>
        );
      }

    } 
   
  export default App;


