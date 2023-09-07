import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import styles from "./navbarPage.module.css";
import Logo from "../../assets/square-tick-lime.svg";
import SearchBar from "../searchBar";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` transition-all duration-800 ${
          scrolling ? "h-16" : "h-36"
        } w-full border-b-[1px] bg-white text-black border-gray-400 flex flex-col justify-center items-center px-3 fixed box-border z-10 transform ${
          scrolling ? "translate-y-0" : "transform -translate-y-2"
        }`}
      >
        <span
          className={`w-full h-[10px] bg-orange-500 ${
            scrolling ? "hidden" : "flex absolute top-2"
          }`}
        />
        {/* <nav
        className={` transition-all duration-800 ${
          scrolling ? "h-16" : "h-36"
        } w-full border-b-[1px] bg-white text-black border-gray-400 flex flex-row justify-between items-center px-3 fixed box-border z-10 transform ${
          scrolling ? "translate-y-0" : "transform -translate-y-2"
        }`}
      > */}
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <span
              className={`${
                scrolling ? "h-6 w-6 text-xs" : "h-12 w-12 text-sm"
              } flex flex-row font-bold space-x-2 items-center`}
            >
              <Image src={Logo} width={50} height={50} color="black-500" />
              <span>
                <p>URBAN</p>
                <p>DEVELOPMENT</p>
              </span>
            </span>
          </div>
          <div class="space-x-6">
            <span className="font-semibold text-orange-500 hover:cursor-pointer text-sm">
              HOME
            </span>
            <Icon as={GoDotFill} color="gray" w={12} h={12} />
            <div
              className={`${styles["dropdown"]} ${
                scrolling ? "text-black" : "text-white"
              }`}
            >
              <button className={`${styles["dropbtn"]}`}>ABOUT US</button>
              <div className={`${styles["dropdown-content"]}`}>
                <a href="/about-us">Company</a>
                <a href="/about-us">Team</a>
                <a href="/about-us">Gallery</a>
                <a href="/about-us">Contact Us</a>
              </div>
            </div>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <div
              className={`${styles["dropdown"]} ${
                scrolling ? "text-black" : "text-white"
              }`}
            >
              <button className={`${styles["dropbtn"]}`}>SERVICE</button>
              <div className={`${styles["dropdown-content"]}`}>
                <a href="#">Service 1</a>
                <a href="#">Service 2</a>
                <a href="#">Service 3</a>
                <a href="#">Service 4</a>
                <a href="#">Service 5</a>
              </div>
            </div>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
              PORTOFOLIO
            </span>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
              BLOG
            </span>
          </div>
          {/* <div>
            <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
              Contact Us
            </span>
          </div> */}
          <div>
            <SearchBar />
            {/* <Icon as={BiSearch} w={20} h={20} color="lime.400" /> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
