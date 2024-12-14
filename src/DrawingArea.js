import React from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Button from "./Button";
import Paintbrush from "./images/paintbrush.png";
import Paintbucket from "./images/paintbucket.png";
import Eraser from "./images/erase.png";
import Reset from "./images/reset.png";
import './App.css';
import { useRef, useState } from "react";

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = () => {

  const canvasRef = React.useRef();
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);

  const handleEraserClick = () => {
    setEraseMode(true);
    if (canvasRef.current != null) {
      canvasRef.current.eraseMode(true)
    }
  }

  const handlePenClick = () => {
    setEraseMode(false);
    if (canvasRef.current != null) {
      canvasRef.current.eraseMode(false);
    }
  }

  const handleStrokeWidthChange = (event) => {
    setStrokeWidth(+event.target.value);
  }

  const handleEraserWidthChange = (event) => {
    setEraserWidth(+event.target.value);
  }

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  }

  const buttonsConfig = [
    {
      icon: <img src={Paintbrush} alt="Paintbrush" className="icon"/>,
      label: "Paintbrush",
      onClick: () => handlePenClick()
    },
    {
      icon:  <img src={Paintbucket} alt="Paintbucket" className="icon"/>,
      label: "Paintbucket",
      onClick: () => console.log("Paintbucket Clicked")
    },
    {
      icon: <img src={Eraser} alt="Paintbucket" className="icon"/>,
      label: "Eraser",
      onClick: () => handleEraserClick()
    },
    {
      icon:  <img src={Reset} alt="Reset" className="icon"/>,
      label: "Reset",
      onClick: () => clearCanvas()
    }
  ]

  return (
    <>
    <div className="tool-buttons">
      {buttonsConfig.map((button, index) => <Button
        key={index}
        icon={button.icon}
        onClick={button.onClick} />
      )}
    </div>
    <ReactSketchCanvas
        style={styles}
        width="27em"
        height="27em"
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
        strokeColor="blue"
        ref={canvasRef} />
      </>
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
