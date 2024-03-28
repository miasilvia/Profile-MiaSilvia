import React, { useState } from "react";
export default function SkillsComponent() {
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
      <h1 className="text-xl font-bold"> Knowledges</h1>
      <div className=" flex p-2">
        <div className="basis-1/2  flex">
          <div className="basis-1/2 ">
            <div className="rounded-lg bg-[#90be98] m-2 pl-4">
              Problem Solving
            </div>
            <div className="rounded-lg bg-[#ffaad1] m-2 pl-4">
              Communication
            </div>
            <div className="rounded-lg bg-[#90be98] m-2 pl-4">Team Work</div>
          </div>
          <div className="basis-1/2 ">
            <div className="rounded-lg bg-[#ffaad1] m-2 pl-4">
              Growth Maindset
            </div>
            <div className="rounded-lg bg-[#90be98] m-2 pl-4">
              Management Skill
            </div>
            <div className="rounded-lg bg-[#ffaad1] m-2 pl-4">Analyst</div>
          </div>
        </div>
        <div className="basis-1/2 bg-[#f84e4e]">
          <div>Web Development</div>
          <div>Web Design</div>
          <div>Administration</div>
          <div>Content Creator</div>
          <div>Content Creator</div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32  rounded-lg">
        <button
          className="p-4 bg-[#000000] text-white"
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="flex justify-center items-center space-x-4 w-full">
          {images.slice(current, current + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-24 m:h-24 w-12 h-12 transition-transform duration-500 ease-in-out transform-gpu ${
                current === index ? "scale-100" : "scale-90"
              }`}
            />
          ))}
        </div>
        <button
          className="p-4 bg-[#000000] text-white"
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
