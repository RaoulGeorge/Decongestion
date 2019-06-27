import React from "react";
import Map from "./../map";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <div className="container" />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default Dashboard;
