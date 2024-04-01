import React from "react";
import UseLayout from "../hooks/UseLayout";
export default function Footer() {
  const mode = UseLayout();
  return (
    <>
      <footer
        className="bg-[#B4B4B8] text-center  dark:bg-[#B4B4B8]  lg:text-left"
        style={{ color: mode.color, backgroundColor: mode.backgroundNavbar }}
      >
        <div className="bg-[#00000018] p-6 text-center dark:bg-[#16161618] ">
          <span>© 2024 Copyright : </span>
          <button className="font-semibold " href="">
            Mia Silvia
          </button>
        </div>
      </footer>
    </>
  );
}
