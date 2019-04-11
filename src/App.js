import React, { Component } from 'react';
import './App.css';
import { MOCK } from './Mock';
import { Container } from 'reactstrap';
import RecipeDetails from './RecipeDetails'

class App extends Component {
state = {
  recipes: MOCK
}

delete = recipe => () => {
  let newRecipes = this.state.recipes.filter(
    item => recipe.id !== item.id
  );

  this.setState({
    recipes: newRecipes
  })
}

  render() {
    return (this.state.recipes.map(recipe => {
      return <Container><RecipeDetails key={recipe.id} recipe={recipe} onDelete={this.delete}></RecipeDetails></Container>
    }))    
  }
}

export default App;
