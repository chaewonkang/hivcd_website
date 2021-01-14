import React, { useState, useEffect, useRef } from "react";
import "./Warning.css";

function Warning({ visible, message }) {
  const [closing, setClosing] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
      }, 1000);
    }
  });

  return !visible && !closing ? null : (
    <div className="Warning-wrapper">
      <div className={`Warning ${closing ? "bounceOut" : "bounceIn"} animated`}>
        {message}
      </div>
    </div>
  );
}

export default Warning;
