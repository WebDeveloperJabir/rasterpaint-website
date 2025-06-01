import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
// import AlertYesNo from "./components/AlertYesNo";
import MediumApp from "./components/medium-gui/MediumApp";
import Home from "./components/home/Home";
import "./components/medium-gui/MediumStyle.css";

function App() {
  return <MediumApp />;
}

export default App;
