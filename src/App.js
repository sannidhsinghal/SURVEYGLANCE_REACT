import React, { Component } from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import "./css/navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import { FaPowerOff, FaSignInAlt} from "react-icons/fa";
import { ResponseTable } from "./components/ResponseTable";
import ResponseDetails from "./components/ResponseDetails";
import SurveyRequest from "./components/SurveyRequest"
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SignUpPage from "./components/SignUpPage";
import ShowUserDetail from "./components/ShowUserDetail";
import ChartPage from "./components/ChartPage"
import UserData from "./components/UserData"
import { Drawer,Divider,List,ListItemIcon,ListItemText } from "@material-ui/core";
import SurveyStepper from "./components/SurveyStepper";
import BarCode from "./components/BarCode";
import Date_Time from "./components/Date_Time";
import Likart_Scale from "./components/Likart_Scale";
import Location from "./components/Location";
import MCQ from "./components/MCQ";
import Media from "./components/Media"
import Number from "./components/Number";
import Scale from "./components/Scale";
import SCQ from "./components/SCQ";


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
          anchor="left"  
          containerStyle={{backgroundColor: 'black'}}        >
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
          <Route exact path="/showuserdetail" component={ShowUserDetail}></Route>
          <Route exact path="/chartpage" component={ChartPage}/>
          <Route exact path="/survey" component={SurveyStepper}/>
          <Route exact path="/barcode" component={BarCode}/>
          <Route exact path="/date_time" component={Date_Time}/>
          <Route exact path="/likart_scale" component={Likart_Scale}/>
          <Route exact path="/location" component={Location}/>
          <Route exact path="/mcq" component={MCQ}/>
          <Route exact path="/media" component={Media}/>
          <Route exact path="/number" component={Number}/>
          <Route exact path="/scale" component={Scale}/>
          <Route exact path="/scq" component={SCQ}/>
          </Router>
          </div>
    );
  }
}

export default App;