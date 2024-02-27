import "./App.css";
import { HomePage, AboutPage, PortfolioPage, ContactPage, Games } from "./pages/index.js";
import { NavbarComponent, DetailPortfolio1, Footer } from "./components/index.js";
import {React,useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutContext } from "./context/layoutContext";
function App() {
  const {nightMode, day, night} = useContext(LayoutContext);
  const mode = nightMode? night : day
  return (
  
    <BrowserRouter basename="/Profile-MiaSilvia">
      <NavbarComponent />
      <div className="flex flex-col min-h-screen" style={{backgroundColor:mode.background}}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/portfolio" exact element={<PortfolioPage />} />
        <Route path="/detail-1" exact element={<DetailPortfolio1 />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/games" exact element={<Games />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
