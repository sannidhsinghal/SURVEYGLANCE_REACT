import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export class LogoutPage extends Component {

   
    componentDidMount(){
        localStorage.clear();
        
    }
    
    render() {
        return (
            <Redirect to ="/login"/>
        )
    }
}

export default LogoutPage
