import React from "react";
import Image from "next/image";
import CottageTerrace from "../../assets/terracecgi.png";

function LatestProjects() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center space-x-10 bg-orange-300">
        <span className="w-full flex flex-col justify-center items-center pb-12">
          <p className="text-lime-400 font-semibold">私たちの仕事 </p>
          <p className="text-6xl font-extrabold">最新のプロジェクト</p>
        </span>
        <div className="w-full flex flex-row justify-center space-x-5">
          <div className="w-5/12 relative bg-transparent hover:cursor-pointer">
            <Image src={CottageTerrace} alt="Terrace of Cottage" />
            <span className="top-0 bottom-0 right-0 left-0 hover:opacity-100 bg-[#cee100] hidden hover:flex flex-col absolute items-start justify-end p-12 text-white hover:text-white transition-all duration-500 ease-in-out">
              <p>Residential </p>
              <p className="text-4xl font-bold">DANIEL VILLA, ROMANIA</p>
            </span>
          </div>

          <Image
            src={CottageTerrace}
            className="w-5/12"
            alt="Terrace of Cottage"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default LatestProjects;
