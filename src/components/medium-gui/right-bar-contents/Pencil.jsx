import React from "react";

export default function Pencil() {
  return (
    <details className="pencil-properties content">
      <summary>Pencil</summary>
      <div className="inside-details">
        <div className="pencil-caps">
          <p className="title">Pencil Caps</p>
          <div className="full-input-area">
            <label htmlFor="">Caps:</label>
            <div className="input-area">
              <div className="selection-place">
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
