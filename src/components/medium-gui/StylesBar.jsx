import React from "react";

export default function StylesBar() {
  return (
    <div className="styles-bar">
      <div className="full-input-area">
        <label htmlFor="">Width:</label>
        <div className="input-area">
          <input type="number" name="" id="" />
          <p>px</p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="full-input-area">
        <label htmlFor="">Height:</label>
        <div className="input-area">
          <input type="number" name="" id="" />
          <p>px</p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="full-input-area">
        <label htmlFor="">Stroke:</label>
        <div className="input-area">
          <input type="number" name="" id="" />
          <p>px</p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="full-input-area">
        <label htmlFor="">Opacity:</label>
        <div className="input-area">
          <p>0</p>
          <input type="range" name="" id="" />
          <p>100</p>
          <div className="input-area">
            <input type="number" min={0} max={100} className="short-input" />
            <p>%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
