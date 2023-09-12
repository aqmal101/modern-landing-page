import React from "react";
import { Icon } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import { BsEnvelope, BsTelephone, BsStopwatch } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import MessageContact from "../leaveAComment/messageContact";

function AboutContacts() {
  const SocialIcon = [FaInstagram, FaTwitter, FaFacebookF];
  return (
    <>
      <div
        id="contact-us"
        className="pt-[100px] w-full min-h-screen flex flex-col items-start justify-around"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-fit flex flex-col space-y-5 justify-center items-center ">
            <span className="text-5xl">アーバン開発にお問い合わせ</span>
            <div className="flex flex-row space-x-8 pt-5">
              {SocialIcon.map((item, idx) => (
                <span
                  key={idx}
                  className="w-[40px] h-[40px] border-[1px] text-gray-600 border-gray-400 p-3 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:cursor-pointer hover:text-white"
                >
                  <Icon as={item} w={22} h={22} />
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-auto flex flex-row justify-around space-x-6 pt-20 pb-32 px-5">
            <div className="flex flex-row space-x-7">
              <div className="flex flex-row bg-white">
                <span className="w-[70px] h-[70px] border-[1px] text-gray-600 border-gray-400 p-3 rounded-full flex items-center justify-center hover:border-orange-500 hover:cursor-pointer hover:text-orange-500 ">
                  <Icon as={FiMapPin} w={22} h={22} />
                </span>
              </div>
              <div className="bg-white">
                <p className="text-gray-600 py-4">会社</p>
                <ul className="list-disc bg-white">
                  <li>〒５４１－００４７　大阪市中央区淡路町2目1-1堺筋</li>
                  <li>大阪府知事許(持ー4)第158814号</li>
                  <li>大阪府知事許(イ)第26332号</li>
                  <li>大阪府知事許(1)第63896号</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row space-x-7">
              <div className="flex flex-row bg-white">
                <span className="w-[70px] h-[70px] border-[1px] text-gray-600 border-gray-400 p-3 rounded-full flex items-center justify-center hover:border-orange-500 hover:cursor-pointer hover:text-orange-500 ">
                  <Icon as={BsEnvelope} w={22} h={22} />
                </span>
              </div>
              <div className="bg-white">
                <p className="text-gray-600 py-4">マイル</p>
                <ul className="list-disc bg-white">
                  <li>FAX : (06) 6282-7755</li>
                  <li>マイル ： mihara@urban.co.jp</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row space-x-7">
              <div className="flex flex-row bg-white">
                <span className="w-[70px] h-[70px] border-[1px] text-gray-600 border-gray-400 p-3 rounded-full flex items-center justify-center hover:border-orange-500 hover:cursor-pointer hover:text-orange-500 ">
                  <Icon as={BsTelephone} w={22} h={22} />
                </span>
              </div>
              <div className="bg-white">
                <p className="text-gray-600 py-4">電話番号</p>
                <ul className="list-disc bg-white">
                  <li>電話番号 : (06) 6282-7755</li>
                  <li>モバイル ： （090-7876-0003） </li>
                </ul>
              </div>
            </div>

            {/* <div className="flex flex-row space-x-4 bg-white">
              <span className="w-[70px] h-[70px] border-[1px] text-gray-600 border-gray-400 p-3 rounded-full flex items-center justify-center hover:border-orange-500 hover:cursor-pointer hover:text-orange-500">
                <Icon as={BsTelephone} w={22} h={22} />
              </span>
              <span className="flex flex-col">
                <p className="text-gray-600">PHONE</p>
                <a href="#" className="hover:text-orange-500">
                  (+8003)125 08 59
                </a>
                <a href="#" className="hover:text-orange-500">
                  (+95) 0689 36 47
                </a>
              </span>
            </div> */}
          </div>
        </div>
        <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3280.72985957771!2d135.50412946063037!3d34.68676682281168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z44CS77yV77yU77yR77yN77yQ77yQ77yU77yX44CA5aSn6Ziq5biC5Lit5aSu5Yy65reh6Lev55S6MuebrjEtMeWguuetiw!5e0!3m2!1sen!2sid!4v1694454947476!5m2!1sen!2sid"
            className="w-full h-full border border-none "
            // width="600"
            // height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <div className="w-[40%] bg-white absolute right-10 top-10 bottom-10 p-16 flex flex-col justify-around">
            <div className="flex flex-col space-y-3">
              {/* <p className="text-2xl text-gray-600">
                <span className="font-semibold text-black">Beverly Hill, </span>
                California
              </p> 
              <span className="text-gray-600 text-sm">
                〒５４１－００４７　大阪市中央区淡路町2目1-1堺筋
              </span>
              <p className="text-black text-sm">
                <span className="text-gray-500">マイル ：</span>
                mihara@urban.co.jp
              </p>
            </div>
            <span>
              <p className="text-gray-500 text-sm">直接お電話ください：</p>
              <p className="text-2xl"> (06) 6282-7755 </p>
            </span>
            <span>
              <p className="text-gray-500 text-sm">BRAND OFFICES:</p>
              <span className="text-black flex flex-col text-xs">
                <span className="flex flex-row space-x-2">
                  <p>Allentown PA</p>
                  <span>|</span>
                  <p>Allanta, GA</p>
                  <span>|</span>
                  <p>Chicago, IL</p>
                  <span>|</span>
                  <p>Dallas, TX </p>
                  <span>|</span>
                </span>
                <span className="flex flex-row space-x-2">
                  <p> Edison, NJ</p>
                  <span>|</span>
                  <p> Houston, TX</p>
                </span>
              </span>
            </span>
            <span className="">
              <button className="text-sm bg-orange-600 border hover:bg-orange-500 hover:border-orange-400 px-5 py-3 rounded-md text-white">
                お問い合わせください。
              </button>
            </span>
          </div> */}
        </div>
        {/* <MessageContact /> */}
      </div>
    </>
  );
}

export default AboutContacts;
