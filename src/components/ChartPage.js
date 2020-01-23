import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { dataGet } from "./GetData";
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ChartsPage extends React.Component {
  
  constructor(){
    super()
    this.state={
      count:[],
      dates:[],
      responses:[]
    }
    this.handleWeek = this.handleWeek.bind(this)
    this.handleMonth = this.handleMonth.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleResponses = this.handleResponses.bind(this)
 }
 componentDidMount(){
 this.handleDate()
 this.handleResponses()
 }

 handleDate(){
  dataGet("/report/count?format=date&userId="+localStorage.getItem("userId"))
  .then(response=>{
      this.setState( {
              count:response,
              dates:response.surveyCount.date
          })
 })
}

handleWeek(){
  dataGet("/report/count?format=week&userId="+localStorage.getItem("userId"))
  .then(response=>{
      this.setState(
          {
              dates:response.surveyCount.week
          })
 })
}

handleMonth(){
  dataGet("/report/count?format=month&userId="+localStorage.getItem("userId"))
  .then(response=>{
      this.setState({
              dates:response.surveyCount.month
          })
 })
}
handleResponses(){
  dataGet("/report/count/userId?userId="+localStorage.getItem("userId"))
  .then(response=>{
      console.log(response)
      this.setState({
              responses:response
          })
      console.log(this.state.responses)
      console.log(response.data)
  })
}
  render() {
    var dates = Object.keys(this.state.dates)
    var values = Object.values(this.state.dates)

    var responseSurvey = Object.keys(this.state.responses)
    var responseValue = Object.values(this.state.responses)

    var state = {
      dataLine: {
        labels: dates,
        datasets: [
          {
            name: "count",
            data: values,
            label: "Surveys Created",

            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          },
      ],
    },
     dataLine1:{
        labels: responseSurvey,
        datasets: [
          {
            name: "count",
            data: responseValue,
            label: "Response Captured",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          }
        ]}
    };
  
    return (
      <div style={{marginTop:"5%"}}>
      <Row>
      <div className ="col-md-3">
      <Card  bg ="success" text="white">
      <Card.Body>
      <Card.Title>Live</Card.Title>
      <Card.Text>{this.state.count.liveCount}</Card.Text>
          </Card.Body>
      </Card>
      </div>

      <div className ="col-md-3">
      <Card bg = "danger "text="white">
           <Card.Body>
           <Card.Title>Draft </Card.Title>
           <Card.Text>{this.state.count.draftCount}</Card.Text>    
           </Card.Body>
      </Card>
      </div>
      <div className ="col-md-3">
      <Card bg ="primary" text="white">
           <Card.Body>
           <Card.Title>Total Responses</Card.Title>
           <Card.Text>{this.state.count.responseCount}</Card.Text>    
           </Card.Body>
      </Card>
      </div>
      <div className ="col-md-3">
      <Card bg ="secondary" text="white">
            <Card.Body>
            <Card.Title>Total Surveys</Card.Title>
            <Card.Text>{this.state.count.liveCount+this.state.count.draftCount}</Card.Text>    
            </Card.Body>
      </Card>
      </div>
      </Row>
      <section>  
      <Row>   
      <Card className ="col-md-6">
             <Card.Header className="text-right">
             <Button variant="light"  onClick ={this.handleDate}>Day</Button>
             <Button variant="light"  onClick={this.handleWeek}>Week</Button>
             <Button variant="light"  onClick={this.handleMonth}>Month</Button>
             </Card.Header>
      </Card>
      <Card className ="col-md-6">
            </Card>
      <Card className ="col-md-6">
             <Card.Body> 
             <h3 className="mt-5">Survey chart</h3>
             <Line data={state.dataLine} options={{ responsive: true }} />
             <center><b>No of surveys created</b></center>    
             </Card.Body>  
      </Card>       
      <Card className ="col-md-6">
             <Card.Body>
             <h3 className="mt-5">Response chart</h3>
             <Line data={state.dataLine1} options={{ responsive: true }} />
             <center><b>No of responses recorded</b></center> 
             </Card.Body>
      </Card>   
      </Row>  
      </section> 
      </div>
    );}
}
export default ChartsPage;