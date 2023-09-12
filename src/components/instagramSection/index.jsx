import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import Image1 from "../../assets/InstagramAssets2.jpg";
import Image2 from "../../assets/InstagramAssets3.jpg";
import Image3 from "../../assets/InstagramAssets5.jpg";
import Image4 from "../../assets/InstagramAssets6.jpg";
import Image5 from "../../assets/InstagramAssets7.jpg";

function InstagramSection() {
  const ImageData = [Image1, Image2, Image3, Image4, Image5];
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center px-58 pb-[80px]">
        <span className="flex flex-row items-center justify-center space-x-2 py-6">
          <Icon as={FiInstagram} w={22} h={22} />
          <p className="text-xl font-semibold">インスタグラム</p>
        </span>
        <div className="grid grid-cols-5 grid-rows-1 gap-0 w-[86%] bg-white">
          {ImageData.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-transparent hover:cursor-pointer w-[225px] h-[225px]"
            >
              <Image
                src={item}
                alt={item}
                className="h-full w-full object-cover
              hover:cursor-pointer relative"
              ></Image>
              <span className="top-0 bottom-0 right-0 left-0 hover:bg-gray-900/30 hover:opacity-100 flex opacity-0 absolute transition-all duration-300 items-center justify-center">
                <Icon as={FiInstagram} w={35} h={35} color="white" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InstagramSection;
