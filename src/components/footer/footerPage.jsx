import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function FooterPage() {
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
  const SocialIcon = [FaInstagram, FaTwitter, FaFacebookF];

  return (
    <>
      <footer className="h-fit w-full border-t-[1px] flex flex-col justify-around items-center bg-gray-100 mt-8 pb-10">
        <div className="w-full flex flex-col items-start justify-start space-y-8 py-20">
          <span className="text-5xl text-orange-500 hover:underline underline-offset-8 transition-all duration-750">
            <a href="#"> mihara@urban.co.jp</a>
          </span>
          <span className="text-2xl text-gray-700">
            夢を教えてください、そして私たちはそれを現実にするお手伝いをいたします。
          </span>
        </div>

        <hr className="bg-gray-400 h-[2px] w-full" />

        <div className="w-full flex flex-row justify-between items-start py-20">
          <div className="w-auto flex flex-row space-x-14">
            <div className="">
              <p className="text-3xl pb-6">オフィス</p>
              <span className="text-gray-500 leading-10">
                <ul className="list-disc pl-6">
                  <li>〒５４１－００４７　大阪市中央区淡路町2目1-1堺筋</li>
                  <li>大阪府知事許(持ー4)第158814号</li>
                  <li>大阪府知事許(イ)第26332号</li>
                  <li>大阪府知事許(1)第63896号</li>
                </ul>
              </span>
            </div>
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
          <div className="flex flex-row items-start space-x-6 text-gray-500">
            {SocialIcon.map((item, idx) => (
              <span
                className="w-[40px] h-[40px] border-[1px] border-gray-500 p-3 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:cursor-pointer hover:text-white"
                key={idx}
              >
                <Icon as={item} w={22} h={22} />
              </span>
            ))}
          </div>
        </div>

        <hr className="bg-gray-400 h-[2px] w-full" />

        <div className="w-full flex flex-row justify-between items-center text-gray-500 py-20">
          <span>
            © 2023 <span className="text-black font-semibold">アーバン</span>
            開発。全著作権所有。
          </span>
          <span>
            デザインと開発
            <span className="text-black font-semibold pl-2">URBAN Studio</span>
          </span>
        </div>
      </footer>
    </>
  );
}

export default FooterPage;
