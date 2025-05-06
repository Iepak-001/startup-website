import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Startup from "./pages/Startups.jsx";
import { Founder } from "./pages/Founders.jsx";
import StartupDetails from "./pages/StartupDetails";
import FounderDetails from "./pages/FounderDetails.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/startups" element={<Startup />} />
          <Route path="/founders" element={<Founder />} />
          <Route path="/founder/:id" element={<FounderDetails />} />
          <Route path="/startup/:id" element={<StartupDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
