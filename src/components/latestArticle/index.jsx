import React from "react";
import Image from "next/image";
import CottageTerrace from "../../assets/terracecgi.png";

function LatestArticle() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 space-x-8">
        <span className="w-full flex flex-col justify-center items-center pb-12">
          <p className="text-lime-300">OUR JOURNAL</p>
          <p className="text-6xl font-extrabold">Latest Articles</p>
        </span>
        <div className="flex flex-row">
          <div>
            <Image src={CottageTerrace} alt="Terrace of Cottage"></Image>
          </div>
          <div className="w-5/12 flex flex-col justify-start space-y-20 px-6">
            <span>
              <p>
                NEWS <span className="text-gray-400 px-1">|</span> Aug 25, 2023
              </p>
              <p className="text-xl font-semibold">
                10 things that most people don't know about space
              </p>
            </span>
            <span>
              <p>
                NEWS <span className="text-gray-400 px-1">|</span>
                Aug 25, 2023
              </p>
              <p className="text-xl font-semibold">
                10 things that most people don't know about space
              </p>
            </span>
            <span>
              <p>
                NEWS <span className="text-gray-400 px-1">|</span>
                Aug 25, 2023
              </p>
              <p className="text-xl font-semibold">
                10 things that most people don't know about space
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestArticle;
