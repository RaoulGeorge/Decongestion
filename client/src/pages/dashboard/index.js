import React from "react";
import Map from "./../map";
import { Container } from 'reactstrap';

function Dashboard(props) {
  return (
    <Container>
    <div className="Dashboard">
      <div className="container">

      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
    </Container>
  );
}

export default Dashboard;
