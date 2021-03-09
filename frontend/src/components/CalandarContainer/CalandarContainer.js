import React, { useEffect } from "react";
import "./CalandarContainer.css";

function CalandarContainer() {
  useEffect(() => {
    window.eventCalId = 7353;
    var integrationScript = document.createElement("script");
    integrationScript.async = 1;
    integrationScript.setAttribute(
      "src",
      "https://api.eventcalendarapp.com/integration-script.js"
    );
    document.head.appendChild(integrationScript);
    if (window.eventCalendarAppUtilities) {
      window.eventCalendarAppUtilities.init(
        "fc14c30a-1881-4601-9d23-5ce266b746dc"
      );
    }
  });

  return (
    <div className="calandar_container">
      <div className="calandar_wrapper">
        <div
          class="eca-app-container"
          data-widgetuuid="fc14c30a-1881-4601-9d23-5ce266b746dc"
        ></div>
      </div>
    </div>
  );
}

export default CalandarContainer;
