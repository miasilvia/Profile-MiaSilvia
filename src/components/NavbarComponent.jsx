import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToggleComponent } from ".";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Mendapatkan path dari URL
    const currentPath = location.pathname;

    // Menentukan tombol aktif berdasarkan path
    switch (currentPath) {
      case "/":
        setActiveButton("");
        break;
      case "/resume":
        setActiveButton("resume");
        break;
      case "/portfolio":
        setActiveButton("portfolio");
        break;
      case "/contact":
        setActiveButton("contact");
        break;
      default:
        setActiveButton("");
    }
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

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
        } lg:items-right lg:w-auto`}
        id="menu"
      >
        <button
          onClick={() => handleNavigate("/")}
          className={`menu-button ${
            activeButton === "" ? "bg-blue-700" : "bg-[#7c7878]"
          } hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3`}
        >
          <i className="fas fa-user"></i>
          <p className="text-xs">About</p>
        </button>
        <button
          onClick={() => handleNavigate("/resume")}
          className={`menu-button ${
            activeButton === "resume" ? "bg-blue-700" : "bg-[#7c7878]"
          } hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3`}
        >
          <i className="fas fa-briefcase"></i>
          <p className="text-xs">Resume</p>
        </button>
        <button
          onClick={() => handleNavigate("/portfolio")}
          className={`menu-button ${
            activeButton === "portfolio" ? "bg-blue-700" : "bg-[#7c7878]"
          } hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3`}
        >
          <i className="far fa-file"></i>
          <p className="text-xs">Portfolio</p>
        </button>
        <button
          onClick={() => handleNavigate("/contact")}
          className={`menu-button ${
            activeButton === "contact" ? "bg-blue-700" : "bg-[#7c7878]"
          } hover:bg-blue-700 text-white font-bold py-2 w-16 rounded m-3`}
        >
          <i className="far fa-address-book"></i>
          <p className="text-xs">Contact</p>
        </button>
      </div>
    </>
  );
}
