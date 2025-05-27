import { Rnd } from "react-rnd";
import React, { useRef } from "react";
import { useState } from "react";

export default function CanvasArea() {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setPosition({
      x: (e.clientX - rect.left).toFixed(1),
      y: (e.clientY - rect.top).toFixed(1),
    });
  };
  return (
    <>
      <div className="canvas-area">
        <Rnd
          default={{
            x: 10,
            y: 10,
            width: 500,
            height: 400,
          }}
          minWidth={200}
          minHeight={200}
          enableResizing={{
            topLeft: false,
            top: false,
            topRight: false, // (if not specified, defaults to true)
            right: true,
            bottomRight: true,
            bottom: true,
            bottomLeft: false,
            left: false,
          }}
          disableDragging={true}
          bounds="parent"
          className="canvas-resizer"
        >
          <canvas
            ref={canvasRef}
            className="resizable-canvas"
            onMouseMove={handleMouseMove}
          ></canvas>
        </Rnd>
      </div>
      <div className="bottom-content">
        <div className="position">
          <span className="coordinate">{position.x}</span>
          <span className="pixel">px, </span>
          <span className="coordinate">{position.y}</span>
          <span className="pixel">px</span>
        </div>
        <div className="shape-size"></div>
        <div className="canvas-size"></div>
        <div className="canvas-zoom"></div>
      </div>
    </>
  );
}
