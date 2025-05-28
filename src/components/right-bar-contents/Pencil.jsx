import React from "react";

export default function Pencil() {
  return (
    <details className="pencil-properties content">
      <summary>Pencil Properties</summary>
      <div className="inside-details">
        <p className="title">Pencil Size</p>
        <div className="input-area">
          <label htmlFor="">Size:</label>
          <input type="number" name="" id="" />
        </div>
        <div className="gap"></div>
        <p className="title">Pencil Color</p>
        <div className="input-area">
          <label htmlFor="">Color:</label>
          <input type="color" name="" id="" />
        </div>
        <div className="gap"></div>
        <p className="title">Pencil Caps</p>
        <div className="selection-place">
          <button>j</button>
          <button>j</button>
          <button>j</button>
        </div>
      </div>
    </details>
  );
}
