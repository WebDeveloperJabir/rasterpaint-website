import React from "react";
import ToolsBar from "./ToolsBar";
import CanvasArea from "./CanvasArea";
import RightBar from "./RightBar";
import BottomContent from "./BottomContent";

export default function MainContent() {
  return (
    <main>
      <ToolsBar />
      <CanvasArea />
      <RightBar />
      <BottomContent />
    </main>
  );
}
