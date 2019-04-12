import React, { Component } from 'react';
import RecipeList  from '../Component/RecipeList';

class RecipeContainer extends Component{

    state = {
        items: null
    }

    componentDidMount() {
        this.getAllRecipes()
    }

    getAllRecipes() {
        console.debug('Get All')
        fetch('http://10.0.1.212:8080/api/v1/recipes')
            .then(result => {
                
            result.json().then(
                
                items => {
                    console.debug(items) 
                    this.setState({
                        items: items
                    })
            })}).catch(
                error => console.error(error)
            )      
    }

    addRecipe(recipe) {
        console.debug('Adding Call')
        fetch('http://10.0.1.212:8080/api/v1/recipes', {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: recipe
        })
        .then(
            this.getAllRecipes()
        )
        .catch(
            error => console.error(error)
        )    
    }

    deleteRecipe(recipe) {
        console.debug('Delete Call')
        fetch('http://10.0.1.212:8080/api/v1/recipes/' + recipe.id, {
            method: "delete",
            headers: {"Content-Type": "application/json"},
        })
        .then(
            this.getAllRecipes()
        )
        .catch(
            error => console.error(error)
        )    
    }

    render() {
        return this.state.items && <RecipeList recipes={this.state.items}></RecipeList>

        
    }

}

export default RecipeContainer;