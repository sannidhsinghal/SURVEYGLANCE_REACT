import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import {dataGet} from "./GetData";


export class ResponseTable extends Component{


    constructor(){
        super();
        this.state={
            responses:[]
        }
    }

    componentDidMount(){
      console.log(this.props.location.state)
      dataGet('/response/survey/'+this.props.location.state.survey.id)
      .then(res =>{
        this.setState({
          responses:res
        })
      })
    }




    render(){

    const data =[]


     this.state.responses.map(res=>{
        const object =[]
        object.push(res.userId,res.data.length+"/"+this.props.location.state.survey.questionIdList.length,res.createdDt.slice(0,10),res.status)
        data.push(object)
     })

      
      var columns = ["UserId","Questions Answered","Submit Date","Status"]
       
      this.state.responses.map(res=>{
        res.data.map(obj =>{
          var question=""
          dataGet('/question/'+obj.questionId)
          .then(response=>{
            console.log(response.item)
            console.log(JSON.parse(response.item).title);
            question=JSON.parse(response.item).title
            console.log(question)
            columns.push(question) 
         })
          })
        })
      
       
          
       const options = {
        filterType: "dropdown",
        responsive: "scroll"
      };
  
      return (
        <MUIDataTable style={{marginTop:"10%"}}
          title={"Responses"}
          data={data}
          columns={columns}
          options={options}
        />
      );
    }
}

export default ResponseTable