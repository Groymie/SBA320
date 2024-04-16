import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";

function App() {
  const [input, setInput] = useState("");

  // The value input is determined by the button clicked as shown in the ternary operator of the onclick callback function in the keypad component
  const handleButtonClick = (value) => {
    if (value === "") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  // This function is called if the button clicked was an equal sign. See the ternary operator in the onclick callback function in Keypad.jsx
  const handleCalculate = () => {
    try {
      const result = eval(input); // eval() evaluates javascript code written as a string
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <div>
      <Display input={input} />
      <Keypad onButtonClick={handleButtonClick} onCalculate={handleCalculate} />
    </div>
  );
}

export default App;
