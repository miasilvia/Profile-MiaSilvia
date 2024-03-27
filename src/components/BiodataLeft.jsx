import React, { useState } from "react";
export default function BiodataLeft() {
  const [isHidden, setHidden] = useState(false);
  const handleHidden = () => {
    setHidden(!isHidden);
  };
  return (
    <>
      <div className="w-full p-2 sticky left-0 top-0 bg-[#ffffff] rounded-lg  flex-col flex  items-center">
        <img
          className="rounded-lg w-40 shadow-2xl"
          src="https://media.licdn.com/dms/image/D5635AQEW3xnkpB_4gQ/profile-framedphoto-shrink_400_400/0/1707594763035?e=1712041200&v=beta&t=RokULVTVIGkPXtUsRMH3hOSF_6bsn26Dx18wyC21tTM"
          alt=""
        />
        <h1 className="text-xl font-['ui-sans-serif'] mt-5">MIA SILVIA</h1>
        <h2 className="bg-[#d4cece] p-2 rounded-lg mt-3">Web Developer</h2>
        <div className="m-2">
          <i
            className="fab fa-linkedin fa-lg p-2 bg-white rounded-xl m-1"
            style={{ color: ["#1e40af"] }}
          ></i>
          <i
            className="fab fa-instagram fa-lg p-2 bg-white rounded-xl m-1"
            style={{ color: ["#dc2626"] }}
          ></i>
          <i
            className="fab fa-youtube fa-lg p-2 bg-white rounded-xl m-1"
            style={{ color: ["#dc2626"] }}
          ></i>
        </div>
        <div></div>
        {/* data diri */}
        <div
          className={`md:flex flex-col ${
            isHidden ? "flex" : "hidden"
          }  md:items-right md:w-auto  `}
          id="menu"
        >
          <div className="flex justify-items:start flex-col m-2 p-4 bg-[#dddcdc] rounded-md">
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
          Download CV
        </button>
        <button onClick={handleHidden} className="md:hidden ">
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
