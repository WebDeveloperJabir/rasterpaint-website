import React from "react";
import { useRef, useState } from "react";

export default function ToolsBar() {
  const colorInputMain = useRef(null);
  const colorInputStroke = useRef(null);

  const [colorMain, setColorMain] = useState("black");
  const [colorStroke, setColorStroke] = useState("black");

  function handleColorInput(colorInput) {
    colorInput.current.click();
  }
  return (
    <div className="tools-bar">
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
      <div className="colors">
        <div className="color-palette">
          <div
            className="main-color color"
            tabIndex="1"
            onClick={() => handleColorInput(colorInputMain)}
          >
            <div
              className="main-color-display display"
              style={{ backgroundColor: `${colorMain}` }}
            ></div>
            <input
              type="color"
              ref={colorInputMain}
              onChange={(e) => {
                setColorMain(e.target.value);
              }}
            />
            <div className="details">
              <p>Color 1 &#40;Fill&#41; </p>
            </div>
          </div>
          <div
            className="stroke-color color"
            onClick={() => handleColorInput(colorInputStroke)}
          >
            <div
              className="stroke-color-display display"
              style={{ backgroundColor: `${colorStroke}` }}
            ></div>
            <input
              type="color"
              ref={colorInputStroke}
              onChange={(e) => {
                setColorStroke(e.target.value);
              }}
            />
            <div className="details">
              <p>Color 2 &#40;Stroke&#41; </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
