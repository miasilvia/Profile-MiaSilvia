import "./App.css";
import {
  ResumePage,
  AboutPage,
  PortfolioPage,
  ContactPage,
  Games,
} from "./pages/index.js";
import {
  NavbarComponent,
  DetailPortfolio1,
  Footer,
  BiodataLeft,
} from "./components/index.js";
import { React, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutContext } from "./context/layoutContext";
function App() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;
  return (
    <BrowserRouter basename="/Profile-MiaSilvia">
      <div className="bg-[#90d5f2]">
        <div className="flex w-full xl:flex-row lg:flex-row  flex-col  ">
          <div className="sticky left-0 top-0 rounded-lg basis-1/4  flex flex-col  items-center m-4 ">
            <BiodataLeft />
          </div>
          <div
            className="flex flex-col min-h-screen m-4 rounded-lg xl:w-full lg:w-full  p-16 bg-white"
            style={{ backgroundColor: mode.backgroundNavbar }}
          >
            <div className="rounded-lg basis-2/3 ">
              <Routes>
                <Route path="/" exact element={<AboutPage />} />
                <Route path="/resume" exact element={<ResumePage />} />
                <Route path="/portfolio" exact element={<PortfolioPage />} />
                <Route path="/detail-1" exact element={<DetailPortfolio1 />} />
                <Route path="/contact" exact element={<ContactPage />} />
                <Route path="/games" exact element={<Games />} />
              </Routes>
            </div>
          </div>
          <div
            className="rounded-lg basis-1/12 bg-[#ffffff] m-4 pt-16 pb-16 flex flex-col items-center h-full"
            style={{
              backgroundColor: mode.backgroundNavbar,
              color: mode.textColor,
            }}
          >
            <NavbarComponent />
          </div>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
