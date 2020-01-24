import React,{Component} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'

class surveyQuestions extends Component {
    constructor(){
        super();
        this.state = {
                count:[],
                dates:[],
                responses:[]
              }

    }


        componentDidMount(){
            axios.get(`https://surveyglance.herokuapp.com/api/tache/facade/report/count?format=date&userId=1`)
            .then(res=>{
                console.log(res)
                this.setState(
                    {
                        dates:res.data.surveyCount.date
                    })
            })
        

        axios.get(`https://surveyglance.herokuapp.com/api/tache/facade/report/surveyResponse?userId=1`)
        .then(result=>{
            console.log(result)
            this.setState(
                {
                    responses:result.data.responseCount});
                console.log(this.state.responses);
            
        })
    }

        render(){

                
           console.log(this.state.dates)

            var SurveyDates = Object.keys(this.state.dates)
            var SurveyId= Object.values(this.state.dates)
            var Resp = Object.values(this.state.responses)
            var RespDates = Object.keys(this.state.responses)
            

            return(
                <div>
                    <Bar
                        data={{
                            labels: SurveyDates,
                        datasets: [{
                            label: "Surveys created",
                            backgroundColor: 'rgb(255, 127, 159)',
                            borderColor: 'rgb(255, 50, 132)',
                            data: SurveyId,
                                    }]
                             }}
                             width ={300}
                             height = {80}
                             margin-top={30}
                    />

                    <Bar
                        data={{
                            labels: RespDates,
                        datasets: [{
                            label: "Response Recorded",
                            backgroundColor: 'rgb(102, 147, 229)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: Resp,
                                    }]
                             }}
                             width ={300}
                             height = {80}


                    />
                </div>
                    )
        }
}
export default surveyQuestions
