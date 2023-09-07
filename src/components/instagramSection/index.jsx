import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import Cottage from "../../assets/cottage3d.png";

function InstagramSection() {
  const ImageData = [Cottage, Cottage, Cottage, Cottage, Cottage];
  return (
    <>
      <div className="flex flex-col px-58">
        <span className="flex flex-row items-center justify-center mx-6 py-3">
          <Icon as={FiInstagram} w={22} h={22} />
          <p className="text-xl font-semibold">Instagram</p>
        </span>
        <div className="grid grid-cols-5">
          {ImageData.map((idx, item) => (
            <div key={idx}>
              <Image
                src={Cottage}
                alt="cottage 3d rendered"
                className="hover:blur-sm
              hover:cursor-pointer relative"
              >
                {/* <Icon as={FiInstagram} w={22} h={22} className="absolute" /> */}
              </Image>
            </div>
          ))}
          {/* <Image
            src={Cottage}
            alt="cottage 3d rendered"
            className="hover:blur-sm hover:cursor-pointer"
          />
          <Image src={Cottage} alt="cottage 3d rendered" />
          <Image src={Cottage} alt="cottage 3d rendered" />
          <Image src={Cottage} alt="cottage 3d rendered" />
          <Image src={Cottage} alt="cottage 3d rendered" /> */}
        </div>
      </div>
    </>
  );
}

export default InstagramSection;
