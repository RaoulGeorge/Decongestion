import React from "react";
import GMap from "./../../components/map";
import "./map.scss";
function Map(props) {
  return (
    <div className="map-container">
      Map
      <GMap />
    </div>
  );
}

export default Map;
