import { React, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TopNavBar from "./TopNavbar";
import MainContent from "./MainContent";

export default function MediumApp() {
  return (
    <>
      <div className="medium-app interface">
        <TopNavBar />
        <MainContent />
      </div>
    </>
  );
}
