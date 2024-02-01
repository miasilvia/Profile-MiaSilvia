import "../App.css";
import { Link } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <>
      <Link to={"/"}>
        <button type="button" className="btn btn-dark">
          Home
        </button>
      </Link>
      <Link to={"/about"}>
        <button type="button" className="btn btn-dark">
          About
        </button>
      </Link>
    </>
  );
}
