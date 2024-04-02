import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseLayout from "../hooks/UseLayout";
import gambar from "../images/MIA.jpg";
export default function BiodataLeft() {
  const mode = UseLayout();
  const [isHidden, setHidden] = useState(false);
  const handleHidden = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: mode.backgroundNavbar,
          color: mode.textColor,
        }}
        className="w-full p-2 sticky left-0  top-0 bg-[#ffffff] rounded-lg flex-col flex  items-center pt-5"
      >
        <div></div>
        <img
          className="rounded-lg lg:w-40 w-20 shadow-2xl "
          src={gambar}
          alt=""
        />
        <h1 className="lg:text-xl font-bold  mt-4">MIA SILVIA</h1>
        <h2 className="lg:bg-[#d4cece] bg-[#eef2ff] lg:p-2 p-1 rounded-lg lg:mt-3 lg:text-md text-xs text-black">
          Web Developer
        </h2>
        <div className="m-2">
          <Link to="https://www.linkedin.com/in/mia-silvia/" target="_blank">
            <i
              className="fab fa-linkedin fa-lg p-2 bg-white rounded-xl m-1 hover:scale-110 transition-transform duration-200"
              style={{ color: ["#1e40af"] }}
            ></i>
          </Link>
          <Link to="https://github.com/miasilvia" target="_blank">
            <i
              className="fab fa-github fa-lg p-2 bg-white rounded-xl  m-1 hover:scale-110 transition-transform duration-200"
              style={{ color: mode.background }}
            ></i>
          </Link>
          <i
            className="fab fa-instagram fa-lg p-2 bg-white rounded-xl m-1 hover:scale-110 transition-transform duration-200"
            style={{ color: ["#dc2626"] }}
          ></i>
          <i
            className="fab fa-youtube fa-lg p-2 bg-white rounded-xl m-1 hover:scale-110 transition-transform duration-200"
            style={{ color: ["#dc2626"] }}
          ></i>
        </div>
        <div></div>
        {/* data diri */}
        <div
          className={`lg:flex flex-col ${
            isHidden ? "flex" : "hidden"
          }  lg:items-right lg:w-auto  `}
          id="menu"
        >
          <div
            className="flex justify-items:start flex-col m-2 p-4 bg-[#dddcdc] rounded-md"
            style={{
              backgroundColor: mode.backgroundNavbar,
              color: mode.textColor,
            }}
          >
            <div className="grid grid-flow-col  border-b-2 border-[#a2a1a1]">
              <div className="row-span-3 w-12 bg-[#ffffff] m-2 p-2 rounded-lg">
                <i
                  className="fas fa-birthday-cake fa-2x"
                  style={{ color: ["#f472b6"] }}
                ></i>
              </div>
              <div className="row-span-1 mt-2 mr-32 ">Birth</div>
              <div className="row-span-2 mb-2">
                December 13, 1997 &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <div className="grid grid-flow-col   border-b-2 border-[#a2a1a1]">
              <div className="row-span-3 bg-[#ffffff] m-2 p-2 rounded-lg">
                <i
                  className="fas fa-envelope fa-2x"
                  style={{ color: ["#dc2626"] }}
                ></i>
              </div>
              <div className="row-span-1 mt-2">Email</div>
              <div className="row-span-2 mb-2">miasilvia132@gmail.com</div>
            </div>
            <div className="grid grid-flow-col border-b-2 border-[#a2a1a1]">
              <div className="row-span-3 w-12 bg-[#ffffff] m-2 p-2 rounded-lg">
                <i
                  className="fas fa-map-marker-alt fa-2x"
                  style={{ color: ["#dc2626"] }}
                ></i>
              </div>
              <div className="row-span-1 mt-2 mr-28 ">Location</div>
              <div className="row-span-2 mb-2 ">Jakarta, Indonesia</div>
            </div>
            <div className="grid grid-flow-col ">
              <div className="row-span-3 w-12 bg-[#ffffff] m-2 p-2 rounded-lg">
                <i
                  className="fas fa-user fa-2x"
                  style={{ color: ["#f472b6"] }}
                ></i>
              </div>
              <div className="row-span-1 mt-2 mr-18 ">
                Marital Status &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;
              </div>
              <div className="row-span-2 mb-2 ">Single</div>
            </div>
          </div>
        </div>
        <a
          className="lg:relative absolute right-0"
          href="https://drive.google.com/uc?export=download&id=1KR0tijMs07HSyGvGZEzgt3nYVX70qsOb"
          download
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-2 lg:px-4 p-1 rounded m-2 md:text-md text-xs ">
            Download CV
          </button>
        </a>

        <button onClick={handleHidden} className="lg:hidden ">
          {isHidden ? (
            <i className="fas fa-arrow-alt-circle-up animate-bounce "></i>
          ) : (
            <i className="fas fa-arrow-alt-circle-down animate-bounce "></i>
          )}
        </button>
      </div>
    </>
  );
}
