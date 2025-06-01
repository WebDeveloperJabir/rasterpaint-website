import React from "react";
import { useRef, useState } from "react";

export default function ToolsBar() {
  const colorInput = useRef(null);
  const colorInputColor = useState("");

  function handleColorInput() {
    colorInput.current.click();
  }
  return (
    <div className="tools-bar">
      <h3 className="title-on-toolsbar">Tools</h3>
      <div className="tools">
        <button>
          <img src="/images/pencil.svg" alt="" title="pencil" />
        </button>
        <button>
          <img src="/images/eraser.svg" alt="" title="eraser" />
        </button>
        <button>
          <img src="/images/zoom.svg" alt="" />
        </button>
        <button>
          <img src="/images/eraser.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
        <button>
          <img src="/images/pencil.svg" alt="" />
        </button>
      </div>
      <hr style={{ marginTop: "10px" }} />
      <div className="colors">
        <h3 className="title-on-toolsbar">Colors</h3>
        <div className="color-palette">
          <input type="color" />
          <div
            className="main-color color"
            tabIndex="1"
            onClick={handleColorInput}
          >
            <div
              className="main-color-display display"
              // style={{ backgroundColor: `${colorMain}` }}
            ></div>
            <div className="details">
              <p>Color 1</p>
              <p>&#40;Fill&#41;</p>
            </div>
          </div>
          <div className="stroke-color color" onClick={handleColorInput}>
            <div
              className="stroke-color-display display"
              // style={{ backgroundColor: `${colorStroke}` }}
            ></div>
            <div className="details">
              <p>Color 2</p>
              <p>&#40;Stroke&#41; </p>
            </div>
          </div>
        </div>

        <div className="color-choose">
          <div className="color-select-panel">
            <p>Select a color</p>
          </div>
          <div className="color-board">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="color-display disable"></div>
            ))}
          </div>
        </div>
        <hr style={{ marginTop: "10px" }} />
        <h3 className="title-on-toolsbar">Shapes</h3>
        <div className="color-choose">
          <div className="color-board">
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
            <div className="color-display"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
