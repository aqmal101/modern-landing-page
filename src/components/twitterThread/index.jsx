import React from "react";
import Image from "next/image";
import Author from "../../assets/avatar.png";
import { Icon } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

function TwitterThread() {
  return (
    <div className="w-full flex flex-col bg-white space-y-10">
      <div className="w-full h-fit border-2 border-gray-300 flex flex-col p-14 space-y-8">
        <div className="w-full flex flex-row justify-between items-center bg-white">
          {/* profile */}
          <div className="flex flex-row space-x-5 items-center">
            <span className="w-[55px] h-[55px]">
              <Image
                src={Author}
                width={55}
                height={55}
                className="w-full h-full rounded-full "
                alt="Author this Blog"
              />
            </span>
            <span className="flex flex-col">
              <p className="text-lg font-[500]">Thiago Alcantara</p>
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:text-blue-400">
                  @thiago.lfc
                </a>
                - 15 Dec, 2020
              </p>
            </span>
          </div>
          {/* <span className="w-[75px] h-[75px] text-blue-300 flex flex-row items-center justify-center"> */}
          <span className="text-cyan-500">
            <Icon as={FaTwitter} w={30} h={30} />
          </span>
          {/* </span> */}
        </div>

        <div className="w-full flex flex-col justify-start space-y-4">
          <p className="text-2xl italic leading-loose">
            <a href="#" className="text-cyan-500 hover:text-cyan-300 px-2">
              @urban.development
            </a>
            のチームは非常に献身的で知識豊富で助かりました。仕上がりの製品は美しく、お金をかける価値がありました。Urban
            Developmentを絶対にお勧めします。
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwitterThread;
