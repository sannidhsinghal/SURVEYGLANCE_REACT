
import React from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import { Input } from 'reactstrap';
import Switch from "react-switch";

export default class SurveyPage extends React.Component {
  constructor(){
    super()
  this.state = {
    "baseLanguage": "",
    "categoryId": 0,
    "createdById": 0,
    "description": "",
    "ensurePoints": "",
    "isIpAllowed":false,
    "keyPoints": "",
    "name": "",
    "singleResponseUser": false
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
    createdById:this.state.createdById,
    description:this.state.description,
    ensurePoints:this.state.ensurePoints,
    isIpAllowed:this.state.isIpAllowed,
    keyPoints:this.state.keyPoints,
    name:this.state.name,
    singleResponseUser:this.state.singleResponseUser,
  };
  console.log(this.state.city)
  console.log(user)

  axios.post(`https://surveyglance.herokuapp.com/api/tache/facade/survey/createSurvey`,user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function(error){
      console.log(error)
    })
}
  render() {
    return (
       <div className="container">
     <Form align="center" back onSubmit={this.handleSubmit} className="box" >
     <fieldset>
     <legend><h2 class="h2">Survey Form</h2></legend>
     <div className="input">
        <label>Name: </label>
        <Form.Control type="text"  name="name" onChange={this.handleChange}/>
     <br></br><br/>
     <label>Language : </label>
         <Form.Control class="" type="text" name="baseLanguage" align="right" onChange={this.handleChange}/>
   <br/><br/>
   <label>Category: </label>
         <Form.Control class="" type="text" name="categoryId" onChange={this.handleChange}/>
  <br/><br/>
  <label>CREATEID:</label>
           <Form.Control type="text" name="createdById" onChange={this.handleChange}/>
    <br/><br/>
    <label>ENSURE:</label>
             <Form.Control class="" type="text" name="ensurePoints" onChange={this.handleChange}/>
        <br></br><br/>
          <label>KEY POINTS:</label>
               <Form.Control class="" type="text" name="keyPoints" onChange={this.handleChange}/>
          <br></br><br/>
          <label>DESCRIPTION:</label>
          <textarea class="textarea" type="text" name="description" onChange={this.handleChange}/>
          <br></br><br/>
          <label>RESPONSE</label>
               {/*<input class="" type="text" name="singleResponseUser" placeholder="singleResponseUser" onChange={this.handleChange}/>*/}
               <label>
               <Switch name="singleResponseUser" onChange={this.handleResponse} checked={this.state.singleResponseUser}  />
             </label>  
      <br></br>
       <label>IPALLOWED </label>
          {/*<input class="" type="text" name="isIpAllowed"   placeholder="isIpAllowed" onChange={this.handleChange}/>*/}
          <label>
          <Switch name="isIpAllowed" onChange={this.handleIp} checked={this.state.isIpAllowed}  />
        </label>  
        <br/>
              <button class="button" align="right" type="submit">Submit</button>
            </div>
        </fieldset>
    </Form>
       </div>
    )
  }
}
