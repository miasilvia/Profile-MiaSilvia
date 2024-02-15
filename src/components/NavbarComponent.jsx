import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  function handleNavigate(e, params) {
    e.preventDefault();
    navigate(`/${params}`);
  }

  return (
    <>
      <nav className="bg-[#B4B4B8] p-9 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-[#3C3633] text-lg font-semibold">Hello Mars!</div>

          {/* Responsive Menu Toggle Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden text-[#3C3633] focus:outline-none absolute top-4 right-4 lg:items-right lg:w-auto"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          {/* Navbar Links */}
          <div
            className={`lg:flex ${
              isMenuOpen ? "flex" : "hidden"
            }  lg:items-right lg:w-auto  `}
            id="menu"
          >
            <div className="lg:flex-grow lg:flex lg:items-center lg:w-auto w-full">
              <div className="lg:flex xl:space-x-4 lg:space-x-4  md:space-x-0">
                <button
                  onClick={(e) => handleNavigate(e, "")}
                  className="block mt-4 lg:inline-block lg:mt-0 text-[#3C3633] hover:text-gray-500 mr-4"
                >
                  Home
                </button>
                <button
                  onClick={(e) => handleNavigate(e, "portfolio")}
                  className="block mt-4 lg:inline-block lg:mt-0 text-[#3C3633] hover:text-gray-500 mr-4"
                >
                  Portfolio
                </button>
                <button
                  onClick={(e) => handleNavigate(e, "about")}
                  className="block mt-4 lg:inline-block lg:mt-0 text-[#3C3633] hover:text-gray-500 mr-4"
                >
                  About
                </button>

                <button
                  onClick={(e) => handleNavigate(e, "contact")}
                  className="block mt-4 lg:inline-block lg:mt-0 text-[#3C3633] hover:text-gray-500 "
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
