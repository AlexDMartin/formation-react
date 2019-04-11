import React, { Component } from 'react';
import './App.css';
import { MOCK } from './Mock';
import { Container, Button } from 'reactstrap';
import RecipeDetails from './RecipeDetails'
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
      return (
      <Container>
          
      {this.state.addMode
        ? <RecipeDetails onAdd={this.add} onDelete={() => this.toggleAddMode}></RecipeDetails>
        : <Button color="primary" onClick={this.toggleAddMode}><FontAwesomeIcon icon={faPlus} /></Button>
      }
      
      { 
        this.state.recipes.map(recipe => {
          return (
            
              <RecipeDetails key={recipe.id} recipe={recipe} onDelete={this.delete}></RecipeDetails>
            
          )
        }) 
      } 

      </Container>
      )
    }
}

export default App;
