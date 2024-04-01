import "../App.css";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleComponent } from ".";
import UseLayout from "../hooks/UseLayout";
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
  const mode = UseLayout();
  return (
    <>
      <div className="m-3">
        <ToggleComponent />
      </div>
      <div>
        <button onClick={handleMenuToggle} className="lg:hidden ">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`lg:flex lg:flex-col ${
          isMenuOpen ? "flex" : "hidden"
        }  lg:items-right lg:w-auto  `}
        id="menu"
      >
        <button
          onClick={(e) => handleNavigate(e, "")}
          className="bg-[#7c7878] hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3"
        >
          <i className="fas fa-user"></i>
          <p className="text-xs">About</p>
        </button>
        <button
          onClick={(e) => handleNavigate(e, "resume")}
          className="bg-[#7c7878] hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3"
        >
          <i className="fas fa-briefcase"></i>
          <p className="text-xs">Resume</p>
        </button>
        <button
          onClick={(e) => handleNavigate(e, "portfolio")}
          className="bg-[#7c7878] hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3"
        >
          <i className="far fa-file"></i>
          <p className="text-xs">Portfolio</p>
        </button>
        <button
          onClick={(e) => handleNavigate(e, "contact")}
          className="bg-[#7c7878] hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3"
        >
          <i className="far fa-address-book"></i>
          <p className="text-xs">Contact</p>
        </button>
      </div>
    </>
  );
}
