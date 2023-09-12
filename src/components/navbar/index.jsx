import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../searchBar";

function Navbar({ navLinks }) {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ServiceLink = ["サービス 1", "サービス 2", "サービス 3"];

  const NavLinks = [{ name: "Home", href: "/" }];
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const router = useRouter();

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
      {/* {navLinks.map((link) => (
        const isActive = pathname === link.href; */}
      {/* return ( */}
      <nav
        className={` transition-all duration-800 ${
          scrolling
            ? "h-16 bg-white text-black"
            : "h-36 bg-transparent text-white"
        } w-full border-b-[1px] border-gray-400/30 flex flex-row justify-between items-center px-20 fixed box-border z-10 duration-50 transform ${
          scrolling ? "translate-y-0" : "transform -translate-y-2"
        }`}
      >
        <div className="w-auto h-auto">
          <span
            className={`${
              scrolling ? "h-12 w-12 text-xs" : "h-20 w-20 text-sm"
            } flex flex-row font-bold space-x-2 items-center`}
          >
            <Image
              src={Logo}
              width={100}
              height={70}
              className="text-orange-500"
              alt="Company Logo"
            />
            {/* <span>
              <p>URBAN</p>
              <p>DEVELOPMENT</p>
            </span> */}
          </span>
        </div>
        <div class="space-x-10">
          <span className="font-extrabold hover:cursor-pointer text-sm">
            {/* <Link
                  className={isActive ? "text-blue" : "text-black"}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link> */}
            <a
              onClick={() => router.push("/")}
              className="font-extrabold text-lg text-orange-500"
            >
              ホーム
            </a>
          </span>
          <div
            className={`${styles["dropdown"]} ${
              scrolling ? "text-black" : "text-white"
            }`}
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <button
              className={`${styles["dropbtn"]} text-lg ease-in-out`}
              onClick={() => router.push("/about-us/#")}
            >
              私たちについて
            </button>
            {isDropdownOpen && (
              <div className={`${styles["dropdown-content"]} `}>
                <div
                  className={`w-20 bg-transparent ${
                    scrolling ? "h-[23px]" : "h-16"
                  }`}
                ></div>
                <span
                  className={`${styles["content-list"]} bg-purple-500 w-fit absolute`}
                >
                  <ul>
                    <li
                      onClick={() => router.push("/about-us/#company")}
                      className="hover:cursor-pointer font-bold"
                    >
                      会社名
                    </li>
                    <li
                      onClick={() => router.push("/about-us/#team")}
                      className="hover:cursor-pointer font-bold"
                    >
                      チーム
                    </li>
                    <li
                      onClick={() => router.push("/about-us/#gallery")}
                      className="hover:cursor-pointer font-bold"
                    >
                      ギャラリー
                    </li>
                    <li
                      onClick={() => router.push("/about-us/#contact-us")}
                      className="hover:cursor-pointer font-bold text-lg"
                    >
                      お問い合わせ
                    </li>
                  </ul>
                </span>
              </div>
            )}
          </div>
          <div
            className={`${styles["dropdown"]} ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            <button
              className={`${styles["dropbtn"]}`}
              onClick={() => router.push("/service")}
            >
              サービス
            </button>
            <div className={`${styles["dropdown-content"]} `}>
              <div
                className={`w-20 bg-transparent ${
                  scrolling ? "h-[23px]" : "h-16"
                }`}
              ></div>
              <span
                className={`${styles["content-list"]} bg-purple-500 w-fit absolute`}
              >
                <ul>
                  {ServiceLink.map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => router.push(`/service/${idx + 1}`)}
                      className="hover:cursor-pointer font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>

          <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
            <a
              onClick={() => router.push("/portofolio")}
              className="font-bold text-lg "
            >
              ポートフォリオ
            </a>
          </span>
          <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
            <a
              onClick={() => router.push("/blog")}
              className="font-bold text-lg"
            >
              ブログ
            </a>
          </span>
        </div>
        <div className="space-x-3">
          <span className="hover:font-semibold hover:text-orange-500 hover:cursor-pointer text-sm">
            EN
          </span>
          <span className="font-bold text-orange-500 hover:cursor-pointer text-sm">
            JP
          </span>
        </div>
        <div className={`$${scrolling ? "text-black" : "text-white"}`}>
          <SearchBar />
        </div>
      </nav>
      {/* // )) // } */}
    </>
  );
}

export default Navbar;
