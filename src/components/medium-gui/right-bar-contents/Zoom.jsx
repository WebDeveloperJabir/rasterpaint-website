import React from "react";

export default function Zoom() {
  return (
    <details className="zoom-properties content">
      <summary>Zoom</summary>
      <div className="inside-details">
        <div className="canvas-size">
          <p className="title">Canvas Size</p>
          <div className="full-input-area">
            <label htmlFor="">Width:</label>
            <div className="input-area">
              <input type="number" name="" id="" min={0} />
              <p>px</p>
            </div>
          </div>
          <div className="gap"></div>
          <div className="full-input-area">
            <label htmlFor="">Heght:</label>
            <div className="input-area">
              <input type="number" name="" id="" min={0} />
              <p>px</p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="canvas-color">
          <p className="title">Canvas Color</p>
          <div className="full-input-area">
            <label htmlFor="">Color:</label>
            <div className="input-area">
              <input type="color" name="" id="" />
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="others-settings">
          <p className="title">Others</p>
          <div className="full-input-area">
            <label htmlFor="">Reset settings:</label>
            <div className="input-area">
              <button>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
