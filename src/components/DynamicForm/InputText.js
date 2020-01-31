import React,{Component} from 'react'
import axios from 'axios'
import {dataGet} from '../GetData'

class dynamicSurvey extends Component{
    constructor(){
        super();
        this.state={
            questions: [],
       
        }
    }

    componentDidMount(){
    dataGet(`/survey/getquestions?surveyId=1`)
        .then(result=>{
            this.setState({
                questions:result
            })
    })
}

   
render(){

    
    (this.state.questions).map((k)=> 
            <p>{JSON.parse(k.item)}</p>
)

    
    return(
        <div  style={{marginLeft:"90px"}}>
         {this.state.questions.map(e=>{
              return(
                 <div> 
              {Object.keys(JSON.parse(e.item)).map(
                  key=>{
                      return(
                        <div>  
                       <label>{key}</label>
                        <input
                        type="text">
                            </input>
                             </div>               )
                  }
              )}
                </div>
              )
              })
            }
           </div>
    )
    }
}
export default dynamicSurvey