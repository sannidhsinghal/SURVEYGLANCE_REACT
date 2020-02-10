import React from "react";
import {Text,Signature,MCQ,Date_Time,SCQ,Likart_Scale, BarCode,Location,Number,Media,Scale,Email,File_Upload,Rating} from './Common'
class AddQuestion extends React.Component{

     constructor(){
       super()
       this.state={
         param:""
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.addDynamicComponent  = this.addDynamicComponent.bind(this);
     }

     addDynamicComponent(param) {
          console.log(param)
          if (this.state.param == 'MCQ') {
                return(
                  <div>{MCQ()}</div>
                )
          }
          if (param == 'SCQ') {
            return(
              <div>{SCQ()}</div>
            )
          }
          if (param == 'Media') {
            return(
              <div>{Media()}</div>
            )
          }

          if (param == 'BarCode') {
            return(
              <div>{BarCode()}</div>
            )
          }

          if (param == 'Likart_Scale') {
            return(
              <div>{Likart_Scale()}</div>
            )
          }

          if (param == 'Email') {
            return(
              <div>{Email()}</div>
            )
          }
          if (param == 'Date_Time') {
            return(
              <div>{Date_Time()}</div>
            )
          }
          if (param == 'Rating') {
            return(
              <div>{Rating()}</div>
            )
          }
          if (param == 'File_Upload') {
            return(
              <div>{File_Upload()}</div>
            )
          }
      }
           
             handleChange(event) {
              console.log(event);
              this.setState({
                [event.target.name]: event.target.value
              });
              console.log(this.state.param);
            }
            handleSubmit = event => {
              event.preventDefault();
              const user = {
                param: this.state.param,
              };
            }
   render(){
     return(
       <div>
       <form>
       <b>Please select the type of question</b>  
       <select name="param" onChange={this.handleChange}>
       <option>MCQ</option>
       <option >SCQ</option>
       <option >Media</option>
       <option >BarCode</option>
       <option>Likart_Scale</option>
       <option >Rating</option>
       <option >Email</option>
       <option >Date_Time</option>
       <option >File_Upload</option>
       
       </select>
   </form>
   {this.addDynamicComponent(this.state.param)}
       </div>
     );
   }
}
export default AddQuestion;