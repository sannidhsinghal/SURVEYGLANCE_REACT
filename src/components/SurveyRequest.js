import React,{Component} from 'react'
import {dataGet} from './GetData'
import MUIDataTable from 'mui-datatables';



class SurveyRequest extends Component{
    constructor(){
        super();
        this.state={
            requests:[],
            data:[]
        }
    }

   componentDidMount(){
       dataGet('/requestSurvey/getRequestsBySurveyId?surveyId=1')
       .then(res=>{
           this.setState({
               requests:res
           })
        
       })
   }


     render(){


      const data =[]  


      this.state.requests.map(item=>{
        const object=[]
           object.push(item.fullName,item.createdDt.slice(0,10),item.status)
          data.push(object)
        })
      const options = {
        filterType: "dropdown",
        responsive: "scroll",
        search:'true'
      };

    //    console.log(this.state.requests)
    //    console.log(this.state.data)
       return(
           <div>
             This is the survey request page  
             <MUIDataTable
             title="Requests"
             columns={["User Name","Applied On","Current Status"]}
             data={data}
             options={options}
             />
           </div>
       )
   }

}
export default SurveyRequest