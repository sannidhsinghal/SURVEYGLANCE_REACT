import React, { Component } from 'react'
import { dataGet } from "./GetData";
import Table from 'react-bootstrap/Table'


export class ResponseTable extends Component{

    constructor(){
        super();
        this.state={
            responses:[]
        }
        this.printData=this.printData.bind(this)
    }

    



    componentDidMount(){
    dataGet('/response/survey/1')
    .then(res =>{
        this.setState({
            responses:res
        })
    })
    console.log(this.state.responses)
    }

    printData(){
      {this.state.responses.forEach(response =>{
        console.log(response.id)
      })}
    }

    render(){
      console.log(this.state.responses)
      console.log(this.state.responses[0])
      // this.printData()
          return (
            <div>
                <Table>
                <thead>
                  <tr>
                  <th>S.No</th>
                  <th>Username</th>
                  {this.state.responses.forEach(response =>{
                    return(
                      <tr>{response.id}</tr>
                    )
                  })}
                  </tr>
                </thead>
                </Table>                
            </div>      
      )
    }
}

export default ResponseTable