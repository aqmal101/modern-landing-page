import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import {
  FaInstagram,
  // FaDribbble,
  FaTwitter,
  FaFacebookF,
  // FaGithub,
} from "react-icons/fa";

function Footer() {
  const ServiceList = [
    { service: "会社名", goto: "/about-us#company" },
    { service: "チーム", goto: "/about-us#team" },
    { service: "ギャラリー", goto: "/about-us#gallery" },
    { service: "お問い合わせ", goto: "/about-us#contact-us" },
  ];
  const InforList = [
    { name: "サービス", goto: "/service" },
    { name: "ポートフォリオ", goto: "/portofolio" },
    { name: "ブログ", goto: "/blog" },
  ];
  const FooterIcon = [
    FaInstagram,
    // FaDribbble,
    FaTwitter,
    FaFacebookF,
    // FaGithub,
  ];

  return (
    <>
      <footer className="min-h-screen w-full border-t-[1px] flex flex-col justify-around items-center px-6 bg-gray-100 mt-8 ">
        <div className="w-full flex flex-row justify-around items-start py-[100px] ">
          <span className="w-[40%] flex flex-col text-4xl font-extrabold leading-relaxed">
            <p>
              夢をスタートさせましょう、Urban Development トで
              <span className="text-orange-500 hover:underline hover:cursor-pointer underline-offset-8">
                「こんにちは」
              </span>
              を言って始めましょう。
            </p>
          </span>

          <div className="w-5/12 flex flex-row space-x-20 ">
            <div>
              <p className="text-3xl pb-6">私たちについて</p>
              <span className="flex flex-col text-gray-500 text-lg  leading-10">
                {ServiceList.map((item, idx) => (
                  <li className="hover:text-orange-500 list-none  transition-all duration-300">
                    <a href={`${item.goto}`} key={idx}>
                      {item.service}
                    </a>
                  </li>
                ))}
              </span>
            </div>
            <div>
              <p className="text-3xl pb-6">クイックリンク</p>
              <span className="flex flex-col text-gray-500 text-lg  leading-10">
                {InforList.map((item, idx) => (
                  <li className="hover:text-orange-500 list-none  transition-all duration-300">
                    <a href={`${item.goto}`} key={idx}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </span>
            </div>
          </div>
        </div>
        <hr className="bg-gray-400 h-[2px] w-full" />
        <div className="w-full flex flex-row justify-between items-center px-10 text-gray-500 pt-10 pb-[80px]">
          <div>
            <span
              className=" h-20 w-20 text-sm
              flex flex-row font-bold space-x-2 items-center"
            >
              <Image
                src={Logo}
                width={80}
                height={40}
                className="text-orange-500"
                alt="Company Logo"
              />
              {/* <span>
                <p>URBAN</p>
                <p>DEVELOPMENT</p>
              </span> */}
            </span>
          </div>
          <span>© 2023 アーバン開発。全著作権所有。</span>
          <div className="flex flex-row items-center space-x-4 justify-center">
            {/* <span>Our Social</span> */}
            <span className="space-x-8 text-black">
              {FooterIcon.map((item, idx) => (
                <Icon
                  as={item}
                  w={22}
                  h={22}
                  key={idx}
                  className="hover:text-orange-500 hover:cursor-pointer  transition-all duration-300"
                />
              ))}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
