import React from "react";
import CanvasSize from "./right-bar-contents/CanvasSize";
import Pencil from "./right-bar-contents/Pencil";
import Brush from "./right-bar-contents/Brush";

export default function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-contents">
        <CanvasSize />
        <Pencil />
        <Brush />
      </div>
    </div>
  );
}
