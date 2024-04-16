import React from "react";
import "./display.css";

function Display({ input }) {
  return (
    <div className="Display">
      <input type="text" value={input} readOnly />
    </div>
  );
}

export default Display;
