import React, { Component } from 'react';
import './App.css';
import { MOCK } from './Mock';
import RecipeList  from './Container/RecipeList';
import { Container, Button } from 'reactstrap';
import RecipeDetails from './Component/RecipeDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
    state = {
      recipes: MOCK,
      addMode: false
    }

    toggleAddMode = (event) => {
      console.debug('Switched addMode');
      this.setState({addMode: !this.state.addMode});
    } 

    add = recipe => () => {
      console.debug('Addition triggered');
      recipe.id = Math.random(80, 160);
      this.state.recipes.push(recipe);
      this.toggleAddMode();
    }

    delete = recipe => () => {
      console.debug('Deletion triggered');
      let newRecipes = this.state.recipes.filter(
        item => recipe.id !== item.id
      );

      this.setState({
        recipes: newRecipes
      })
    }

    render() {
      return <RecipeList></RecipeList>
    }
}

export default App;
