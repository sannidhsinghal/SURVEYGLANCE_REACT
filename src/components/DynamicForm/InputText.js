import React,{Component} from 'react'
import axios from 'axios'
import {dataGet} from '../GetData'
import { Container, Row, Col } from 'reactstrap';

class dynamicSurvey extends Component{
    constructor(){
        super();
       this.state={
        result:[]
       }

        // dynamic: function(){
            dataGet(`/survey/getquestions?surveyId=1`)
            .then(res=>{ 
                console.log(res)
                // this.setState(
                //     {result: res}
                // )
                // console.log(this.state.result)
              
                // let res=[]
                let result=[]
                for (let i=0;i<res.length;i++){
                    res = {
                        title: 'Question'+i,
                        component: 'input',
                        caption: 'Write your Response',
                    };
                    result.push(res);
                }
                console.log(result)

            })
            // const Item=[]
            // Item.push(this.state.result)

                //  this.state.result.map(r=>{
                //    JSON.parse(r.item)
                //    console.log(r)
                // })}
           
    //         for (let i=0;i<8;i++){
    //         this.state.res= {
    //             title: 'Question:'+i,
    //             component:'input',
    //             caption:'Question',
    //             validationRule: '^(?!\\s*$).+'
    //         };
    //         this.state.result.push(this.state.res);
    //         console.log(this.state.result);
        
    //    }}  
            }

    render(){
    return(
       <div margin-top="90px" margin-left="50px">
       <h1> ffg</h1>
       </div>
    )
    }
}
export default dynamicSurvey

// class dynamicSurvey extends Component{
//     constructor(){
//         super();
//         this.state={
//             questions: [],

//         }
//     }

//     componentDidMount(){
//     dataGet(`/survey/getquestions?surveyId=1`)
//         .then(result=>{
//             console.log(result);
//             let arr = [];
//             result.map(r=>{
//                 let res = JSON.parse(r.item);
//                 console.log(res.title);
//                    const  component1 = "input"
//                 let myobj={
//                     name:res.title,
//                     component:component1 }
//                 arr.push(myobj)
//             })
//             console.log(arr);
          
//     })
// }

// render(){
// //     (this.state.questions).map((k)=> 
// //             <p>{JSON.parse(k.item)}</p>
// // )    
//     return(
//        <div>fedfhudhfu
//            </div>
//         )
//     }
// }
// export default dynamicSurvey