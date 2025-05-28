import React from "react";

export default function CanvasSize() {
  return (
    <details className="canvas-content content">
      <summary>Canvas and Others</summary>
      <div className="inside-details">
        <div className="canvas-size">
          <p className="title">Canvas Size</p>
          <div className="input-area">
            <label htmlFor="">Width:</label>
            <input type="number" name="" id="" />
            <p>px</p>
          </div>
          <div className="gap"></div>
          <div className="input-area">
            <label htmlFor="">Heght:</label>
            <input type="number" name="" id="" />
            <p>px</p>
          </div>
        </div>
        <div className="gap"></div>
        <div className="canvas-color">
          <p className="title">Canvas Color</p>
          <div className="input-area">
            <label htmlFor="">Color:</label>
            <input type="color" name="" id="" />
          </div>
        </div>
        <div className="gap"></div>
        <div className="others-settings">
          <p className="title">Others</p>
          <div className="input-area">
            <label htmlFor="">Reset settings:</label>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </details>
  );
}
