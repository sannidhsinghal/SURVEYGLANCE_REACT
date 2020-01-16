import React,{Component} from 'react'
import {dataGet} from './GetData'
import Chart from "react-apexcharts";



class SurveyGraph extends Component{
     constructor(){
         super();
         this.state={
             responses:[]
         }
     }


     componentDidMount(){
       dataGet('/report/response?surveyId=1')
       .then(res=>{
           this.setState({
               responses:res.responseCount
           })
       })
     }


     render(){
    
        var dates = Object.keys(this.state.responses)
        var values = Object.values(this.state.responses)

        console.log(dates,values)

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


         return(
             <div>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
             /> 
             </div>
         )
     }



}
export default SurveyGraph