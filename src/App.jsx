import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
// import AlertYesNo from "./components/AlertYesNo";
import MediumApp from "./components/medium-gui/MediumApp";
import Home from "./components/home/Home";
import "./components/medium-gui/MediumStyle.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medium" element={<MediumApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
