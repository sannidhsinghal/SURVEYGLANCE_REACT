import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {FaSignInAlt } from 'react-icons/fa';
import { dataPost } from "./GetData";
import {Redirect} from 'react-router-dom'

export class LoginPage extends Component {
    
  constructor(){
    super();
     this.state={
       username:"",
       password:"",
       isLogged:false,
       users:[],
       source:'',
       data:[],
       error:""
     }
  }


  handleChange = event => {
    this.setState({ username: event.target.value });
  }
  
handlePassword = event =>{
    this.setState({password : event.target.value})
  }



  handleSubmit = event =>{
    event.preventDefault();
    const user ={
      username:this.state.username,
      password:this.state.password
    };
    dataPost('/user/login',user)
    .then(response=>{
      if(response.hasOwnProperty('userName')){
        this.setState({
          isLogged:true
        })
        localStorage.setItem('userId',response.id)
        localStorage.setItem('isLogged',true)
      }
    })
  }
  
   

   
    
  
  render() {

  if(this.state.isLogged){
    return(
      <Redirect to ='/home'></Redirect>
    )
  }



        return (
            <div className="loginParent">
            <div className="col-sm-4">
            <Card style={{ display:'flex', justifyContent:'center' }}>
                     <Card.Body className="p-4">  
                    <Form  onSubmit ={this.handleSubmit}>
                        <div className="">
                         </div>
                          <h3 className="text-center mb-3">LOGIN</h3>
                            <div className ="fields">
                              <p className="text-danger">{this.state.error}</p>
                               <Form.Control  type = "email " placeholder = "Email" onChange= {this.handleChange}/>
                              <br/>
                                <Form.Control  type = "password" placeholder="Password"onChange= {this.handlePassword}/>
                              <br/>
                              <Button variant="login_btn" type = "submit" className="m-0 btn-block "><FaSignInAlt/> Login</Button>
                         </div>
                     </Form>
                    </Card.Body>
                    </Card>            
                    </div>
                    </div>
        )
     
  }
}

export default LoginPage
