import React from "react";
import "../App.css";
import UseLayout from "../hooks/UseLayout";
export default function AboutComponent() {
  const mode = UseLayout();
  return (
    <>
      <div
        className="ml-10 mr-10 mt-20 mb-10 xl:ml-56 xl:mr-56 lg:ml-44 lg:mr-44 bg-white bg-opacity-30 "
        style={{
          display: "flex",
          justifyContent: "center",
          color: mode.textColor,
        }}
      >
        <div className="max-w-sm w-full lg:max-w-full lg:flex ">
          <div
            className="h-48  lg:w-48 flex-none bg-cover  text-center overflow-hidden "
            style={{
              backgroundImage: `url('https://media.licdn.com/dms/image/D5635AQEW3xnkpB_4gQ/profile-framedphoto-shrink_400_400/0/1707594763035?e=1709143200&v=beta&t=GxSRew9FgDCzBfbpPxn_gSPs1oU3UJTVk1mSIvuWEXM')`,
            }}
            title="Woman holding a mug"
          >
            {" "}
          </div>
          <div className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className=" font-bold text-xl mb-2">About Me</div>
            <div className="mb-12 mt-12">
              <p className=" text-base">
                I am a graduate of Politeknik Negeri Indramayu with a degree in
                Informatics Engineering and have experience as a claims
                administrator in an insurance company. As a claims
                administrator, I have honed strong analytical skills through
                meticulous document validation, requiring a keen attention to
                detail and a solid understanding of the information at hand,
                skills that are invaluable in web programming for comprehending
                complex code. My experience in data entry has provided me with
                practical experience in handling information, a crucial aspect
                of web programming when dealing with databases. Additionally, I
                have sharpened my time management and organizational skills in
                managing multiple tasks simultaneously and ensuring their timely
                completion, skills that are essential in web programming where
                projects can become complex. Lastly, my strong communication
                skills, acquired through interacting with others to resolve
                claims, will assist me in working within a web development team.
                Now, with all these skills and experiences, I feel ready to
                switch careers and face the challenges as a front-end developer.
                I am very excited to embark on this new career journey and
                contribute to the world of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
