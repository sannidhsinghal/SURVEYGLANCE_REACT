import React,{Component} from 'react';
import Card from 'react-bootstrap/Card'
import Chart from "react-apexcharts";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { dataGet } from "./GetData";



class Dashboard extends Component{

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
   



   componentDidMount()
   {
   this.handleDate()
   this.handleResponses()
   }

    handleDate(){
        dataGet("/report/count?format=date&userId="+localStorage.getItem("userId"))
        .then(response=>{
            this.setState(
                {
                    count:response,
                    dates:response.surveyCount.date
                }
            )
       })
    }
    


    handleWeek(){
        dataGet("/report/count?format=week&userId="+localStorage.getItem("userId"))
        .then(response=>{
            this.setState(
                {
                    dates:response.surveyCount.week
                }
            )
       })

    }

    handleMonth(){
        dataGet("/report/count?format=month&userId="+localStorage.getItem("userId"))
        .then(response=>{
            this.setState(
                {
                    dates:response.surveyCount.month
                }
            )
       })

    }
    
    handleResponses(){
        dataGet("/report/count/userId?userId="+localStorage.getItem("userId"))
        .then(response=>{
            console.log(response)
            this.setState(
                {
                    responses:response
                }
            )
            console.log(this.state.responses)
            console.log(response.data)
        })
    }
    

    render(){
        var dates = Object.keys(this.state.dates)
        var values = Object.values(this.state.dates)

        var responseSurvey = Object.keys(this.state.responses)
        var responseValue = Object.values(this.state.responses)

        var chartData={
            options: {
                xaxis: {
                  categories: dates
                }
              },
              series: [
                {
                  name: "count",
                  data: values
                }
              ]
            }

            var responseChartData={
                options: {
                    xaxis: {
                      categories: responseSurvey
                    }
                  },
                  series: [
                    {
                      name: "count",
                      data: responseValue
                    }
                  ]
                }

        return(
            <div style={{marginTop:"5%"}} className="container-fluid">
            <div >
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
             <Card.Body>
             <Chart  
              options={chartData.options}
              series={chartData.series}
              type="line"
             />   
             </Card.Body>
             <center><b>No of surveys created</b></center>
            </Card>
            <Card className ="col-md-6">
             <Card.Header className="text-right">
             <p></p>
             </Card.Header>
             <Card.Body>
             <Chart  
              options={responseChartData.options}
              series={responseChartData.series}
              type="line"
             />   
             <center><b>No of responses recorded</b></center>
             </Card.Body>
            </Card>
            </Row>  
            </section>   
            </div>
            </div>
        )

        
    }
}
export default Dashboard