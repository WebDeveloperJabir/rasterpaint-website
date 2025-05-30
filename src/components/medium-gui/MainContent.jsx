import React from "react";
import ToolsBar from "./ToolsBar";
import CanvasArea from "./CanvasArea";
import RightBar from "./RightBar";

export default function MainContent() {
  return (
    <main>
      <ToolsBar />
      <CanvasArea />
      <RightBar />
    </main>
  );
}
