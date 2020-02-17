import React,{Component} from 'react'
import InText from './InText.js'
import InTextarea from './InTextarea.js'
import InMCQ from './InMCQ.js'
import axios from 'axios'
import {dataGet} from '../GetData.js'

class Form extends Component{
    constructor(){
        super();
        this.state={
            fields: [
                {
                title:"",
                itemType: "Text",
                required: "true",
                placeholder: "Write your response",
                },
                {
                    title:"",
                    itemType: "checkbox",
                    required: "true",
                    placeholder: "Write your response",

                },
                {
                    title:"",
                    itemType: "TextArea",
                    required: "true",
                    placeholder: "Write your response",
                }
            ],
            obj: [],
            questionType:[],
            questionItems:[]
        }
        }
    
componentDidMount(){
        dataGet("/survey/getquestions?surveyId=1")
            .then(result=>{
           this.setState({
               obj:result 
           }
           );
        })
    }       
        
render(){
    
    return(
        <div>
            { this.state.questionItems.map(res=>{
              
        return(
        <div>
        <p>{res}
        </p>
        </div>
      )
    })}
        </div>
    )
    // if (this.state.questionType === "Text") {
    //     console.log('fhifgesuf')
    //     return (
    //         <InText 
    //         title={this.state.obj.item.title}
    //         itemType = {this.state.obj.itemType}
    //         placeholder={this.state.obj.placeholder}
    //         required={this.state.obj.required}
    //         key={this.state.obj.placeholder}
    //         handleChange={this.handleChange}
    //         />
    //     )
    // }
    // if (this.state.questionType === "big_text"){
    //     return (
    //         <InTextarea 
    //         title={this.state.obj.item.title}
    //         itemType = {this.state.obj.itemType}
    //         placeholder = {this.state.obj.placeholder}
    //         required={this.state.obj.required}
    //         key={this.state.obj.placeholder}
    //         handleChange={this.handleChange}
    //         />
    //     )
    // }
    // if (this.state.questionType === "checkbox"){
    //     return (
    //         <InMCQ 
    //         title={this.state.obj.item.title}
    //         itemType={this.state.obj.itemType}
    //         placeholder={this.state.obj.placeholder}
    //         required={this.state.obj.required}
    //         key={this.state.obj.placeholder}
    //         handleChange={this.handleChange}
    //         />
    //     )
    // }
    // console.log(this.state.questionType) 
    
    // // {this.state.obj.map(form =>
      
    // //     this.state.fields.title.push(form.item))}

     
    // // if(this.state.loading){
    // //     return(
    // //         <div style={{marginTop:"80px"}}>
    // //         <h1>Loading </h1>
    // //        </div>
    // //     )
    // // }
    
    // // else{
    // //     return(
    // //   <div style={{marginTop:"100px", marginLeft:"90px"}}>
    // //       THis is a preview
    // //       {console.log(this.state.obj)}
    // // return(
    // //     <div>
    // //         <h1>jsdhas</h1>
    // //     </div>

    

       

    // return(
    //     <div margin-top="90px" margin-left="120px">
    //      <p >{this.state.fields.title}</p>
    //      </div>
    // )
}}

    

export default Form
