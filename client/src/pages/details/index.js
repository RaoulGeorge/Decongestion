import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Col,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location);
    this.state = {
      email: props.location.state.email,
      name: props.location.state.name,
      Company: "Atlassian",
      Time_Slot: "04.00PM",
      Location: "",
      Notify: false
    };
    this.handleCompany = this.handleCompany.bind(this);
    this.handleTime_Slot = this.handleTime_Slot.bind(this);
    this.handleNotify = this.handleNotify.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.findMe = this.findMe.bind(this);
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

  handleTime_Slot = function(value) {
    this.setState({
      Time_Slot: value ? value : ""
    });
  };

  handleNotify = function(value) {
    this.setState({
      Notify: value ? value : false
    });
  };
  onSubmit = function(event) {
    event.preventDefault();
    this.props.history.push("dashboard", this.state);
  };

  render() {
    var stateValue = this.props.location.state;

    return (
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
              NAME
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
            <Label for="Time Slot" sm={2}>
              Time Slot
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="Time Slot"
                id="Time_Slot"
                onSelect={this.handleTime_Slot}
                value={this.state.Time_Slot ? this.state.Time_Slot : "04.00PM"}
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
              Location
            </Label>
            <Col sm={10}>
              <button id="find-me" onClick={this.findMe}>
                Show my location
              </button>
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

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Details);
