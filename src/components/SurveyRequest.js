import React,{Component} from 'react'
import {dataGet} from './GetData'
import MUIDataTable from 'mui-datatables';
import Button from 'react-bootstrap/Button'



class SurveyRequest extends Component{
    constructor(){
        super();
        this.state={
            requests:[],
            data:[],
            rowIndex:[]
        }
        this.updateStatus=this.updateStatus.bind(this)
    }

   componentDidMount(){
       dataGet('/requestSurvey/getRequestsBySurveyId?surveyId=1')
       .then(res=>{
           this.setState({
               requests:res
           })
        
       })
   }

   printData(params){
     this.setState({
       rowIndex:params
     })
      params.map(data=>{
          console.log(data.dataIndex)
         }
      ) 
  }

  updateStatus(){
    if(this.state.rowIndex.length===0){
      console.log("Empty Data")
      alert('Please select some user')
    }
    else{

    }
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
        responsive: "stacked",
        search:'true',
        // onRowsSelect:rowData=>this.printData(rowData),
        disableToolbarSelect:true,
      };

    //    console.log(this.state.requests)
    //    console.log(this.state.data)
       return(
           <div style={{marginTop:"75px"}}>
             <MUIDataTable
             title="Requests"
             columns={["User Name","Applied On","Current Status"]}
             data={data}
             options={options}
             />
             <Button onClick={this.updateStatus}>Update</Button>
           </div>
       )
   }

}
export default SurveyRequest