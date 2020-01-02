import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { FaMusic } from "react-icons/fa";
import Figure from "react-bootstrap/Figure";
import MapComponent from "./MapComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    var details, details2;
    var loginButtton;
    if (localStorage.getItem("isLogged")) {
      details = (
        <tr>
          <th>
            {" "}
            <label>Email</label>
          </th>
          <td>{this.props.location.state.user.email}</td>
        </tr>
      );
      details2 = (
        <tr>
          <th>
            {" "}
            <label>Contact No</label>
          </th>
          <td>{this.props.location.state.user.phone}</td>
        </tr>
      );
    } else {
      loginButtton = (
        <tr>
          {" "}
          <th colspan="4">
            {" "}
            <Link
              to={{
                pathname: "/login",
                state: { user: this.props.location.state.user }
              }}
            >
              <Button variant="login_btn" className="m-0 btn-block ">
                Login to view Details
              </Button>{" "}
            </Link>
          </th>{" "}
        </tr>
      );
    }
    return (
      <div
        key={this.props.id}
        className="container-fluid"
        style={{ marginTop: "65px" }}
      >
        <div class="row">
          <div class="col-sm-6 pr-md-1 mb-2">
            <Card>
              <Card.Body>
                <Card.Title>Profile Details</Card.Title>
                <Card.Text>
                  <table className="table text-left table-bordered">
                    <tr>
                      <th>Name</th>
                      <td>{this.props.location.state.user.name}</td>
                    </tr>
                    <tr>
                      <th>Website</th>
                      <td>{this.props.location.state.user.website}</td>
                    </tr>
                    {details}
                    {details2}
                    <tr>
                      <th>Address</th>
                      <td>
                        {this.props.location.state.user.address.suite},
                        {this.props.location.state.user.address.street},
                        {this.props.location.state.user.address.city}
                      </td>
                    </tr>
                  </table>
                </Card.Text>
                <Card.Title>Company Details</Card.Title>
                <Card.Text>
                  <table className="table text-left table-bordered">
                    <tr>
                      <th>Name</th>
                      <td>{this.props.location.state.user.company.name}</td>
                    </tr>
                    <tr>
                      <th>Business</th>
                      <td>{this.props.location.state.user.company.bs}</td>
                    </tr>
                    {loginButtton}
                  </table>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-6 pl-md-1 mb-2">
            <Card className=" p-2 heightfull">
              <div className="mapParent">
                <MapComponent
                  lat={this.props.location.state.user.address.geo.lat}
                  lng={this.props.location.state.user.address.geo.lng}
                />
              </div>
            </Card>
          </div>
        </div>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>Albums:</Card.Title>
            <Card.Text>
              {this.props.location.state.user.album
                .sort((a, b) => a.title.localeCompare(b.title))
                .slice(0, 5)
                .map(function(params) {
                  return (
                    <Card className="mb-4" key={params.id}>
                      <Card.Body>
                        <div key={params.id}>
                          <Card.Title>
                            <FaMusic /> {params.title}
                          </Card.Title>

                          <Card.Text>
                            <div className="album_ui" key={params.id}>
                              {params.photo.slice(0, 2).map(function(params) {
                                return (
                                  <div key={params.id} className="album_part">
                                    <Figure key={params.id} className="mb-0">
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
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default User;
