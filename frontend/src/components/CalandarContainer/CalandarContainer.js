import React, { Component } from "react";
import "./CalandarContainer.css";

class CalandarContainer extends Component {
  componentDidMount() {
    window.eventCalId = 7279;
    const integrationScript = document.createElement("script");
    integrationScript.async = 1;
    integrationScript.setAttribute(
      "src",
      "https://api.eventcalendarapp.com/integration-script.js"
    );
    document.head.appendChild(integrationScript);
    if (window.eventCalendarAppUtilities) {
      window.eventCalendarAppUtilities.init(
        "025d70f1-3768-4efa-a8db-f98a9ebd3780"
      );
    }
  }
  render() {
    return (
      <div className="calandar_container">
        <div className="calandar_wrapper">
          <div
            className="eca-app-container"
            data-widgetuuid="025d70f1-3768-4efa-a8db-f98a9ebd3780"
          ></div>
        </div>
      </div>
    );
  }
}

export default CalandarContainer;
