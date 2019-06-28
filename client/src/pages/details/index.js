import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../data/worstCase";

import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./details.scss";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.location.state.email,
      name: props.location.state.name,
      Company: "Atlassian",
      Time_Slot: "04.00PM",
      Location: "",
      Notify: false,
      transport: "car",
      data: data
    };
    this.handleCompany = this.handleCompany.bind(this);
    this.handleTime_Slot = this.handleTime_Slot.bind(this);
    this.handleNotify = this.handleNotify.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.findMe = this.findMe.bind(this);
    this.handleTransport = this.handleTransport.bind(this);
  }

  findMe = function(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        Location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
      });
    });
  };

  handleCompany = function(event, value) {
    this.setState({
      Company: event.target.value ? event.target.value : ""
    });
  };

  handleTime_Slot = function(event) {
    this.setState({
      Time_Slot: event.target.value ? event.target.value : ""
    });
  };

  handleNotify = function(event) {
    this.setState({
      Notify: event.target.value ? event.target.value : false
    });
  };
  handleTransport = function(event) {
    this.setState({
      transport: event.target.value ? event.target.value : false
    });
  };
  onSubmit = function(event) {
    event.preventDefault();
    this.props.history.push("dashboard", this.state);
  };

  render() {
    var stateValue = this.props.location.state;

    return (
      <div className="details-page">
        <Container>
          <h1> Details Form </h1>
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Label for="Email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={stateValue.email}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="NAME" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="TEXT"
                  name="name"
                  id="name"
                  value={stateValue.name}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Company" sm={2}>
                Company
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="Company"
                  id="Company"
                  onChange={this.handleCompany}
                  value={this.state.Company ? this.state.Company : "Shell"}
                >
                  <option>Atlassian</option>
                  <option>Shell</option>
                  <option>HoneyWell</option>
                  <option>Accenture</option>
                  <option>Inmobi</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Transport" sm={2}>
                Mode of Transport
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="Transport"
                  id="Transport"
                  onChange={this.handleTransport}
                  value={this.state.transport ? this.state.transport : "car"}
                >
                  <option>car</option>
                  <option>walk</option>
                  <option>bike</option>
                  <option>cab</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Time Slot" sm={2}>
                Time Slot
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="Time Slot"
                  id="Time_Slot"
                  onChange={this.handleTime_Slot}
                  value={
                    this.state.Time_Slot ? this.state.Time_Slot : "04.00PM"
                  }
                >
                  <option>04.00PM</option>
                  <option>04.10PM</option>
                  <option>04.20PM</option>
                  <option>04.30PM</option>
                  <option>04.40PM</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Location" sm={2}>
                Location {this.state.Location.lat}{" "}
                {this.state.Location.lat && ","} {this.state.Location.lng}
              </Label>
              <Col sm={10}>
                <Button
                  className="show-my-loc"
                  id="find-me"
                  onClick={this.findMe}
                  size="sm"
                >
                  Get my location
                </Button>
                <br />
              </Col>
            </FormGroup>
            <FormGroup check>
              <Col sm={10}>
                <Label check>
                  <Input
                    type="radio"
                    onSelect={this.handleNotify}
                    value={this.state.Notify}
                  />{" "}
                  Notify me for Alerts
                </Label>
              </Col>
            </FormGroup>
            <hr />
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button color="primary" size="lg">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Details);
