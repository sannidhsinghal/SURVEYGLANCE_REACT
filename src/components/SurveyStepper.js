import React, { Component } from "react";
import { Stepper, Step, StepLabel, StepContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card, Button } from "react-bootstrap";
import { dataPost } from "./GetData";
import Switch from "react-switch";
import FileUpload from "./FileUpload";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import {Spinner} from "react-bootstrap"
import {Link} from "react-router-dom"
import {BarCode} from "./Common"

class SurveyStepper extends Component {
  constructor() {
    super();
    this.state = {
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
      data:[]
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIp = this.handleIp.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
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
    this.setState({
      [event.target.name]: event.target.value
    });
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
      approvalRequired:this.state.approvalRequired
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

  getStepLabel(params) {
    switch (params) {
      case 0:
        return <StepLabel></StepLabel>;
      case 1:
        return <StepLabel>Add Questions</StepLabel>;
      case 2:
        return <StepLabel>Publish</StepLabel>;
    }
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
              margin="normal"
              fullWidth
              name="categoryId"
              onChange={this.handleChange}
            />
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
        if(this.state.data.length!==0){
        return (
          <div>
            <FileUpload
            surveyId={this.state.data.id}
            userId={this.state.data.createdById}
            />
            <center>
            <div style={{marginTop:"200px"}}>  
            <Button variant="login_btn" onClick={this.handleBack}>Back</Button>
            <Button variant="login_btn" onClick={this.handleNext}>
              Next
            </Button>
            {BarCode}
            </div>
            </center>
          </div>
        )}

        else{
          return(
          <div
          style={{ position: "fixed", top: "50%", left: "50%" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Spinner animation="grow" variant="warning">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
          )}

      case 2:
        return (
          <div>
            <p>Make Survey Live</p>
            <Button onClick={this.handleBack}>Back</Button>
            <Link to="/home"><Button>GO TO HOME SCREEN</Button></Link>
          </div>
        );
    }
  }

  render() {

    var steps = ["Enter Basic Details", "Add Questions", "Publish"];

    return (
      <div style={{ marginTop: "30px" }}>
        <Card
          style={{
            justifyContent: "center",
            width: "80rem",
            marginLeft: "80px"
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
            {this.getStepContent(this.state.activeStep)}
          </Card.Body>
        </Card>
      </div>
      // </div>
    );
  }
}
export default SurveyStepper;
