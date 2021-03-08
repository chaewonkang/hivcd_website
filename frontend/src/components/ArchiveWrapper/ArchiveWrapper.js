import React from "react";
import "./ArchiveWrapper.css";

const ArchiveWrapper = ({ children, dimensions }) => {
  return (
    <div
      className="archivewrapper"
      style={{
        width: dimensions.width * 0.4 - 30 + "px",
        height: dimensions.height - 50 + "px",
      }}
    >
      {children}
    </div>
  );
};

export default ArchiveWrapper;
