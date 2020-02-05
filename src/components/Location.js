
import React from 'react';
//import Form from 'react-bootstrap/Form'
//import axios from 'axios';
//import { dataPost } from "./GetData";
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import PersonAddIcon from '@material-ui/icons/PersonAdd';

 class Location extends React.Component {
  constructor(){
    super()
  this.state = {
   "title":"",
   "ref_title": "",
   "description": "",
   "mandatory": "",
   "settings": "",
   "others": ""
  }
     this.handleChange = this.handleChange.bind(this);
     this.handleGender = this.handleGender.bind(this);
  }
handleChange(event){
  this.setState({
   [event.target.name] : event.target.value
  })
}
handleSubmit = event => {
  event.preventDefault();
  const user = {
    title: this.state.title,
    ref_title: this.state.ref_title,
    description: this.state.description,
    mandatory: this.state.mandatory,
    settings: this.state.settings,
    others: this.state.others
  };

}
  render() {
    return (
    <div className="loginParent">
    <div className="col-sm-4">
     <Card style={{ display:'flex', justifyContent:'center' }}>
     <Card.Body className="p-4">
     <form onSubmit={this.handleSubmit}> 
    <h2>SIGNUP </h2>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Username" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_title" placeholder="Full Name" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="email" name="description" placeholder="Email Id" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="password" name="mandatory" placeholder="Password" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="settings" placeholder="Contact No." onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Contact No." onChange={this.handleChange}/>
     <br/>
     <Button variant="login_btn" className="m-0 btn-block" type="submit"><PersonAddIcon/>SignUp</Button>
     </form> 
     </Card.Body>
     </Card>
     </div>
     </div>
    )
  
  }
}
export default Location