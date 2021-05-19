import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Card.Img from 'react-bootstrap/Card.Img';
// import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';
import { render } from 'react-dom';

function RenderDrink(props) {
    console.log(props.drink);
    return (
        <div>
           {props.drink.strDrink}
        </div>
    )
}

const Cards_new = (props) => {
    // const { drinks } = props;
    // console.log(props);
// console.log({drink: drinks.drinks[0]})

const allDrinks = props.drinks.map(
    item => {
        // console.log(item);
        return
        (<div>
            {item.strDrink}
        {/* <RenderDrink drink={item} /> */}
        </div>
        );
    }
)
    


// const drinkData = (props) => {
//     // console.log(props);
//     drinks.map((drink, i) => {
//         return (<p key={props.idDrink} name={props.strDrink}></p>)
//     })
    
// }




     // Checking state of props
    //  componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('props in child component', props.data.drinks);
    //     drinkData();
    //  }


    // componentWillMount(){
    //     const {drinks} = this.props.state.strDrink || {};
    //     console.log('First this called');
    //     this.setState({ drinks });

// componentDidMount() {
//         drinkData();
//       }



    return (
        <div>
            { allDrinks }
            
        </div>
    );
}

export default Cards_new;




    
    
    