import React, { useEffect, useState } from "react";
import "./CalandarContainer.css";
import logogif from "../../img/logogif.gif";

function CalandarContainer() {
  const [calDiv, setCalDiv] = useState(true);

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
  }, [calDiv]);

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
