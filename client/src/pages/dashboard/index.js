import React from "react";
import Map from "./../map";
import { Container } from "reactstrap";

function Dashboard(props) {
  console.log();
  return (
    <Container>
      <div className="Dashboard">
        <div className="container" />
        <div className="map-container">
          <Map loc={props.location.state.Location} />
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
