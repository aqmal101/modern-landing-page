import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import styles from "./navbar.module.css";
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
          scrolling
            ? "h-16 bg-white text-black"
            : "h-36 bg-transparent text-white"
        } w-full border-b-[1px] border-gray-400 flex flex-row justify-between items-center px-3 fixed box-border z-10 duration-300 transform ${
          scrolling ? "translate-y-0" : "transform -translate-y-2"
        }`}
      >
        <div>
          <span
            className={`${
              scrolling ? "h-6 w-6 text-xs" : "h-12 w-12 text-sm"
            } flex flex-row font-bold space-x-2 items-center`}
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
        <div class="space-x-10">
          <span className="font-semibold text-lime-400 hover:cursor-pointer text-sm">
            <a href="/">HOME</a>
          </span>
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

          <span className="hover:font-semibold hover:text-lime-400 hover:cursor-pointer text-sm">
            PORTOFOLIO
          </span>
          <span className="hover:font-semibold hover:text-lime-400 hover:cursor-pointer text-sm">
            BLOG
          </span>
        </div>
        <div className="space-x-6">
          <span className="hover:font-semibold hover:text-lime-400 hover:cursor-pointer text-sm">
            EN
          </span>
          <span className="hover:font-semibold hover:text-lime-400 hover:cursor-pointer text-sm">
            JP
          </span>
        </div>
        <div>
          <SearchBar />
          {/* <Icon as={BiSearch} w={20} h={20} color="lime.400" /> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
