import React  from 'react'
import {Redirect, Router, Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const ErrorPage = ()=>{
    let history= useHistory()
    
    return(
    <div style={{marginTop:"90px", marginLeft:"90px"}}>
        <h1>404 Error Found</h1>
        <button type="button" onClick={()=>history.goBack()} >GO BACK </button>
        </div>
    )}
export default ErrorPage