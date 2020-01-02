import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";
import Archive from "./components/Archive";
import LogoutPage from "./components/LogoutPage";
import User from "./components/User";
import { FaPowerOff, FaSignInAlt, FaUser } from "react-icons/fa";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  render() {
    var loggedNavBar;
    if (localStorage.getItem("username")) {
      loggedNavBar = (
        <Navbar.Text className="d-flex p-md-0">
          <a href="#login" className="profileBtn">
            <FaUser /> {localStorage.getItem("username")}
          </a>
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
          href="/TrueLinked/login"
          className="loginBtn"
          location={this.props.location}
        >
          <FaSignInAlt /> Login
        </Nav.Link>
      );
    }

    return (
      <Router basename='/TrueLinked'>
      >
        <div>
          <Navbar
            expand="lg"
            variant="dark"
            bg="dark"
            fixed="top"
            className="menubar pt-0 pb-0 pr-0"
          >
            <Navbar.Brand href="/TrueLinked/home">Photopedia</Navbar.Brand>
            <br />

            <Navbar.Toggle />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/TrueLinked/home"> Home </Nav.Link>
                <Nav.Link href="/TrueLinked/about"> About</Nav.Link>
                <Nav.Link href="/TrueLinked/contact"> Contact</Nav.Link>
                <Nav.Link href="/TrueLinked/archive"> Archive</Nav.Link>
              </Nav>

              <Nav className="mr-sm-0 login_part">{loggedNavBar}</Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path=" /login" component={LoginPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/user" component={User} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;