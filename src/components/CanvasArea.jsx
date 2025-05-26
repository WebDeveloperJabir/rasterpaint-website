import React from "react";
import { Rnd } from "react-rnd";

export default function CanvasArea() {
  return (
    <div className="canvas-area">
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 500,
          height: 400,
        }}
        minWidth={200}
        minHeight={200}
        enableResizing={{
          topLeft: false,
          top: false,
          topRight: true, // (if not specified, defaults to true)
          right: true,
          bottomRight: true,
          bottom: true,
          bottomLeft: true,
          left: true,
        }}
        disableDragging={true}
        bounds="parent"
        className="canvas-resizer"
      >
        <canvas className="resizable-canvas"></canvas>
      </Rnd>
    </div>
  );
}
