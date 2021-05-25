import React from "react";
import "./DarkMood.css";

const DarkMood = () => {
  return (
    <div className="darkMood">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkMood;
