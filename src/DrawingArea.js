import React from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="27em"
      height="27em"
      strokeWidth={4}
      strokeColor="red"
    />
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
