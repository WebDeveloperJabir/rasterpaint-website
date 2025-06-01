import React from "react";
import ToolsBar from "./ToolsBar";
import CanvasArea from "./CanvasArea";
import RightBar from "./RightBar";
import StylesBar from "./StylesBar";

export default function MainContent() {
  return (
    <main>
      <ToolsBar />
      <CanvasArea />
      <StylesBar />
      <RightBar />
    </main>
  );
}
