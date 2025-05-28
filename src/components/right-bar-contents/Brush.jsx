import React from 'react'

export default function Brush() {
  return (
    <details className="brush-properties content">
      <summary>Brush Properties</summary>
      <div className="inside-details">
        <p className="title">Brush Size</p>
        <div className="input-area">
          <label htmlFor="">Size:</label>
          <input type="number" name="" id="" />
        </div>
        <div className="gap"></div>
        <p className="title">Brush Color</p>
        <div className="input-area">
          <label htmlFor="">Color:</label>
          <input type="color" name="" id="" />
        </div>
        <div className="gap"></div>
        <p className="title">Brush Shapes</p>
      </div>
    </details>
  );
}
