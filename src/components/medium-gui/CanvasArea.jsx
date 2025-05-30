import { Rnd } from "react-rnd";
import React, { useRef } from "react";
import { useState } from "react";

export default function CanvasArea() {
  const canvasRef = useRef(null);
  const [willHidden, setWillHidden] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [classOfResizer, setClassOfResizer] = useState("");
  const [sizeOfCanvas, setSizeOfCanvas] = useState({ width: 500, height: 400 });

  const [canvasSize, setCanvasSize] = useState({
    width: 500,
    height: 400,
  });

  const handleCanvasResize = (e, direction, ref) => {
    setCanvasSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    setClassOfResizer("action-resize");
  };

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
          className={`canvas-resizer ${classOfResizer}`}
          onResize={handleCanvasResize}
          onResizeStop={() => {
            setClassOfResizer("");
            setSizeOfCanvas({
              width: canvasSize.width,
              height: canvasSize.height,
            });
          }}
        >
          <canvas
            ref={canvasRef}
            className="resizable-canvas"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setWillHidden(false)}
            onMouseEnter={() => setWillHidden(true)}
            onMouseOut={() => setWillHidden(false)}
            style={{
              width: `${sizeOfCanvas.width}px`,
              height: `${sizeOfCanvas.height}px`,
            }}
          ></canvas>
        </Rnd>
      </div>
      <div className="bottom-content">
        <div className="position place">
          {willHidden && (
            <>
              <span className="main-data">{position.x}</span>
              <span className="pixel">px, </span>
              <span className="main-data">{position.y}</span>
              <span className="pixel">px</span>
            </>
          )}
        </div>
        <div className="shape-size place"></div>
        <div className="canvas-size place">
          <span className="main-data">{canvasSize.width} </span>
          <span className="pixel">px</span>
          <span
            style={{
              fontSize: "11px",
              color: "black",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            &#10005;{" "}
          </span>
          <span className="main-data">{canvasSize.height}</span>
          <span className="pixel">px</span>
        </div>
        <div className="canvas-zoom place"></div>
      </div>
    </>
  );
}
