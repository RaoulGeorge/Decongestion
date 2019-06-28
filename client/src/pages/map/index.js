import React from "react";
import GMap from "./../../components/map";
import "./map.scss";
function Map({ loc }) {
  return (
    <div className="map-container">
      <h3 className="title">Live feed</h3>
      <GMap loc={loc} />
    </div>
  );
}

export default Map;
