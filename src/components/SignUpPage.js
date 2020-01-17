
import React from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

 class SignUpPage extends React.Component {
  constructor(){
    super()
  this.state = {
    "city": "",
 "country": "",
 "currentLocation": "",
 "deviceInfo": {
   "imeiNo": "string",
   "modelNo": "string",
   "os": "string",
   "serialNo": "string",
   "version": "string"
 },
   "emailId": "",
 "fullName": "",
 "gender": "MALE",
 "password": "",
 "phoneNumber": "",
 "pincode": 0,
 "state": "",
 "streetAddress": "",
 "totalCredits": 0,
 "userName":""
  }
     this.handleChange = this.handleChange.bind(this);
     this.handleGender = this.handleGender.bind(this);
  }
 
handleChange(event){
  this.setState({
   [event.target.name] : event.target.value
  }     
  )
}

handleGender = event =>{
    this.setState({
        gender:event.target.value
    })
}

handleSubmit = event => {
  event.preventDefault();

  const user = {
    city: this.state.city,
    country: this.state.country,
    currentLocation: this.state.currentLocation,
    "deviceInfo": {
      "imeiNo": "string",
      "modelNo": "string",
      "os": "string",
      "serialNo": "string",
      "version": "string"
    },
    emailId: this.state.emailId,
    fullName: this.state.fullName,
    gender: this.state.gender,
    password: this.state.password,
    phoneNumber: this.state.phoneNumber,
    pincode: this.state.pincode,
    state: this.state.state,
    streetAddress: this.state.streetAddress,

    totalCredits: this.state.totalCredits,
    userName: this.state.userName,
  };
  console.log(this.state.city)
  console.log(user)

  axios.post(`https://surveyglance.herokuapp.com/api/tache/facade/user/createUser`,user)
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
       <div>
     <Form align="center" back onSubmit={this.handleSubmit} className="box1" >
     <fieldset><legend><h2>SignUp Form</h2></legend>
     <Form.Control type="text" name="userName" placeholder="UserName" onChange={this.handleChange}/>
     <br/>
     <Form.Control class="form-control" type="text" name="fullName" placeholder="FullName" onChange={this.handleChange}/>
     <br/>
     <Form.Control class="form-control" type="email" name="emailId" placeholder="EmailId" onChange={this.handleChange}/>
     <br/>
     <Form.Control class="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
     <br/>
     <Form.Control type="text" name="phoneNumber" placeholder="PhoneNumber" onChange={this.handleChange}/>
     <br/>
     <div>
     <label><h5>Gender</h5></label>
        <input type="radio" name="gender" value="MALE" onChange={this.handleGender}/>
        <label><h5>MALE</h5></label>
       <input type="radio" name="gender" value = "FEMALE" onChange={this.handleGender}/>
        <label><h5>FEMALE</h5></label>
     </div>
     {/*<Form.Control type="text" name="gender" placeholder="Gender" onChange={this.handleChange}/>*/}
     <br/>
     <button class="button" type="submit" align="right">SignUp</button>
     </fieldset>
     </Form>
     </div>
    )
  }
}
export default SignUpPage