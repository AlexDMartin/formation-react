import React, { Component } from 'react';
import './App.css';
import { MOCK } from './Mock';
import { Container } from 'reactstrap';
import RecipeDetails from './RecipeDetails'

class App extends Component {
state = {
  recipe: MOCK
}

  render() {
    return (MOCK.map(recipe => {
      return <Container><RecipeDetails recipe={recipe}></RecipeDetails></Container>
    }))    
  }
}

export default App;
