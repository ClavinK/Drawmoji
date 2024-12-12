import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import ToolButtons from "./ToolButtons";
import DrawingArea from "./DrawingArea";
import Output from "./Output";

function App() {
  return (
    <div class="screen">
      <ToolButtons />
      <DrawingArea />
      <Output />
    </div>
  );
}

export default App;
