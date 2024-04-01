import React, { useState } from "react";
import UseLayout from "../hooks/UseLayout";
export default function SkillsComponent() {
  const mode = UseLayout();
  const [current, setCurrent] = useState(0);
  const images = [
    "https://logodownload.org/wp-content/uploads/2016/10/html5-logo.png",
    "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png",
    "https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
    "https://seeklogo.com/images/T/tailwind-css-logo-89E99D7181-seeklogo.com.png",
    "https://logospng.org/download/bootstrap/bootstrap-4096.png",
    "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
  ];

  return (
    <>
      <h1 className="text-xl ml-5 font-bold mt-10" style={{
          color: mode.textColor,
        }}>
        <i class="fas fa-tools"></i> Knowledges and Skills
      </h1>
      <div className=" xl:flex  p-2">
        <div className="basis-1/2  xl:flex lg:flex justify-items:center ">
          <div className="basis-1/2 ">
            <div className="rounded-lg bg-[#838383] m-4  text-center">
              Problem Solving
            </div>
            <div className="rounded-lg bg-[#838383] m-4  text-center">
              Communication
            </div>
            <div className="rounded-lg bg-[#838383] m-4  text-center">
              Team Work
            </div>
          </div>
          <div className="basis-1/2 ">
            <div className="rounded-lg bg-[#d8dad8] m-4  text-center">
              Growth Maindset
            </div>
            <div className="rounded-lg bg-[#d8dad8] m-4  text-center">
              Management Skill
            </div>
            <div className="rounded-lg bg-[#d8dad8] m-4  text-center">
              Analyst
            </div>
          </div>
        </div>
        <div className="basis-1/2 xl:ml-5 flex flex-col  ">
          <div className="bg-[#838383] text-center rounded-lg m-2">
            Web Development
          </div>
          <div className="bg-[#d8dad8] text-center rounded-lg m-2">
            Web Design
          </div>
          <div className="bg-[#838383] text-center rounded-lg m-2">
            Administration
          </div>
          <div className="bg-[#d8dad8] text-center rounded-lg m-2">
            Content Creator
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20  rounded-lg">
        <button
          className="xl:p-4 lg:p-4 md:p-2 bg-[#000000] text-white rounded-lg"
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="flex justify-center items-center xl:space-x-4 space-x-2 w-full ">
          {images.slice(current, current + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={` xl:w-32 xl:h-32 lg:w-20 lg:h-20 md:w-12 md:h-14 sm:w-14 sm:h-12 w-10 h-10  `}
            />
          ))}
        </div>
        <button
          className="xl:p-4 lg:p-4 md:p-2 bg-[#000000] text-white rounded-lg"
          onClick={() =>
            setCurrent(current === images.length - 1 ? 0 : current + 1)
          }
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
