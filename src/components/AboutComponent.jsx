import React from "react";
import "../App.css";
import UseLayout from "../hooks/UseLayout";
export default function AboutComponent() {
  const mode = UseLayout();
  return (
    <>
      <h1
        className="text-xl font-bold mb-10"
        style={{
          color: mode.textColor,
        }}
      >
        {" "}
        About
      </h1>
      <div
        className=" bg-opacity-30 rounded-lg"
        style={{
          display: "flex",
          justifyContent: "center",
          color: mode.textColor,
        }}
      >
        <div className="max-w-sm w-full lg:max-w-full lg:flex rect-animate">
          <div
            className=" flex-none bg-cover  text-center overflow-hidden "
            title="Woman holding a mug"
          >
            {" "}
          </div>
          <div className=" flex flex-col justify-between leading-normal">
            <p className=" xl:text-lg lg:text-sm md:text-sm text-sm mb-2 text-justify">
              I am a graduate of Politeknik Negeri Indramayu with a degree in
              Informatics Engineering and have experience as a claims
              administrator in an insurance company. As a claims administrator,
              I have honed strong analytical skills through meticulous document
              validation, requiring a keen attention to detail and a solid
              understanding of the information at hand, skills that are
              invaluable in web programming for comprehending complex code. My
              experience in data entry has provided me with practical experience
              in handling information, a crucial aspect of web programming when
              dealing with databases. Additionally, I have sharpened my time
              management and organizational skills in managing multiple tasks
              simultaneously and ensuring their timely completion, skills that
              are essential in web programming where projects can become
              complex. Lastly, my strong communication skills, acquired through
              interacting with others to resolve claims, will assist me in
              working within a web development team. Now, with all these skills
              and experiences, I feel ready to switch careers and face the
              challenges as a front-end developer. I am very excited to embark
              on this new career journey and contribute to the world of web
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
