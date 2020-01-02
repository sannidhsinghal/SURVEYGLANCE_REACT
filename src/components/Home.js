import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { FaMusic, FaInfoCircle, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getResultantData } from "./GetResultantData";
import Accordion from "react-bootstrap/Accordion";

import { Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Spinner from "react-bootstrap/Spinner";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: [],
      user: [],
      loading: true
    };
  }

  componentDidMount() {
    getResultantData()
      .then(response => {
        this.setState({
          users: response,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  render() {
      if (this.state.loading) {
        return (
          <div
            style={{ position: "fixed", top: "50%", left: "50%" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Spinner animation="grow" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        );
      } else {
        return (
          <div style={{ marginTop: "65px" }} className="container-fluid">
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Total Users: {this.state.users.length}</Card.Title>
                {this.state.users
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(params => {
                  return (
                    <Accordion key={params.id}>
                      <Card key={params.id}>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                            className="p-0 full-width d-block"
                            style={{ textDecoration: "none" }}
                          >
                            <h6 className="m-0 d-flex justify-content-between user-data">
                              {" "}
                              <span style={{ fontFamily: "Comic Sans MS" }}>
                                <FaUserTie /> {params.name}
                              </span>{" "}
                              <Link
                                to={{
                                  pathname: "/user",
                                  state: { user: params }
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                <FaInfoCircle />{" "}
                              </Link>
                            </h6>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="mb-2">
                              {params.album
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .slice(0, 2)
                                .map(params => {
                                  return (
                                    <Card className="mb-4" key={params.id}>
                                      <Card.Body>
                                        <div key={params.id}>
                                          <Card.Title>
                                            <FaMusic /> {params.title}
                                          </Card.Title>

                                          <div className="album_ui">
                                            {params.photo
                                              .sort((a, b) =>
                                                a.title.localeCompare(b.title)
                                              )
                                              .slice(0, 2)
                                              .map(function(params) {
                                                return (
                                                  <div
                                                    key={params.id}
                                                    className="album_part"
                                                  >
                                                    <Figure
                                                      key={params.id}
                                                      className="mb-0"
                                                    >
                                                      <Figure.Image
                                                        width={100}
                                                        alt="album image"
                                                        src={params.url}
                                                        className="mb-0"
                                                      />
                                                      <Figure.Caption>
                                                        {params.title}
                                                      </Figure.Caption>
                                                    </Figure>
                                                  </div>
                                                );
                                              })}
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                  );
                                })}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  );
                })}
              </Card.Body>
            </Card>
          </div>
        );
      }
    }
  }

export default Home;
