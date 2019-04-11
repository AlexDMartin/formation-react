import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardText, CardImg, Button, Row, Col, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faEye } from '@fortawesome/free-solid-svg-icons'

class RecipeDetails extends Component {
    state = {
        recipe: this.props.recipe
    }

    render() {

        let {recipe} = this.state;
        
        return (
              <Row>
                <Col md={{size: 4, offset:4}}>
                <div>
                  <Card>
                    <CardImg top width="100%" src={recipe.picture} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{recipe.name}</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>{recipe.description}</CardText>
                      <ButtonGroup>
                        <Button color="primary"><FontAwesomeIcon icon={faPen}/></Button>
                        <Button color="primary"><FontAwesomeIcon icon={faEye}/></Button>
                        <Button color="danger"><FontAwesomeIcon icon={faTimes}/></Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </div>
                </Col>
              </Row>  
          )  
    }
  }
  
  export default RecipeDetails;
  