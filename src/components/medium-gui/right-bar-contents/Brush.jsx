import React from "react";

export default function Brush() {
  return (
    <details className="brush-properties content">
      <summary>Brush</summary>
      <div className="inside-details">
        <div className="gap"></div>
        <div className="brush-style">
          <p className="title">Brush Style</p>
          <div className="full-input-area">
            <label htmlFor="">Style:</label>
            <div className="input-area">
              <select name="" id="">
                <option value="">TEE</option>
                <option value="">TEE</option>
                <option value="">TEE</option>
                <option value="">TEE</option>
                <option value="">TEE</option>
                <option value="">TEE</option>
              </select>
            </div>
          </div>
        </div>
        <p>You can use your own swatch or photo</p>
        <input type="file" name="" id="" />
        <div className="gap"></div>
      </div>
    </details>
  );
}
