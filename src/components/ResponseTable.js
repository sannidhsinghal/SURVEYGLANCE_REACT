import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import {dataGet} from "./GetData";
import {Redirect} from "react-router-dom"
import SurveyGraph from './SurveyGraph';


export class ResponseTable extends Component{


    constructor(){
        super();
        this.state={
            responses:[],
            questions:[],
            questionIds:[],
            columns:[
              {
                name: "responseId",
                label: "ResponseId",
                options: {
                 filter: true,
                 sort: true,
                 display:false,
                }
               },"UserId","Questions Answered"],
            isLoading:true,
            answers:[],
            rowData:[],
            toDetail:false
        }
    }

    componentDidMount(){
      dataGet('/response/survey/'+this.props.location.state.survey.id)
      .then(res =>{
        this.setState({
          responses:res
        })
      })
      this.state.questionIds=this.props.location.state.survey.questionIdList

      this.props.location.state.survey.questionIdList.map(questionId =>{   
        dataGet('/question/'+questionId)
           .then(que=>{
             this.state.columns.push("Q."+JSON.parse(que.item).title)
            })
      })
      console.log(this.state.columns)

  }

  getDetail(params){
    console.log(params)
    this.setState({
      rowData:params,
      toDetail:true
    })
  }

  



    render(){

     
    if(this.state.toDetail){
      return(
        <Redirect to ={{pathname:"/responseDetails",
                        state:{
                          data:this.state.rowData
                        }}}/>
      )
    }



      const data =[]


     this.state.responses.map(res=>{
      const object=[]
      var id={
        responseId:res.id
      }
        object.push(id,res.userId,res.data.length+"/"+this.props.location.state.survey.questionIdList.length)

        this.state.questionIds.forEach(questionId => {
          const val =  res.data.filter(res=> res.questionId == questionId);
          if(val.length>0){
            object.push(val[0].responseItem);
          }else{
            object.push('-');
          }
        });
        data.push(object)
      });
     
  
            
       const options = {
        filterType: "dropdown",
        responsive: "scroll",
        onRowClick:rowData =>this.getDetail(rowData), 
        onRowsDelete:false,
        disableToolbarSelect:true
      };
  
      return (
        <div style={{marginTop:"60px"}}>
        <MUIDataTable style={{marginTop:"40%"}}
          title={"Responses"}
          data={data}
          columns={this.state.columns}
          options={options}
        />
        <div style={{height:"800px",width:"800px"}}>
        <SurveyGraph
        id={this.props.location.state.survey.id}/>
        ></div>
        </div>
      );
    }
}

export default ResponseTable