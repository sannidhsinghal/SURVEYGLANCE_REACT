import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import {dataGet} from './GetData'
// import Switch, { Case, Default } from 'react-switch-case'

class PreviewSurvey extends Component{
    constructor(){
        super();
        this.state={
            questions: [],
            items:[]
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

    renderSwitch(que){
        switch(que.itemType.name){
            case 'Text':
                return (
            <div>
                <input type="text" placeHolder="Enter your answer"/>
            </div>
                       )
            case 'Media':
                return(
                    
                )
            default:
                return(
                    <div>
                        No records
                        </div>
                )
            }       
    }

render(){
    
    return(
        <div  style={{marginLeft:"90px"}}>
         {this.state.questions.map(e=>{
              return(
                 <div> 
                <p>{JSON.parse(e.item).title}</p> <br/>
                {this.renderSwitch(e)}

                </div>
              )
              })
            }
            
         </div>
     )
    }
}
export default PreviewSurvey