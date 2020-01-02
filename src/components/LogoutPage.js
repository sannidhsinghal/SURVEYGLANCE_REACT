import React, { Component } from 'react'

export class LogoutPage extends Component {

   
    componentDidMount(){
        localStorage.clear();
        this.props.history.goBack()
    }
    
    render() {
        return (
            <div>
                <h1>LOGOUT page here</h1>
            </div>
        )
    }
}

export default LogoutPage
