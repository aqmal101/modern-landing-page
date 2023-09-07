import React from "react";
import Image from "next/image";
import CottageTerrace from "../../assets/terracecgi.png";

function LatestProjects() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-8">
        <span className="w-full flex flex-col justify-center items-center pb-12">
          <p className="text-lime-300">OUR WORKS</p>
          <p className="text-6xl font-extrabold">Latest Projects</p>
        </span>
        <div className="w-full flex flex-row justify-center space-x-5">
          <div className="w-5/12 relative bg-transparent hover:cursor-pointer">
            <Image src={CottageTerrace} alt="Terrace of Cottage" />
            <span className="top-0 bottom-0 right-0 left-0 hover:bg-[#cee100] hover:opacity-100 absolute"></span>
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
