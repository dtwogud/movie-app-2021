// import { getConfig } from '@testing-library/react';
import React from 'react';
import PropTypes from "prop-types";

// function Food(props){
//   return (
//     <div>I love {props.fav}</div>
//   )
// }

const foodIlike = [
  {
    id:1,
    name : "kimchi",
    image : "http://placeimg.com/300/300",
    rating : 5
  },
  {
    id:2,
    name : "kimbap",
    image : "http://placeimg.com/300/300",
    rating : 2
  },
  {
    id:3,
    name : "ramen",
    image : "http://placeimg.com/300/300",
    rating : 3.5
  },
  {
    id:4,
    name : "doughnut",
    image : "http://placeimg.com/300/300",
    rating : 3
  },
  {
    id:5,
    name : "risotto",
    image : "http://placeimg.com/300/300",
    rating : 4.7
  }
]

function Food( { name, picture, rating } ) {
  return (
    <div>
      <h1>I love {name}</h1>
      <h3>{rating} / 5.0</h3>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// function renderFood(dish){
//   return (<Food name={dish.name} image={dish.image} />)
// }

function App() {
  return (
    <div className="App">
      {foodIlike.map(dish => 
      <Food 
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating} />
        )}
    </div>
  );
}

export default App;
