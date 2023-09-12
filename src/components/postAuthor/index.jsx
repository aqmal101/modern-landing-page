import React from "react";
import Image from "next/image";
import Author from "../../assets/author.png";
import { Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";

function PostAuthor() {
  const dataIcon = [FaInstagram, FaTwitter, FaFacebookF, BsBehance];
  return (
    <>
      <div className="w-full h-fit bg-yellow flex flex-row space-x-3">
        <span className="w-[75px] h-[75px]">
          <Image
            src={Author}
            width={75}
            height={75}
            className="w-full h-full rounded-full "
            alt="Author this Blog"
          />
        </span>
        <div className="w-[90%] flex flex-col justify-start space-y-4">
          <span className="flex flex-col ju">
            <p>Andy Roberton</p>
            <p className="text-sm text-gray-700">コンテンツ エディター</p>
          </span>
          <span className="text-sm">
            私は、不動産の世界に関する最新情報を提供することに専念している人です。不動産市場、投資トレンド、インテリアデザイン、そして家の購入者に役立つ貴重なヒントについての深い知識を持っています。
          </span>
          <span className="flex flex-row space-x-4 items-center">
            {dataIcon.map((item, idx) => (
              <span
                key={idx}
                className="hover:text-orange-500 hover:cursor-pointer"
              >
                <Icon as={item} />
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
}

export default PostAuthor;
