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
getValues(){
    let Items=[]
    Object.key(this.state.questions).map((key)=> 
            <div>
                <p>{JSON.parse(key.item)}</p>
              
                </div>  
    )
    Items.push(this.state.questions)

}
   
render(){
    console.log(this.state.questions)
    
    return(
        <div  style={{marginLeft:"90px"}}>
         {/* {this.state.questions.map(e=>{
              const dyn=[]
              dyn.push(e.item.title)
              return(
                 <div> 
                <p>{JSON.parse(e.item).title}</p> <br/>
                {dyn.map((res, index) => {
                return res;
                }
                )}
                </div>
              )
              })
            } */}
           
           {this.state.questions}
           </div>
    )
    }
}
export default dynamicSurvey