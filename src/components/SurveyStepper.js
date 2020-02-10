import React from "react";
import { Stepper, Step, StepLabel,MenuItem } from "@material-ui/core";
import {Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Card, Button} from "react-bootstrap";
import { dataPost, dataGet } from "./GetData";
import Switch from "react-switch";

import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {uploadFile,uploadImage} from "./FileUpload"
import {Text,Signature,MCQ,Date_Time,SCQ,Likart_Scale, BarCode,Location,Number,Media,Scale,Email,File_Upload,Rating} from './Common'
import MyForm from "./MyForm";


class SurveyStepper extends React.Component {
  constructor(props) {
    super();
    this.state = {
       param:"",
      baseLanguage: "",
      categoryId: 0,
      description: "",
      ensurePoints: "",
      isIpAllowed: false,
      keyPoints: "",
      name: "",
      singleResponseUser: false,
      approvalRequired:false,
      activeStep: 0,
      data:[],
      categories:[],
      imagePath:"",
      file:null
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIp = this.handleIp.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.setImage = this.setImage.bind(this);
  }
  
    /* addDynamicComponent(param){

    console.log(param)
          switch (param){

            case 'Email':
              return(
                <div>{Email()}</div>
             )
             break;

             case 'Text':
              return(
                <div>{Text()}</div>
             )
             break;

             case 'Signature':
              return(
                <div>{Signature()}</div>
             )
             break;

             case 'File_Upload':
              return(
                <div>{File_Upload()}</div>
             )
             break;

             case 'Rating':
              return(
                <div>{Rating()}</div>
             )
             break;

              case 'MCQ':
                   return(
                     <div>{MCQ()}</div>
                  )
                  break;
    
               case 'SCQ':
                      return(
                        <div>{SCQ()}</div>
                     ) 
                  break;
    
               case 'Date_Time':
                       return(
                      <div>{Date_Time()}</div>
                       )
                break;
    
               case 'Likart_Scale':
                     return(
                  <div>{Likart_Scale()}</div>
                     )
                    break;
    
               case 'BarCode':
                 return(
                 <div>{BarCode()}</div>
                 )
                    break;
    
               case 'Location':
                    return(
                      
                      <div>{Location()}</div>
                   )
                      break;
    
               case 'Media':
                      return(
    
                      <div>{Media()}</div>
                      )
                  break;
              
               case 'Number':
                   return(
    
                    <div> {Number()}</div>
                   ) 
                 break;   
               case 'Scale':
                     return(
                       <div>{Scale()}</div>
                     )
                     break;                           
              }  
       }*/

  
  componentDidMount(){
    dataGet('/surveyCategory/getAllSurveyCategory')
    .then(response=>{
      this.setState({
        categories:response
      })
    })
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  }

  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.param);
  }
  handleResponse(singleResponseUser) {
    this.setState({ singleResponseUser });
  }
  handleIp(isIpAllowed) {
    this.setState({ isIpAllowed });
  }

  handleApproval(approvalRequired){
   this.setState({approvalRequired});
  }
    handleSubmit = event => {
    event.preventDefault();
    this.handleNext(this.state.activeStep);
    const survey = {
      baseLanguage: "English",
      categoryId: this.state.categoryId,
      description: this.state.description,
      ensurePoints: this.state.ensurePoints,
      isIpAllowed: this.state.isIpAllowed,
      keyPoints: this.state.keyPoints,
      name: this.state.name,
      createdById:localStorage.getItem('userId'),
      singleResponseUser: this.state.singleResponseUser,
      approvalRequired:this.state.approvalRequired,
      imagePath:this.state.imagePath,
      param:this.state.param
    };
    console.log(survey)
    dataPost(`/survey/createSurvey`, survey).then(res => {
      this.setState({
        data:res
      })
      console.log(res);
      console.log(res.data);
    });
  };

  handleFile(e) {
    this.setState({file:e.target.files[0]})
  }

  setImage(){
  var url = uploadImage(this.state.file)
  console.log(url)
  this.setState({
    imagePath:url
  })
  console.log(this.state.imagePath)
  }
   
  getStepContent(params) {
    switch (params) {
      case 0:
        return (
          <div>
            <label>Name: </label>
            <TextField
              variant="outlined"
              name="name"
              margin="normal"
              fullWidth
              onChange={this.handleChange}
            />
            <br />
            <label>Language : </label>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="baseLanguage"
              align="right"
              onChange={this.handleChange}
              value="English"
            />
            <br />
            <label>Category: </label>
            <TextField
              variant="outlined"
              select
              margin="normal"
              fullWidth
              value={this.state.categoryId}
              name="categoryId"
              onChange={this.handleChange}
              helperText="Please select a category"
            >
              {this.state.categories.map(category =>(
               <MenuItem key={category.id} value={category.id}>
                 {category.name}
               </MenuItem>
              ))}
              
              
            </TextField>
            <br />
            <label>Ensure Points:</label>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows="4"
              name="ensurePoints"
              onChange={this.handleChange}
            />
            <br />
            <label>Key Instructions:</label>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows="4"
              name="keyPoints"
              onChange={this.handleChange}
            />
            <br />
            <label>Description:</label>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows="4"
              type="text"
              name="description"
              onChange={this.handleChange}
            />
            <label>Upload banner for the survey(optional)</label>
            <TextField variant="outlined" type="file" onChange={this.handleFile}/> 
            <Button variant="login_btn" onClick={this.setImage}>Upload</Button>
            <br/>
            <label>Should one user fill the survey once only</label>
            <Switch
              name="singleResponseUser"
              onChange={this.handleResponse}
              checked={this.state.singleResponseUser}
              onColor="#bf8300"
              onHandleColor="#ffff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={15}
              width={45}
            />
            <br />
            <span>Do you want to capture the IP address</span>
              <Switch
                name="isIpAllowed"
                onChange={this.handleIp}
                checked={this.state.isIpAllowed}
                onColor="#bf8300"
                onHandleColor="#ffff"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={45}
              />
            <br />
            <span>
              Do you want to approve the user for filling the survey 
            </span>
            <Switch
                name="approvalRequired"
                onChange={this.handleApproval}
                checked={this.state.approvalRequired}
                onColor="#bf8300"
                onHandleColor="#ffff"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={45}
              />
            <br />
            <Button variant="login_btn" align="right" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        );

      case 1:
        console.log(this.state.data)
        return (
          <div>
         
          <center>  
         <p> Please upload the excel containing the questions</p>   
            <div style={{marginTop:"200px"}}>  
            <TextField type="file" onChange={this.handleFile}/>
            <Button variant="login_btn" onClick={() =>uploadFile(this.state.file,this.state.data.id,this.state.data.createdById)}>Upload</Button>
            <Button variant="login_btn" onClick={this.handleBack}>Back</Button>
            <Button variant="login_btn" onClick={this.handleNext}>
              Next
            </Button>
            </div>
            </center>
            
          </div>
        )


      case 2:
        return (
          <div>
            <Button onClick={this.handleBack}>Back</Button>
            <Link to="/home"><Button>GO TO HOME SCREEN</Button></Link>
          </div>
        );
    }
  }

  render() {
    var steps = ["Enter Basic Details", "Add Questions", "Publish"];
    return (

    <div>

     {/*<div style={{marginTop:"100px"}}>
   
     
     <form align="center">
     <input type="text" name="param"
       placeholder="Enter Value Here"
       onChange={this.handleChange}
     />
     <Button type="button" onClick={(event)=>{this.addDynamicComponent(this.state.param)}}>
       Select
     </Button>
    </form>*/}


      <div style={{ marginTop: "30px" }}>
        <Card
          style={{
            justifyContent: "center",
            width: "80rem",
            marginLeft: "100px"
          }}
        >
          <Card.Body className="p-4">
          <Stepper activeStep={this.state.activeStep}>
          {steps.map(step => {
                return (
                  <Step>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <MyForm/>
            {this.getStepContent(this.state.activeStep)}
           {/* <form align="center">
            <input type="text" name="param"
              placeholder="Enter Value Here"
              onChange={this.handleChange}
            >

            </input>
            <Button type="button" onClick={(event)=>{this.addDynamicComponent(this.state.param)}}>
              Select
            </Button>
           </form>
            {this.addDynamicComponent(this.state.param)}*/}
          </Card.Body>
        </Card>         
      </div>

      </div>
      // </div>
    );
  }
}
export default SurveyStepper;
