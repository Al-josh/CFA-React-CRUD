import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class IngredientForm extends Component {

  handleInputChange(e) {
    //not used, for reference only
    // console.log(e.target.value);
  };

  focus() {
    console.log(this.nameInput.focus());
  };

  newIngredient() {
    const URL = 'https://recipes-al.herokuapp.com/api/?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsam9zYW11c2lraWNAeWFob28uY29tIiwiaWF0IjoxNDk1MDc5OTM4fQ.r3hdQWv2MUxZu1A8znQJGu5D2q2ThYZvrgG5nKrCjok'
    axios.post(URL + '&name=' + this.nameInput.value)
    .then((response) => {
      console.log(response);
      //reset value of input field
      this.nameInput.value = '';
      this.props.getIngredientList();
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <input type="text"
          ref={(input) => { this.nameInput = input; }}

          onChange={(e) => this.handleInputChange(e)} />
        <Button bsStyle="primary" onClick={() => this.newIngredient()}>Create!!</Button>
      </div>
    );
  }
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired,
};

export default IngredientForm;
