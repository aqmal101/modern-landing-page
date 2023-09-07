import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import Logo from "../../assets/square-tick-lime.svg";
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="h-[500px] w-full border-t-[1px] flex flex-col justify-around items-center px-6 bg-gray-100 mt-8 pb-10">
        <div className="w-full flex flex-row justify-around items-start ">
          <span className="w-5/12 flex flex-col text-4xl font-extrabold ">
            <p>Kick-start your dream with Urban Development </p>
            <p className="pt-5">
              Start by
              <span className="text-[#cee100] hover:underline pl-1">
                saying hi
              </span>
            </p>
          </span>

          <div className="w-5/12 flex flex-row space-x-20 ">
            <span>
              <p className="text-3xl font-extrabold pb-10">SERVICES</p>
              <ul className="leading-10 text-gray-700 ">
                <li className="hover:text-lime-300">
                  <a href="#">Residential</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Commerical</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Interior</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Consulting</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Products</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Materials</a>
                </li>
              </ul>
            </span>
            <span classNames="flex flex-col bg-yellow-300">
              <p className="text-3xl font-extrabold pb-10">INFOR</p>
              <p className="pb-4">Shibakoen 4chome 2-8, Minato Ward</p>
              <p className="text-2xl pb-4">hello@urban.jp</p>
              <ul className="leading-10 text-gray-700">
                <li className="hover:text-lime-300">
                  <a href="">Works</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">About</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">News</a>
                </li>
                <li className="hover:text-lime-300">
                  <a href="">Contacts</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <hr className="bg-gray-400 h-[2px] w-full" />
        <div className="w-full flex flex-row justify-between items-center text-gray-500">
          <div>
            <span
              className=" h-12 w-12 text-sm
              flex flex-row font-bold space-x-2 items-center"
            >
              <Image
                src={Logo}
                width={50}
                height={50}
                className="text-lime-300"
              />
              <span>
                <p>URBAN</p>
                <p>DEVELOPMENT</p>
              </span>
            </span>
          </div>
          <span>© 2023 Urban Development. All Rights Reserved</span>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <span>Our Social</span>
            <span className="space-x-4 text-black">
              <Icon as={FaInstagram} w={22} h={22} />
              <Icon as={FaDribbble} w={22} h={22} />
              <Icon as={FaTwitter} w={22} h={22} />
              <Icon as={FaFacebookF} w={22} h={22} />
              <Icon as={FaInstagram} w={22} h={22} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
