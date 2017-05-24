import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './IngredientList/IngredientList';
import IngredientForm from './IngredientForm/IngredientForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  };

  // componentWillMount() {
  //   console.log('componentWillMount');
  // };

  componentDidMount() {
    this.getIngredientList();
  };

  getIngredientList() {
    const URL = 'https://recipes-al.herokuapp.com/api/?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsam9zYW11c2lraWNAeWFob28uY29tIiwiaWF0IjoxNDk1MDc5OTM4fQ.r3hdQWv2MUxZu1A8znQJGu5D2q2ThYZvrgG5nKrCjok'
    axios.get(URL)
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteIngredient(id) {
    const URL = `https://recipes-al.herokuapp.com/api/ingredients/${id}/delete?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsam9zYW11c2lraWNAeWFob28uY29tIiwiaWF0IjoxNDk1MDc5OTM4fQ.r3hdQWv2MUxZu1A8znQJGu5D2q2ThYZvrgG5nKrCjok`;
    axios.delete(URL)
    .then((response) => {
      this.getIngredientList();
    });
  };

  render() {
    // console.log('Render()');
    return (
      <div>
        <h1>Recipes Frontend</h1>
        <IngredientForm getIngredientList={() => this.getIngredientList()} />
        {this.state.ingredients.length < 1 ? <p>Loading...</p> : < IngredientList ingredients={this.state.ingredients}
      deleteIngredient={(id) => this.deleteIngredient(id)} />}
      </div>
    );
  }
}

export default App;
