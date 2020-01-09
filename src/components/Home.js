import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { dataGet } from "./GetData";
import { Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Spinner from "react-bootstrap/Spinner";
import CardDeck from "react-bootstrap/CardDeck"
import Row from "react-bootstrap/Row"
import Jumbotron from "react-bootstrap/Jumbotron"
import {Link} from "react-router-dom"

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      surveys: [],
      name: [],
      user: [],
      loading: true
    };
  }

  componentDidMount() {
    dataGet("/survey/surveys/"+localStorage.getItem('userId'))
      .then(response => {
        this.setState({
          surveys: response,
        });
        this.setState({
          loading:false
        })     
      })
      .catch(function(error) {
        console.log(error);
      });
      console.log(this.state.surveys)
  }


  render() {

      if (!this.state.loading) {

        if (this.state.surveys.length === 0) {
          return (
            <div>
              <Jumbotron>
                <p>
                <b>You have not created any survey </b>
                </p>
              </Jumbotron>
              ;
            </div>
          );
        }

        else{
          return (
            <div style={{ marginTop: "65px" }} className="container-fluid">
              <Card>
                <Card.Body>
                  <Card.Title>Total Surveys: {this.state.surveys.length}</Card.Title>
                  <Row>
                  <CardDeck>
                  {this.state.surveys.map(params =>{
                   return(
                   <Card className="col-md-4" key ={params.id}>
                     <Figure>
                       <Figure.Image
                       src={params.imagePath}  
                       >
                       </Figure.Image>
                       </Figure>
                      <Card.Body> 
                      <Card.Title>{params.name}</Card.Title>
                      <Card.Text>{params.description}<br/>
                   <label>Created On:</label>{"   "}{params.createdDt.slice(0,10)}<br/>
                   <Button>{params.status}</Button><br/>
                   <Link to = {{pathname:'/response',
                   state:{
                    survey:params
                   }
                  }}>
                  Show Details
                      </Link>
                      </Card.Text>
                      </Card.Body>
                    </Card>
                  )})
                }
                </CardDeck>
                </Row>
                </Card.Body>
                </Card>
                  </div>
                  )
        }
      }

      else{
        return (
          <div
            style={{ position: "fixed", top: "50%", left: "50%" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Spinner animation="grow" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) 
      }
             
  }
}

export default Home;
