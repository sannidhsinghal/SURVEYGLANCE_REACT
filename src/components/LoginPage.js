import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {getResultantData} from './GetResultantData';
import {FaSignInAlt } from 'react-icons/fa';



export class LoginPage extends Component {
    
  constructor(props){
    super(props);
     this.state={
       username:"",
       password:"",
       isLogged:false,
       users:[],
       source:'',
       data:[],
       error:""
     }
     this.Login=this.Login.bind(this)
  }

  componentDidMount(){
    console.log(this.props)
    console.log(this.context)
    getResultantData()
    .then(response=>{
        this.setState({
            users:response
           
        })})
       .catch(function(error){
       console.log(error)
    })

     
  }


  handleChange = event => {
    this.setState({ username: event.target.value });
  }
  
handlePassword = event =>{
    this.setState({password : event.target.value})
  }



  handleSubmit = event =>{
    event.preventDefault();
    this.setState({
        error:""
      })
    console.log(this.state.username)
    
    let response = this.Login(this.state.username)
    if(response.length===0){
      this.setState({
        error:"Email is not registered"
      })
    }
    else if(this.state.password==="12345"){
      localStorage.setItem('isLogged',true)
       localStorage.setItem('username',response[0].username)
       this.setState({
        isLogged:true
      })
      this.props.history.goBack()
    }else{
      this.setState({
        error:"Incorrect password"
      })
    }
   

   
  }  
  
  Login(email){
    return this.state.users.filter(user=>user.email===email)
  }
  
  
  
  render() {
        return (
            <div className="loginParent">
            
            <div className="col-sm-4">
      
            <Card style={{ display:'flex', justifyContent:'center' }}
>
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
