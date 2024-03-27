import React from "react";

export default function Education() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-xl font-bold"> Resume</h1>
      </div>
      <div className="flex">
        <div className="basis-1/2 ">
          <h1 className="ml-5 font-bold">
            <i className="fas fa-graduation-cap"></i> Education
          </h1>
          <div className="bg-[#a399ae]  p-3 rounded-lg m-5">
            <p className="text-xs">2023-2024</p>
            <h3 className="font-bold">Course Full Stack Web Developer</h3>
            <p className="text-xs">Binar Academy</p>
          </div>
          <div className="bg-[#fbd5d5]  p-3 rounded-lg m-5">
            <p className="text-xs">2015-2018</p>
            <h3 className="font-bold">Teknik Informatika</h3>
            <p className="text-xs">Politeknik Negeri Indramayu</p>
          </div>
        </div>
        <div className="basis-1/2 ">
          <h1 className="ml-5 font-bold">
            <i className="fas fa-briefcase"></i> Experience
          </h1>

          <div className="bg-[#fbd5d5] p-3 rounded-lg m-5">
            <p className="text-xs">20219-2023</p>
            <h3 className="font-bold">Claim Administration</h3>
            <p className="text-xs">PT. Asuransi Astra (Jakarta)</p>
          </div>
          <div className="bg-[#a399ae] p-3 rounded-lg m-5">
            <p className="text-xs">2017</p>
            <h3 className="font-bold">Web Developer (Magang)</h3>
            <p className="text-xs">CV. Gama Studio (Yogyakarta)</p>
          </div>
        </div>
      </div>
    </>
  );
}
