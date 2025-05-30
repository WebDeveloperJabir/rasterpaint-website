import React from "react";
import CanvasSize from "./right-bar-contents/CanvasSize";
import Pencil from "./right-bar-contents/Pencil";
import Brush from "./right-bar-contents/Brush";
import Gradient from "./right-bar-contents/Gradient";
import Text from "./right-bar-contents/Text";
import Zoom from "./right-bar-contents/Zoom";

export default function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-contents">
        <CanvasSize />
        <Pencil />
        <Brush />
        <Gradient />
        <Text />
        <Zoom />
      </div>
    </div>
  );
}
