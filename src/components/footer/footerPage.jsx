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

function FooterPage() {
  return (
    <>
      <footer className="h-[500px] w-full border-t-[1px] flex flex-col justify-around items-center px-6 bg-gray-100 mt-8 pb-10">
        <hr className="bg-gray-400 h-[2px] w-full" />

        <div className="w-full flex flex-row justify-around items-start ">
          <div className="w-[60%] flex flex-row space-x-6">
            <div>
              <p className="text-3xl ">Office </p>
              <p>166 Main Street, Beverly Hills CA, 90210</p>
              <p>+0085 346 2188</p>
            </div>
            <div>
              <p className="text-3xl">Help</p>
              <ul>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li> Help </li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl">Quick Links</p>
              <ul>
                <li>About</li>
                <li>Works</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-start space-x-6">
            <Icon as={FaTwitter} w={22} h={22} />
            <Icon as={FaFacebookF} w={22} h={22} />
            <Icon as={FaInstagram} w={22} h={22} />
          </div>
        </div>

        <hr className="bg-gray-400 h-[2px] w-full" />

        <div className="w-full flex flex-row justify-between items-center text-gray-500">
          <span>© 2021 LIARCH All Rights Reserved</span>
          <span>Development by Paul Studio</span>
        </div>
      </footer>
    </>
  );
}

export default FooterPage;
