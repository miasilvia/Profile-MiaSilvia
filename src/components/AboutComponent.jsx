import React from "react";
import "../App.css";
export default function AboutComponent() {
  return (
    <>
      <div
        className="ml-10 mr-10 mt-20 xl:ml-56 xl:mr-56 lg:ml-44 lg:mr-44"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="max-w-sm w-full lg:max-w-full lg:flex ">
          <div
            className="h-48 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l  text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://media.licdn.com/dms/image/D5635AQEW3xnkpB_4gQ/profile-framedphoto-shrink_400_400/0/1707594763035?e=1708455600&v=beta&t=M0StH0XRXYSlKKEXwY_NPN-cWfxe4a5ze_apEp1rzs0')`,
            }}
            title="Woman holding a mug"
          >
            {" "}
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="text-gray-900 font-bold text-xl mb-2">About Me</div>
            <div className="mb-12 mt-12">
              <p className="text-gray-700 text-base">
                After graduating from Politeknik Negeri Indramayu with a degree
                in Informatics Engineering, I further honed my skills at Binar
                Academy Bootcamp. As a beginner Full Stack Web Developer, I am
                prepared to face the challenges of the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
