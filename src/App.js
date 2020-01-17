import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import SurveyGraph from "./components/SurveyGraph";
import SurveyPage from "./components/SurveyPage"
import SignUpPage from "./components/SignUpPage";


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  render() {
    var loggedNavBar;
    if (localStorage.getItem("userId")) {
      loggedNavBar = (
        <Navbar.Text className="d-flex p-md-0">
          {/* <a href="#login" className="profileBtn">
            <FaUser /> {localStorage.getItem("username")}
          </a> */}
          <Nav.Link
            href="/logout"
            className="loginBtn"
            location={this.props.location}
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

    return (
      <Router>
      
        <div>
          <Navbar
            expand="lg"
            variant="dark"
            bg="dark"
            fixed="top"
            className="menubar pt-0 pb-0 pr-0"
          >
            <Navbar.Brand href="/home">SURVEYGLANCE</Navbar.Brand>
            <br />

            <Navbar.Toggle />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/home"> Home </Nav.Link>
                <Nav.Link href="/dashboard"> Dashboard</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
                <Nav.Link href="/survey">Survey</Nav.Link>
              </Nav>

              <Nav className="mr-sm-0 login_part">{loggedNavBar}</Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/user" component={User} />
          <Route exact path ="/response" component={ResponseTable}/>
          <Route exact path ="/responseDetails" component={ResponseDetails}/>
          <Route exact path ="/requests" component={SurveyRequest}/>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/survey" component={SurveyPage}/>
        </div>
      </Router>
    );
  }
}

export default App;