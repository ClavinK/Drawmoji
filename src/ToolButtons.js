import React from "react";
import Button from "./Button";
import Paintbrush from "./images/paintbrush.png";
import Paintbucket from "./images/paintbucket.png";
import Eraser from "./images/erase.png";
import './App.css';



function ToolButtons() {
  const buttonsConfig = [
    {
      icon: <img src={Paintbrush} alt="Paintbrush" className="icon"/>,
      label: "Paintbrush",
      onClick: () => console.log("Paintbrush Clicked")
    },
    {
      icon:  <img src={Paintbucket} alt="Paintbucket" className="icon"/>,
      label: "Paintbucket",
      onClick: () => console.log("Paintbucket Clicked")
    },
    {
      icon:  <img src={Eraser} alt="Erase" className="icon"/>,
      label: "Eraser",
      onClick: () => console.log("Eraser Clicked")
    }
  ]

  return (
    <div className="tool-buttons">
      {buttonsConfig.map((button, index) =>
        <Button
          key={index}
          icon={button.icon}
          onClick={button.onClick}
        />
      )}
    </div>
  );
}

export default ToolButtons;
