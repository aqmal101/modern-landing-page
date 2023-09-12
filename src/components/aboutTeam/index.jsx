import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { PiUsers } from "react-icons/pi";
import OldManCeo from "../../assets/OldManCEO.png";
import Man1 from "../../assets/man1.png";
import Man2 from "../../assets/man2.png";
import Man4 from "../../assets/man4.png";
import Man5 from "../../assets/man5.png";
import Man6 from "../../assets/man6.png";
import Man7 from "../../assets/man7.png";
import Man8 from "../../assets/man8.png";
import Woman2 from "../../assets/woman2.png";
import Woman3 from "../../assets/woman3.png";
import Woman4 from "../../assets/woman4.png";
import Woman5 from "../../assets/woman5.png";

function AboutTeam() {
  const DataImage = [
    {
      image: OldManCeo,
      name: "James Baron ",
      position: " CEO ファウンダー",
    },
    {
      image: Man1,
      name: "Abdul Kodir",
      position: " 共同ファウンダー",
    },
    {
      image: Woman3,
      name: "Zahra Kalasiknova",
      position: "プロジェクトマネジメント",
    },
    {
      image: Man2,
      name: "Zain James Roon",
      position: "技術リーダー",
    },
    {
      image: Woman2,
      name: "Cyntya Meccanova Refs",
      position: "アーキテクト",
    },
    {
      image: Man8,
      name: "Thomas Robert ",
      position: "アーキテクト",
    },
    {
      image: Woman5,
      name: "June Jubile",
      position: "アーキテクト",
    },
    {
      image: Man5,
      name: "Harmes Gahalen",
      position: "エンジニアr",
    },
    {
      image: Woman4,
      name: "Mika Helvatica",
      position: " マーケティング",
    },
    {
      image: Man7,
      name: "Ricky Wang",
      position: "3D ビジュアライゼーション",
    },
  ];

  return (
    <>
      <div
        id="team"
        className=" w-full min-h-screen bg-white flex flex-col items-center justify-around mt-10"
      >
        <span className="flex justify-center items-center w-4/5 text-center">
          <h1 className="text-4xl font-semibold py-12">
            参加して、Urbanの2,000人以上の才能あるメンバーに加わってください。
          </h1>
        </span>
        <div className="grid grid-cols-4 grid-rows-4 gap-8 pt-6">
          {DataImage.map((item, idx) => (
            <div
              className="w-[260px] h-[320px] border-[1px] border-white flex flex-col items-start justify-between grayscale hover:grayscale-0 hover:cursor-pointer"
              key={idx}
            >
              <div className="w-full h-[250px] border-[1px] border-gray-500">
                <Image
                  src={item.image}
                  alt={`image of ${item.name} he is ${item.position}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0"
                />
              </div>
              <span className="flex flex-col">
                <p className="font-semibold text-xl">{item.name}</p>
                <p>{item.position}</p>
              </span>
            </div>
          ))}
          <div className="w-[260px] h-[300px] flex flex-col items-start hover:text-orange-500 hover:cursor-pointer">
            <div className="w-full h-[250px] border border-gray-500 flex flex-col justify-center items-center">
              <span className="w-fit h-fit flex flex-col items-center justify-center">
                <Icon as={PiUsers} w={60} h={60} />
                <p className="font-semibold">私たちのメンバーになる</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeam;
