import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, Button, Row, Col, ButtonGroup, Container, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faEye } from '@fortawesome/free-solid-svg-icons'

class RecipeDetails extends Component {
    state = {
        recipe: this.props.recipe,
        editMode: false
    }

    toggleEditMode = (event) => this.setState({editMode: !this.state.editMode})

    onChangePicture = (event) => {
        console.debug('Picture changed');
        this.setState({
            recipe: {
                ...this.state.recipe, picture: event.target.value
            }
        })
    }

    onChangeName = (event) => {
        console.debug('Name changed');
        this.setState({
            recipe: {
                ...this.state.recipe, name: event.target.value
            }
        })
    }

    onChangeDescription = (event) => {
        console.debug('Description changed');
        this.setState({
            recipe: {
                ...this.state.recipe, description: event.target.value
            }
        })
    }

    render() {

        let {recipe} = this.state;
        
        return (
            <Container>
              <Row>
                <Col md={{size: 4, offset:4}}>
                <div>
                  <Card>
                      {this.state.editMode && <Input value={recipe.picture} onChange={this.onChangePicture}/>}
                    <CardImg top width="100%" src={recipe.picture} alt="Recipe Image" />
                    <CardBody>

                    {this.state.editMode
                        ? <Input onChange={this.onChangeName} value={recipe.name}/>
                        : <CardTitle>{recipe.name}</CardTitle>
                    }

                    {this.state.editMode
                        ? <textarea onChange={this.onChangeDescription} value={recipe.description}/>
                        : <CardText>{recipe.description}</CardText>
                    } 
                     
                      <ButtonGroup>
                        <Button color="primary" onClick={this.toggleEditMode}><FontAwesomeIcon icon={faPen}/></Button>
                        <Button color="primary"><FontAwesomeIcon icon={faEye}/></Button>
                        <Button color="danger" onClick={this.props.onDelete(recipe)}><FontAwesomeIcon icon={faTimes}/></Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </div>
                </Col>
              </Row>  
            </Container>
          )  
    }
  }
  
  export default RecipeDetails;
  