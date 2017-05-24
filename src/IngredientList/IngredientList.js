import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

const IngredientList = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello!</h1>
        <p>Let's look at the ingredients</p>
      </Jumbotron>
      {props.ingredients.map((ingredient, i) =>
        <div className="ing-box" key={i}><div >{ingredient.name} | <button onClick={() => {props.deleteIngredient(ingredient._id)}}>Delete</button> </div></div>)}
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientList;
