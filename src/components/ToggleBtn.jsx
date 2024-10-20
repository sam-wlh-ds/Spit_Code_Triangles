import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false); // State to track the toggle status

  const handleToggle = () => {
    setIsOn((prevState) => !prevState); // Toggle the state
  };

  return (
    <button
      type="button"
      className={`btn ${isOn ? "btn-success" : "btn-danger"} `}
      onClick={handleToggle}
      style={{
        width: "100%",
        height: "40px",
      }} // Adjust size as needed
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};

export default ToggleButton;
