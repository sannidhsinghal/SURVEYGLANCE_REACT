
import React from 'react';
//import {dataGet} from './GetData'
import axios from 'axios';

export default class ShowUserDetail extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get(`https://surveyglance.herokuapp.com/api/tache/facade/user/admin/getRespondents`)
      .then(res => {
      console.log(res.data)
      let response = res.data;
      console.log(response);
      this.setState({
          data:res.data
      })
      })
  }
  render() {
    return (
       <div>
       <table border="2" align="center" bgcolor="pink">
       <tr>
          <th>UserName</th>
          <th>FullName</th>
          <th>EMAIL ID</th>
          <th>GENDER</th>
          <th>PHONE NUMBER</th>
          <th>STREET ADRESS</th>
          <th>CITY</th>
          <th>STATE</th>
      </tr>
      {this.state.data.map(res=>( 
        <tr>
        <td>{res.userName}</td>
        <td>{res.fullName}</td>
        <td>{res.emailId}</td>
        <td>{res.phoneNumber}</td> 
        <td>{res.gender}</td>  
        <td>{res.streetAddress}</td>
        <td>{res.city}</td>
        <td>{res.state}</td>
        </tr>
    ))} 
      </table>
       </div>
    )}
}
