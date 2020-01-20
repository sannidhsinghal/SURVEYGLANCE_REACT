import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {FaSignInAlt } from 'react-icons/fa';
import { dataPost } from "./GetData";
import {Redirect} from 'react-router-dom'
import {TextField} from '@material-ui/core'
import { LinearProgress } from '@material-ui/core';

export class LoginPage extends Component {
    
  constructor(){
    super();
     this.state={
       username:"",
       password:"",
       userId:"",
       isLogged:false,
       source:'',
       error:"",
       completed:0
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
          isLogged:true,
          userId:response.id
          })
        localStorage.setItem('userId',response.id)
      }
    })
  }
  
   

   
    
  
  render() {

  if(this.state.isLogged){
    return(
      <Redirect to ={{pathname:'/home',state:{
        userId:this.state.userId
      }}}></Redirect>
    )
  }


        return (
            <div className="loginParent">
            <div className="col-sm-4">
            <Card style={{ display:'flex', justifyContent:'center' }}>
                     <Card.Body className="p-4">  
                    <form  onSubmit ={this.handleSubmit}>
                        <div className="">
                         </div>
                          <h3 className="text-center mb-3">LOGIN</h3>
                            <div className ="fields">
                              <p className="text-danger">{this.state.error}</p>
                               <TextField variant="standard" margin ="normal" fullWidth placeholder = "Username" onChange= {this.handleChange}/>
                              <br/>
                                <TextField variant="standard" type = "password" margin="normal" fullWidth placeholder="Password"onChange= {this.handlePassword}/>
                              <br/>
                              <Button variant="login_btn" type = "submit" className="m-0 btn-block "><FaSignInAlt/> Login</Button>
                         </div>
                     </form>
                    </Card.Body>
                    </Card>            
                    </div>
                    </div>
        )
     
  }
}

export default LoginPage
