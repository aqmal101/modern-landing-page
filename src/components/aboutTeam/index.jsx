import React from "react";
import { Icon } from "@chakra-ui/react";
import { PiUsers } from "react-icons/pi";

function AboutTeam() {
  return (
    <>
      <div className="pt-[280px] w-full min-h-screen bg-white flex flex-col items-center justify-around">
        <h1 className="text-5xl font-semibold py-12">
          Join into +2K talent members of Liarch
        </h1>
        <div className="grid grid-cols-4 grid-rows-4 gap-8 pt-6">
          <div className="w-[260px] h-[300px] border-[1px] border-gray-300 flex flex-col items-start">
            <div className="w-full h-[250px] border-[1px] border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300 flex flex-col items-start">
            <div className="w-full h-[80%] border-2 border-gray-500"></div>
            <p className="font-semibold">JULIUS CAESAR</p>
            <p>CEO Founder</p>
          </div>
          <div className="w-[260px] h-[300px] border-2 border-gray-300  flex flex-col items-start hover:text-orange-500 hover:cursor-pointer">
            <div className="w-full h-[80%] border border-gray-500 flex flex-col justify-center items-center">
              <span className="w-fit h-fit flex flex-col items-center justify-center">
                <Icon as={PiUsers} w={60} h={60} />
                <p className="font-semibold">BECOME OUR MEMBER</p>
              </span>
            </div>
            {/* <p className="font-semibold">JULIUS CAESAR</p> */}
            {/* <p>CEO Founder</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeam;
