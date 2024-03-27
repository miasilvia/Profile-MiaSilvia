import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
export default function SkillsComponent() {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.fBJ2R5Y0m_tQXUxdc0icPQHaKd?rs=1&pid=ImgDetMain",
    "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png",
    "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.S-SYtYzIhgPRnmRd8yWH4gAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.udRsxeiTDWCEXRaKP_prTAHaHk?rs=1&pid=ImgDetMain",
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent(current === images.length - 1 ? 0 : current + 1),
    onSwipedRight: () =>
      setCurrent(current === 0 ? images.length - 1 : current - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
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
          <div>Growth Maindset</div>
          <div>Management Skill</div>
          <div>Content Creator</div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen" {...handlers}>
        <button
          className="p-4 bg-blue-500 text-white"
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
        >
          Prev
        </button>
        <div className="flex justify-center items-center space-x-4">
          {images.slice(current, current + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-1/4 h-auto transition-transform duration-500 ease-in-out transform-gpu"
            />
          ))}
        </div>
        <button
          className="p-4 bg-blue-500 text-white"
          onClick={() =>
            setCurrent(current === images.length - 1 ? 0 : current + 1)
          }
        >
          Next
        </button>
      </div>
    </>
  );
}
