import React from 'react';
//import Form from 'react-bootstrap/Form'
//import axios from 'axios';
//import { Input } from 'reactstrap';
import Switch from "react-switch";
import { dataPost } from "./GetData";
import {TextField} from '@material-ui/core'
import {Card,Button} from "react-bootstrap"

export default class SurveyPage extends React.Component {
  constructor(){
    super()
  this.state = {
    baseLanguage: "",
    categoryId: 0,
    description: "",
    ensurePoints: "",
    isIpAllowed:false,
    keyPoints: "",
    name: "",
    singleResponseUser: false
  }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleIp=this.handleIp.bind(this)
     this.handleResponse=this.handleResponse.bind(this)
  }
 
handleChange(event){
  this.setState({
   [event.target.name] : event.target.value
  }
  )
}
handleResponse(singleResponseUser) {
  this.setState({ singleResponseUser});
  console.log(this.state.singleResponseUser)
}
handleIp(isIpAllowed) {
  this.setState({ isIpAllowed });
  console.log(this.state.isIpAllowed)
}
handleSubmit = event => {
  event.preventDefault();
  const user = {
    baseLanguage:this.state.baseLanguage,
    categoryId:this.state.categoryId,
    description:this.state.description,
    ensurePoints:this.state.ensurePoints,
    isIpAllowed:this.state.isIpAllowed,
    keyPoints:this.state.keyPoints,
    name:this.state.name,
    singleResponseUser:this.state.singleResponseUser,
  };
  console.log(this.state.city)
  console.log(user)

  dataPost('/survey/createSurvey',user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
  render() {
    return (
     <div className="loginParent"> 
     <div className="col-md-6">
     <Card style={{ display:'flex', justifyContent:'center' ,marginTop:"50px" }}>
     <form onSubmit={this.handleSubmit} >
     <Card.Body>
     <Card.Header>Enter survey details</Card.Header>
     <label>Name: </label>
     <TextField variant="standard" margin ="normal" fullWidth name="name" onChange={this.handleChange}/>
     <br/>
     <label>Language : </label>
     <TextField variant="standard" margin ="normal" fullWidth name="baseLanguage" align="right" onChange={this.handleChange}/>
     <br/>
     <label>Category: </label>
     <TextField variant="standard" margin ="normal" fullWidth name="categoryId" onChange={this.handleChange}/>
     <br/>
     <label>Ensure Points:</label>
     <TextField variant="standard" margin ="normal" fullWidth name="ensurePoints" onChange={this.handleChange}/>
     <br/>
     <label>Key Instructions:</label>
     <TextField variant="standard" margin ="normal" fullWidth name="keyPoints" onChange={this.handleChange}/>
     <br/>
     <label>Description:</label>
     <TextField  variant="standard" margin ="normal" fullWidth  type="text" name="description" onChange={this.handleChange}/>
     <br/>
     <label>Should one user fill the survey once only</label>
     <label>
     <Switch name="singleResponseUser" onChange={this.handleResponse} checked={this.state.singleResponseUser}     
    onColor="#bf8300"
    onHandleColor="#ffff"
    handleDiameter={20}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={15}
    width={45} />
     </label>  
     <br/>
     <span>Do you want to capture the IP address</span>
     <label>
     <Switch name="isIpAllowed" onChange={this.handleIp} checked={this.state.isIpAllowed}
       onColor="#bf8300"
       onHandleColor="#ffff"
       handleDiameter={20}
       uncheckedIcon={false}
       checkedIcon={false}
       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
       activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
       height={15}
       width={45}  />
     </label>  
     <br/>
     <Button variant="login_btn"  className="m-0 btn-block" align="right" type="submit">Submit</Button>
     </Card.Body>
     </form>
     </Card>
     </div>
     </div>
    )}
}
