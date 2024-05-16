import React from "react";
import "./ToggleSwitch.css"; // Import your CSS file for styling

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
