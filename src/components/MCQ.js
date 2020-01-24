import React from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
class MCQ extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            ref_tittle:"",
            description:"",
            option1:"",
            option2:"",
            option3:"",
            option4:"",
            option5:"",
          all_of_the_above:true, 
          none_of_the_above: false,
          select_min_options:1,
          select_max_options:5, 
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
           option1:this.state.option1,
           option2:this.state.option2,
           option3:this.state.option3,
           option4:this.state.option4,
           option5:this.state.option5,
           all_of_the_above:this.state.all_of_the_above,
           none_of_the_above:this.state.none_of_the_above,
           select_min_options:this.state.select_min_options,
           select_max_options:this.state.select_max_options,
           others : this.state.others
        }
    }

    render(){
        return(
            <div className="loginParent">
            <div className="col-sm-4">
             <Card style={{ display:'flex', justifyContent:'center' }}>
             <Card.Body className="p-4">
             <form onSubmit={this.handleSubmit}> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option1" placeholder="option1" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option2" placeholder="option2" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="option3" placeholder="option3" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option4" placeholder="option4" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="option5" placeholder="option5" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="all_of_the_above" placeholder="all_of_the_above" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="none_of_the_above" placeholder="none_of_the_above" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_min_options" placeholder="select_min_options" onChange={this.handleChange}/>
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_max_options" placeholder="select_max_options" onChange={this.handleChange}/>
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
export default MCQ;