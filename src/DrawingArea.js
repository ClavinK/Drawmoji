import React from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Button from "./Button";
import Paintbrush from "./images/paintbrush.png";
import Paintbucket from "./images/paintbucket.png";
import Eraser from "./images/erase.png";
import './App.css';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

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

const Canvas = () => {
  return (
    <><div className="tool-buttons">
      {buttonsConfig.map((button, index) => <Button
        key={index}
        icon={button.icon}
        onClick={button.onClick} />
      )}
    </div><ReactSketchCanvas
        style={styles}
        width="27em"
        height="27em"
        strokeWidth={4}
        strokeColor="blue" /></>
  );
};

function DrawingArea() {
  return (
  <div className="drawing">
    <Canvas />
  </div>
  );
}

export default DrawingArea;
