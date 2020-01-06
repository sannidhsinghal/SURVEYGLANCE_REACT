import React, { Component } from 'react'
import { dataPost } from "./GetData";
import Table from 'react-bootstrap/Table'


export class ResponseTable extends Component{

    constructor(){
        super();
        this.state={
            responses:[]
        }
    }

    



    componentDidMount(){
    dataPost('/response/survey/1')
    .then(res =>{
        this.setState({
            responses:res
        })
    })
    }

    render(){
              
          return (
            <div>
                <Table>
                <thead>
                  <tr>
                  <th>S.No</th>
                  <th>Username</th>
                  <td></td>
                  </tr>
                </thead>
                </Table>                
            </div>      
      )
    }
}

export default ResponseTable