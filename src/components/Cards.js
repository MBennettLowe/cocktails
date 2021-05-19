import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
// import Card.Img from 'react-bootstrap/Card.Img';
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';


class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drinks: []
      
    }
  
  }  
    // child component api undefined
    // console.log("Where's my API?");
    
  

  render() {
    const drinkArray = this.props.drinks.map((drink) => {
      return (
        <p key={drink.idDrink}>{drink.strDrink}</p>
      );
    }

  
      // const {drinks} = this.props;
      // const {drinks} = drinks[0].strDrink;

      // console.log(this?.props?.drinks);

      // called when a button is clicked
      
      // const btn = document.getElementById('button');
      // function handleClick(e) {
      // e.preventDefault();
      // console.log('The button was clicked');
      // };

      

      if (this.state.drinks.length > 0) {
         console.log("Heoolo")
        } else {
          console.log('WTF');
        }
      
      console.log(this?.props?.drinks);
      console.log(this.state.drinks[0].strDrink);
    
    


      console.log('Testing My Code');

      const apiResults = drinks.data?.strDrink;
      console.log(apiResults);
      console.log(drinks.someNonExistentMethod?.());

      {this.props.drinks.map(drink => 
        <p key={drink.idDrink}>{drink.strDrink}</p>)}
    
    return ( 
          <div>
            {drinkArray}
           <Card style={{ width: '18rem' }} >
              {/* <Card.Img variant="top" src={drinks.strDrinkThumb}></Card.Img> */}
              <Card.Body>
              <Card.Title><h2>{this.props.strDrink}</h2></Card.Title>
              <Card.Text><h3>Cocktail Glass</h3></Card.Text> 
              <Button variant="primary" id='button' onClick={handleClick}>Details</Button>
              </Card.Body>
           </Card>
          </div>

    );
  
  } 

}


export default Cards;
