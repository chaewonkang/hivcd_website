import React from "react";
import "./ReservationContainer.css";
import logogif from "../../img/logogif.gif";

function ReservationContainer() {
  return (
    <div className="container_loading">
      <img className="loading_status" src={logogif} alt="logogif"></img>
    </div>
  );
}

export default ReservationContainer;
