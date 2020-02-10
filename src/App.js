import React, { Component } from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import "./css/navbar.css";
import "./App.css"
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import User from "./components/User";
import UserData from './components/UserData.js'
import Dashboard from "./components/Dashboard";
import { FaPowerOff, FaSignInAlt } from "react-icons/fa";
import { ResponseTable } from "./components/ResponseTable";
import ResponseDetails from "./components/ResponseDetails";
import SurveyRequest from "./components/SurveyRequest";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SignUpPage from "./components/SignUpPage";
import surveyQuestions from './components/surveyQuestions'
import ShowUserDetail from "./components/ShowUserDetail";
//import SurveyPage from "./components/SurveyPage";
import ChartPage from "./components/ChartPage"
import { Drawer,Divider,List,ListItemIcon} from "@material-ui/core";
import SurveyStepper from "./components/SurveyStepper";
import MyForm from "./components/MyForm";
//import DynamicForm from "./components/DynamicForm";

class App extends Component {
       constructor() {
       super();
       this.state = {
       username: ""
       };
       }
        render() {
        var loggedNavBar;
        var navbar;
        if (localStorage.getItem("userId")) {
        loggedNavBar = (
        <Navbar.Text className="d-flex p-md-0">
         <Nav.Link
         href="/logout"
         className="loginBtn"
         location={this.props.location}
         onClick={() =>{localStorage.removeItem('userId')}}
         >
         {" "}
         <FaPowerOff /> Logout
         </Nav.Link>
         </Navbar.Text>
         );
         } else {
         loggedNavBar = (
         <Nav.Link
          href="/login"
          className="loginBtn"
          location={this.props.location}
          >
          <FaSignInAlt /> Login
          </Nav.Link>
          );
          }
          if(localStorage.getItem("userId")){
          navbar= (<div>
          <Navbar
          expand="lg"
          variant="dark"
          bg="dark"
          fixed="top"
          className="menubar pt-0 pb-0 pr-0"
          >
          <Navbar.Brand href="/home" style={{marginLeft:"50px"}}>SURVEYGLANCE</Navbar.Brand>
          <br />
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/home"><HomeIcon/> Home </Nav.Link>
          <Nav.Link href="/dashboard"><DashboardIcon/> Dashboard</Nav.Link>
          </Nav>
          <Nav className="mr-sm-0 login_part">{loggedNavBar}</Nav>
          </Navbar.Collapse>
          </Navbar>
          <Drawer
          variant="permanent"
          open="true"  
          anchor="left"          >
          <Divider />
          <List/>
          <List/>
          <List/>
          <List>
          <ListItemIcon><HomeIcon fontSize="large"/></ListItemIcon>
          </List>
          <List>
          <ListItemIcon><DashboardIcon  fontSize="large"/></ListItemIcon>
          </List>
          <List>
          <ListItemIcon><AccountCircleIcon fontSize="large"/></ListItemIcon>
          </List>
          </Drawer>
          </div>)};
          return (
          <div>
          {navbar}
          <Router>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/user" component={User} />
          <Route exact path="/UserData" component={UserData}/>
          <Route exact path ="/response" component={ResponseTable}/>
          <Route exact path ="/responseDetails" component={ResponseDetails}/>
          <Route exact path ="/requests" component={SurveyRequest}/>
          <Route exact path="/" component={LoginPage} />    
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/Chart" component={surveyQuestions}/>
          <Route exact path="/showuserdetail" component={ShowUserDetail}></Route>
          <Route exact path="/chartpage" component={ChartPage}/>
          <Route exact path="/survey" component={SurveyStepper}/>
          <Route exact path="/myform" component={MyForm}/>
          </Router>
          </div>
    );
  }
}

export default App;
