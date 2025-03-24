import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isActivated, setIsActivated] = useState(false);
  return (
    <button
      onClick={() => setIsActivated(!isActivated)}
      className={isActivated ? "active" : "deactive"}
    >
      {isActivated ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
