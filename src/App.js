import "./App.css";
import { HomePage, AboutPage, PortfolioPage } from "./pages/index.js";
import { NavbarComponent, DetailPortfolio1 } from "./components/index.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Profile-MiaSilvia">
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/portfolio" exact element={<PortfolioPage />} />
        <Route path="/detail-1" exact element={<DetailPortfolio1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
