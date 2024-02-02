import logo from "./logo.svg";
import "./App.css";
import { HomePage, AboutPage } from "./pages/index.js";
import { NavbarComponent } from "./components/index.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Profile-MiaSilvia">
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
