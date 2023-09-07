import React from "react";
import { Icon } from "@chakra-ui/react";
import { PiUsers } from "react-icons/pi";
import { FiMapPin } from "react-icons/fi";
import { BsEnvelope, BsTelephone, BsStopwatch } from "react-icons/bs";

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function AboutContacts() {
  return (
    <>
      <div className="pt-[100px] w-full min-h-screen flex flex-col items-start justify-around px-14">
        <div className="w-full flex flex-row">
          <div className="w-[40%] flex flex-col space-y-5">
            <span className="text-5xl">Contact</span>
            <span className="text-5xl">Liarch Studio</span>
            <span className="flex flex-row space-x-8 pt-5">
              <Icon as={FaTwitter} w={22} h={22} />
              <Icon as={FaFacebookF} w={22} h={22} />
              <Icon as={FaInstagram} w={22} h={22} />
              <Icon as={FaPinterest} w={22} h={22} />
            </span>
          </div>
          <div className="w-[60%] h-[300px] grid grid-cols-2 grid-rows-2">
            <div className="flex flex-row space-x-4">
              <span className="flex flex-col  justify-center items-center w-[70px] h-[70px] border-[1px] border-gray-500 rounded-full ">
                <Icon as={BsEnvelope} w={22} h={22} />
              </span>
              <span className="flex flex-col">
                <p>EMAIL</p>
                <a href="#">hello@liarch-studio.co</a>
                <a href="#">hr@liarch-studio.co</a>
              </span>
            </div>
            <div className="flex flex-row space-x-4">
              <span className="flex flex-col  justify-center items-center w-[70px] h-[70px] border-[1px] border-gray-500 rounded-full ">
                <Icon as={FiMapPin} w={22} h={22} />
              </span>
              <span className="flex flex-col">
                <p>ADDRESS</p>
                <p>66 Main Str, Beverly Hill, CA, 90210</p>
              </span>
            </div>
            <div className="flex flex-row space-x-4">
              <span className="flex flex-col  justify-center items-center w-[70px] h-[70px] border-[1px] border-gray-500 rounded-full ">
                <Icon as={BsTelephone} w={22} h={22} />
              </span>
              <span className="flex flex-col">
                <p>PHONE</p>
                <a href="#">(+8003)125 08 59</a>
                <a href="#">(+95) 0689 36 47</a>
              </span>
            </div>
            <div className="flex flex-row space-x-4">
              <span className="flex flex-col justify-center items-center w-[70px] h-[70px] border-[1px] border-gray-500 rounded-full ">
                <Icon as={BsStopwatch} w={22} h={22} />
              </span>
              <span className="flex flex-col">
                <p>WORK HOURS</p>
                <p>Mon - Fri: 9.00am - 5.30pm</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center"></div>
        <div className="w-full flex flex-col">
          <span className="w-full flex flex-col items-start justify-center my-8">
            <p className="text-5xl">Drop Us A Line </p>
            <p>Ask away! Our supporters will response within 24 hours</p>
          </span>
          <div className="w-full flex flex-col items-start">
            <div className="w-full flex flex-row space-x-10 items-start justify-between">
              <span className="w-[30%]">
                <p>Full Name</p>
                <input type="text" className="w-full" />
              </span>
              <span className="w-[30%]">
                <p>Email</p>
                <input type="email" className="w-full" />
              </span>
              <span className="w-[30%]">
                <p>Subject</p>
                <input type="text" className="w-full" />
              </span>
            </div>
            <span className="w-full mt-8">
              <p>Your Massage Here</p>
              <textarea
                className="w-full border-none text-clip"
                rows="10"
                // _focus={{ borderBottom: "2px solid black" }}
              ></textarea>
            </span>
          </div>
          <button className="w-[200px] py-6 px-8 bg-orange-600 font-semibold border-[1px] border-white text-white hover:bg-white hover:border-[1px] hover:border-orange-600 hover:text-orange-600">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutContacts;
