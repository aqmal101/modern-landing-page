import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import styles from "./navbarPage.module.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../searchBar/searchBarPage";

function Navbar() {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const ServiceLink = ["サービス 1", "サービス 2", "サービス 3"];

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
        } w-full  bg-white text-black  flex flex-col justify-center items-center px-6 fixed box-border z-10 transform ${
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
                scrolling ? "h-12 w-12 text-xs" : "h-20 w-20 text-sm"
              } flex flex-row font-bold space-x-2 items-center`}
            >
              <Image
                src={Logo}
                width={100}
                height={70}
                alt="Company Logo"
                color="orange.500"
              />
              {/* <span>
                <p>URBAN</p>
                <p>DEVELOPMENT</p>
              </span> */}
            </span>
          </div>
          <div class="space-x-6">
            <span className="font-semibold hover:cursor-pointer text-sm">
              <a onClick={() => router.push("/")} className="text-lg">
                ホーム
              </a>
            </span>
            <Icon as={GoDotFill} color="gray" w={12} h={12} />
            <div
              className={`${styles["dropdown"]} ${
                scrolling ? "text-black" : "text-white"
              }`}
            >
              <button
                className={`${styles["dropbtn"]} ${
                  router.pathname === "/about-us" ? "text-orange-500" : ""
                } `}
                onClick={() => router.push("/about-us/#")}
              >
                <a
                  className={`${
                    router.pathname === "/about-us" ? "text-orange-500" : ""
                  }`}
                >
                  私たちについて
                </a>
              </button>
              <div
                className={`${styles["dropdown-content"]} h-fit w-fit  relative`}
              >
                <div className="w-20 h-[23px] bg-transparent"></div>
                <span
                  className={`${styles["content-list"]} bg-purple-500 w-fit absolute`}
                >
                  <ul>
                    <li
                      onClick={() => router.push("/about-us#company")}
                      className="hover:cursor-pointer"
                    >
                      <a
                        className={`${
                          router.pathname === "/about-us#company"
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        会社名
                      </a>
                    </li>
                    <li
                      onClick={() => router.push("/about-us#team")}
                      className="hover:cursor-pointer"
                    >
                      <a
                        className={`${
                          router.pathname === "/about-us#team"
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        チーム
                      </a>
                    </li>
                    <li
                      onClick={() => router.push("/about-us#gallery")}
                      className="hover:cursor-pointer"
                    >
                      <a
                        className={`${
                          router.pathname === "/about-us#gallery"
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        ギャラリー
                      </a>
                    </li>
                    <li
                      onClick={() => router.push("/about-us#contact-us")}
                      className="hover:cursor-pointer"
                    >
                      <a
                        className={`${
                          router.pathname === "/about-us#contact-us"
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        お問い合わせ
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <div
              className={`${styles["dropdown"]} ${
                scrolling ? "text-black" : "text-white"
              }`}
            >
              <button
                onClick={() => router.push("/service")}
                className={`${styles["dropbtn"]} `}
              >
                <a
                  className={`${
                    router.pathname === "/service" ? "text-orange-500" : ""
                  }`}
                >
                  サービス
                </a>
              </button>
              <div className={`${styles["dropdown-content"]}`}>
                <div className="w-20 h-[23px] bg-transparent"></div>
                <span
                  className={`${styles["content-list"]} bg-purple-500 w-fit absolute`}
                >
                  <ul>
                    {ServiceLink.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => router.push(`/service/${idx + 1}`)}
                        className="hover:cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
              <a
                onClick={() => router.push("/portofolio")}
                className={`text-lg font-semibold  ${
                  router.pathname == "/portofolio" ? "text-orange-500" : ""
                }`}
              >
                ポートフォリオ
              </a>
            </span>

            <Icon as={GoDotFill} color="gray" w={12} h={12} />

            <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
              <a
                onClick={() => router.push("/blog")}
                className={`text-lg font-semibold ${
                  router.pathname == "/blog" ? "text-orange-500" : ""
                }`}
              >
                ブログ
              </a>
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
