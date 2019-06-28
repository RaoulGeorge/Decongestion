import React from "react";
import Map from "./../map";
import { Card, Button, Container, Row, Col } from "reactstrap";

function Dashboard(props) {

    var dataArray = [];
    function getTotal(){
      return props.location.state.data.length;
    }
    function getPeopleBetWeenSlot(startTime,startDuration,Endduration){
      var tempArray = [],totalLength,FilterLength;
      totalLength = props.location.state.data.length;
      var mapData = props.location.state.data.filter(function(value){
          const time = value.Time_Slot.split('.');
            const min = parseInt(time[0]);
            const sec = parseInt(time[1]);
            if((min === 4 && (sec >= startDuration && sec <= Endduration ))){
                tempArray.push(value);
            }
            return !((min === 4 && (sec >= startDuration && sec <= Endduration )));  

      });
      dataArray[startDuration+":"+Endduration] = tempArray;
      props.location.state.data = mapData;
      FilterLength = totalLength - mapData.length;
      return <div>
            {FilterLength}| {totalLength}
      </div>;
      
    }

   function showGraph (start,end){
      console.log(dataArray[start+":"+end]);
   }
  return (
  
    <Container>
    <h1> Dash board </h1>
    <Card>
      <div className="Dashboard">
        <div className="container">
           <Row>
          <Col xs="4" sm="3">
              <Button onClick={()=>showGraph(0,10)} outline color="primary">Time slot</Button>
          </Col>
          <Col xs="4" sm="6">4:00 to 4:10</Col>
          <Col xs="4" sm="3">{getPeopleBetWeenSlot(4,0,10)}</Col>
        </Row>
         <Row>
          <Col xs="4" sm="3">
              <Button onClick={()=>showGraph(10,20)}  outline color="primary">Time slot</Button>
          </Col>
          <Col xs="4" sm="6">4:10 to 4:20</Col>
          <Col xs="4" sm="3">{getPeopleBetWeenSlot(4,10,20)}</Col>
        </Row>
         <Row>
          <Col xs="4" sm="3">
              <Button onClick={()=>showGraph(20,30)} outline color="primary">Time slot</Button>
          </Col>
          <Col xs="4" sm="6">4:20 to 4:30</Col>
          <Col xs="4" sm="3">{getPeopleBetWeenSlot(4,20,30)}</Col>
        </Row>
         <Row>
          <Col xs="4" sm="3">
              <Button onClick={()=>showGraph(30,40)} outline color="primary">Time slot</Button>
          </Col>
          <Col xs="4" sm="6">4:30 to 4:40</Col>
          <Col xs="4" sm="3">{getPeopleBetWeenSlot(4,30,40)}</Col>
        </Row>
         <Row>
         <Col xs="4" sm="3">
              <Button onClick={()=>showGraph(40,50)} outline color="primary">Time slot</Button>
          </Col>
          <Col xs="4" sm="6">4:40 to 4:50</Col>
          <Col xs="4" sm="3">{getPeopleBetWeenSlot(4,40,50)}</Col>
        </Row>
        </div>
        </div>
      </Card>
      <div className="map-container">
        <Map loc={props.location.state.Location} />
      </div>
    </Container>
  );
}

export default Dashboard;
