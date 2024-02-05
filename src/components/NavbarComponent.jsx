import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-9">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-semibold">Hello Mars!</div>

          {/* Responsive Menu Toggle Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden text-white focus:outline-none absolute top-4 right-4 lg:items-right lg:w-auto"
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
                <Link
                  to={"/"}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
                >
                  Home
                </Link>
                <Link
                  to={"/portfolio"}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
                >
                  Portfolio
                </Link>
                <Link
                  to={"/about"}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
                >
                  About
                </Link>

                <Link
                  to={"/contact"}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 "
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
