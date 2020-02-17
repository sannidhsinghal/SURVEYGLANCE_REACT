
import React from 'react';
//import Form from 'react-bootstrap/Form'
//import axios from 'axios';
import { dataPost } from "./GetData";
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import PersonAddIcon from '@material-ui/icons/PersonAdd';

 class SignUpPage extends React.Component {
  constructor(){
    super()
  this.state = {
   "userName":"",
   "fullName": "",
   "emailId": "",
   "password": "",
   "phoneNumber": "",
   "gender": "",
  }
     this.handleChange = this.handleChange.bind(this);
     this.handleGender = this.handleGender.bind(this);
  }
handleChange(event){
  this.setState({
   [event.target.name] : event.target.value
  })
}
handleGender = event =>{
    this.setState({
        gender:event.target.value
    })
}
handleSubmit = event => {
  event.preventDefault();
  const user = {
    userName: this.state.userName,
    fullName: this.state.fullName,
    emailId: this.state.emailId,
    password: this.state.password,
    phoneNumber: this.state.phoneNumber,
    gender: this.state.gender
  };
  dataPost(`/user/createUser`,user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
  render() {
    return (
    <div className="loginParent">
    <div className="col-sm-4">
     <Card style={{ display:'flex', justifyContent:'center' }}>
     <Card.Body className="p-4">
     <form onSubmit={this.handleSubmit}> 
    <h2>SIGNUP </h2>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="userName" placeholder="Username" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="fullName" placeholder="Full Name" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="email" name="emailId" placeholder="Email Id" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="phoneNumber" placeholder="Contact No." onChange={this.handleChange}/>
     <br/>
     <label>Gender</label><br/>
        <input type="radio" name="gender" value="MALE" onChange={this.handleGender}/>
        <label>MALE</label>
       <input type="radio" name="gender" value = "FEMALE" onChange={this.handleGender}/>
        <label>FEMALE</label>
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
export default SignUpPage