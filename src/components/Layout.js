import React from 'react';

import Card from 'react-bootstrap/Card';
// import Card.Img from 'react-bootstrap/Card.Img';
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Layout() {
    return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg" />
  <Card.Body>
    <Card.Title><h2>Whitecap Margarita</h2></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)}

export default Layout;