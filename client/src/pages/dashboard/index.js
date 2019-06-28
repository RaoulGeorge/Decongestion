import React from "react";
import Map from "./../map";
import { Card, Table, Button, Container, Row, Col } from "reactstrap";

function Dashboard(props) {
  var dataArray = [];
  let stateData = props.location.state.data;
  function getTotal() {
    return props.location.state.data.length;
  }
  function getPeopleBetWeenSlot(startTime, startDuration, Endduration) {
    var tempArray = [],
      totalLength,
      FilterLength;
    totalLength = stateData.length;
    var mapData = stateData.filter(function(value) {
      const time = value.Time_Slot.split(".");
      const min = parseInt(time[0]);
      const sec = parseInt(time[1]);
      if (min === 4 && (sec >= startDuration && sec <= Endduration)) {
        tempArray.push(value);
      }
      return !(min === 4 && (sec >= startDuration && sec <= Endduration));
    });

    dataArray[startDuration + ":" + Endduration] = tempArray;
    stateData = mapData;
    FilterLength = totalLength - mapData.length;
    return { FilterLength, totalLength };
  }

  function showGraph(start, end) {
    console.log(dataArray[start + ":" + end]);
  }

  return (
    <div className="Dashboard">
      <Container>
        <h1> Dashboard </h1>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Time slot</th>
              <th>People</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => showGraph(0, 10)}>
              <th scope="row">1</th>
              <td>4:00 to 4:10</td>
              <td>{getPeopleBetWeenSlot(4, 0, 10).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 0, 10).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(10, 20)}>
              <th scope="row">2</th>
              <td>4:10 to 4:20</td>
              <td>{getPeopleBetWeenSlot(4, 10, 20).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 10, 20).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(20, 30)}>
              <th scope="row">3</th>
              <td>4:20 to 4:30</td>
              <td>{getPeopleBetWeenSlot(4, 20, 30).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 20, 30).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(30, 40)}>
              <th scope="row">4</th>
              <td>4:30 to 4:40</td>
              <td>{getPeopleBetWeenSlot(4, 30, 40).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 30, 40).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(40, 50)}>
              <th scope="row">5</th>
              <td>4:40 to 4:50</td>
              <td>{getPeopleBetWeenSlot(4, 40, 50).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 40, 50).totalLength}</td>
            </tr>
          </tbody>
        </Table>

        <div className="map-container">
          <Map loc={props.location.state.Location} />
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
