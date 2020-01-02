import React, { Component } from "react";
import { getResultantData } from "./GetResultantData";
import { Card, FormControl } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import GridComponent from "./GridComponent";
import "../index.css";
import { Link } from "react-router-dom";

export class Archive extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: [],
      search: "",
      mainres: [],
      count: localStorage.getItem("searchCount")
        ? localStorage.getItem("searchCount")
        : 0,
      loading: true,
      show: false
    };
    this.searchFilterFunction = this.searchFilterFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    //Getting API Data
    getResultantData()
      .then(response => {
        this.setState({
          users: response,
          mainres: response,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange({ target }) {
    this.setState({
      search: target.value
    });
  }

  async searchFilterFunction() {
    let item = [];
    if ((this.state.count > 4) & !localStorage.getItem("username")) {
      this.setState({
        show: true
      });
      return;
    }

    if (this.state.search !== "") {
      const search = this.state.search.toLowerCase();
      item = this.state.mainres.filter(element => {
        return element.name.toLowerCase().includes(search);
      });
      await this.setState({
        count: this.state.count + 1
      });
      localStorage.setItem("searchCount", this.state.count);//Maintaining count of searches on component change
    } else {
      // If the search bar is empty, set newList to original task list
      item = this.state.mainres;
    }

    // Set the filtered state based on what our rules added to newList
    this.setState({
      users: item
    });
  }

  closeModal() {
    this.setState({
      show: false
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div
          style={{
            position: "fixed",
            top: "44%",
            left: "44%",
            width: "10rem",
            height: "10rem"
          }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem", color: "#fb3" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "56px" }} className="container-fluid">
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Total Users: {this.state.users.length}</Card.Title>
              <div className="input-group mb-3" key="userKey">
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Search by User name"
                  onChange={this.handleChange}
                  value={this.state.search}
                />

                <div className="input-group-append" key={this.state.users.id}>
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{ padding: "2px" }}
                    onClick={this.searchFilterFunction}
                  >
                    Search
                  </span>
                </div>
              </div>

              {this.state.users.map(function(params) {
                return (
                  <div key={params.id} className="mt-4">
                    <strong>
                      <FaUser /> {params.name} | Albums({params.album.length})
                    </strong>
                    <div className="row">
                      {params.album.map(function(album) {
                        return <GridComponent photos={album} key={album.id} />;
                      })}
                    </div>

                    <hr />
                  </div>
                );
              })}
            </Card.Body>
          </Card>
          <Modal show={this.state.show} centered>
            <Modal.Body>
              <p>
                <strong>
                  You are only allowed to do 5 searches . Kindly login to do
                  more searches
                </strong>{" "}
              </p>
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="login_btn" className="m-0 " onClick={this.closeModal}>
                Ok
              </Button>
              <Link to="/login">
                <Button variant="login_btn" className="m-0 btn-block ">
                  Login
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

export default Archive;
