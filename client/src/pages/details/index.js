

import React from 'react';
import { Container,Col,Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Details extends React.Component {
  constructor(props){
    super(props);
    console.log(props.location);
  }
  render() {
    var stateValue = this.props.location.state;
    return (
      <Container>
      <h1> Details Form </h1>
       <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  value={stateValue.email}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="NAME" sm={2}>NAME</Label>
          <Col sm={10}>
            <Input type="TEXT" name="name" id="name"   value={stateValue.name}/>
          </Col>
        </FormGroup>
       
        <FormGroup row>
          <Label for="Company" sm={2}>Company</Label>
          <Col sm={10}>
            <Input type="select" name="Company" id="Company" >
             <option>Atlassian</option>
            <option>Shell</option>
            <option>HoneyWell</option>
            <option>Accenture</option>
            <option>Inmobi</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Time Slot" sm={2}>Time Slot</Label>
          <Col sm={10}>
            <Input type="select" name="Time Slot" id="Time_Slot" >
             <option>04.00PM</option>
            <option>04.10PM</option>
            <option>04.20PM</option>
            <option>04.30PM</option>
            <option>04.40PM</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Location" sm={2}>Location</Label>
          <Col sm={10}>
              <button id = "find-me">Show my location</button><br/>
          </Col>
        </FormGroup>
        <FormGroup check>
        <Col sm={10}>
          <Label check>
             <Input type="radio" /> Notify me for Alerts
             
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
