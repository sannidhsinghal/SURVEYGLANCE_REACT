import React from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class Scale extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            ref_tittle:"",
            description:"",
            min_value:1,
            max_value:10,
            step_size:1,
            mandatory:true,
            others:""
        
      }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=event=>{
        event.preventDefault();
        const user = {
           title: this.state.title,
           ref_tittle: this.state.ref_tittle,
           description:this.state.description,
           mandatory : this.state.mandatory,
           min_value:this.state.min_value,
           max_value:this.state.max_value,
           step_size:this.state.step_size,
           others : this.state.others
        }
    }

    render(){
        return(
            <div className="loginParent">
            <div className="col-sm-4">
             <Card style={{ display:'flex', justifyContent:'center' }}>
             <Card.Body className="p-4">
             <h2>Scale Form</h2>
             <form onSubmit={this.handleSubmit}> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="min_value" placeholder="min_value" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="max_value" placeholder="max_value" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="step_size" placeholder="step_size" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" onChange={this.handleChange}/>
             <br/>
             <Button variant="login_btn" className="m-0 btn-block" type="submit"><PersonAddIcon/>Submit</Button>
             </form> 
             </Card.Body>
             </Card>
             </div>
             </div>
        )
    }

}
export default Scale;