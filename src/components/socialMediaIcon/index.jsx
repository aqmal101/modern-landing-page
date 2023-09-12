import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  FaTwitter,
  FaGooglePlusG,
  FaTumblr,
  FaRss,
  FaFacebookF,
} from "react-icons/fa";

function SocialMediaIcon() {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <span>シェアする</span>
      <span className="flex flex-row space-x-3 items-center">
        <span className="bg-blue-600 border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-white  hover:text-blue-600 hover:border-blue-600">
          <Icon as={FaFacebookF} />
        </span>
        <span className="bg-cyan-500 border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-white hover:border-cyan-500 hover:text-cyan-500">
          <Icon as={FaTwitter} />
        </span>
        <span className="bg-red-500 border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-white hover:border-red-500 hover:text-red-500">
          <Icon as={FaGooglePlusG} />
        </span>
        <span className="bg-blue-900 border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-white hover:border-blue-900 hover:text-blue-900">
          <Icon as={FaTumblr} />
        </span>
        <span className="bg-orange-500 border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-white hover:border-orange-500 hover:text-orange-500">
          <Icon as={FaRss} />
        </span>
      </span>
    </div>
  );
}

export default SocialMediaIcon;
