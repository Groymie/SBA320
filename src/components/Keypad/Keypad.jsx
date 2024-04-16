import React from "react";
import "./keypad.css";

function Keypad({ onButtonClick, onCalculate }) {
  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  return (
    <div className="Keypad">
      {buttons.map((button) => {
        return (
          <button
            key={button}
            onClick={() =>
              button === "="
                ? onCalculate()
                : button === "C"
                ? onButtonClick("")
                : onButtonClick(button)
            }
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default Keypad;
