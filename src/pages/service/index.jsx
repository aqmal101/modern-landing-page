import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import LeaveAComment from "@/components/leaveAComment/leaveAMessage";
import PencilRulerIcon from "../../assets/pencil-ruler-icon.png";
import BoxIcon from "../../assets/box-icon.svg";
import VectorIcon from "../../assets/vector-icon.svg";
import Author from "../../assets/author.png";
import { Icon } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

function ServicePage() {
  const router = useRouter();
  return (
    <>
      <main className="flex w-full h-auto min-h-screen flex-col items-center justify-between px-20">
        <Navbar />
        <div className="w-full h-fit  flex flex-col mt-[220px] space-y-8 ">
          <span className="flex flex-col space-y-6">
            <h1 className="text-5xl">夢のための最適なソリューション</h1>
            <p className="text-md text-gray-700">
              私たちは夢のための最適なソリューションを提供し、予算に適応し、プロジェクトの品質に関する要件に合致します。
            </p>
          </span>
        </div>
        <div className="w-full h-1/2 my-16 flex flex-row justify-around items-start bg-white space-x-6 ">
          <div
            className="w-1/3 h-full flex flex-col space-y-8 border-2 px-6 py-6 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:cursor-pointer rounded-md"
            onClick={() => router.push("/service/1")}
          >
            <span className="">
              <Image
                src={PencilRulerIcon}
                width={50}
                height={50}
                alt="Pencil Icon"
              />
            </span>
            <span className="text-3xl">建築＆インテリア</span>
            <span>
              建築デザイン、インテリアデザイン、ランドスケープデザイン、商業、住宅、3Dビジュアライゼーション
            </span>
            <span className="font-bold hover:text-orange-500 duration-200">
              256プロジェクト
            </span>
          </div>

          <div
            className="w-1/3 h-full flex flex-col space-y-8 border-2 px-6 py-6 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:cursor-pointer rounded-md"
            onClick={() => router.push("/service/2")}
          >
            <span className="">
              <Image
                src={VectorIcon}
                width={50}
                height={50}
                alt="Vector Icon"
              />
            </span>
            <span className="text-3xl">デザイン＆写真</span>
            <span>
              ウェブデザイン、モバイルアプリデザイン、3Dデザイン、CGI、キャラクター、モーション、写真
            </span>
            <span className="font-bold hover:text-orange-500 duration-200">
              64 プロジェクト
            </span>
          </div>

          <div
            className="w-1/3 h-full flex flex-col space-y-8 border-2 px-6 py-6 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:cursor-pointer  rounded-md"
            onClick={() => router.push("/service/3")}
          >
            <span className="">
              <Image src={BoxIcon} width={50} height={50} alt="Box Icon" />
            </span>
            <span className="text-3xl">家具製品製造</span>
            <span>
              ソファ、椅子、木製家具、棚、ベッド、装飾、構造、天井、床、壁、構造、天井、床、壁
            </span>
            <span className="font-bold hover:text-orange-500 duration-200">
              8,256アイテム
            </span>
          </div>
        </div>

        {/* <div className="w-full flex flex-col bg-white space-y-10">
          <div className="w-full h-fit border-2 border-gray-300 flex flex-col p-36 space-y-8">
            <div className="w-full flex flex-row justify-between items-center bg-white">
              profile 
              <div className="flex flex-row space-x-5 items-center">
                <span className="w-[55px] h-[55px]">
                  <Image
                    src={Author}
                    width={55}
                    height={55}
                    className="w-full h-full rounded-full "
                    alt="Author this Blog"
                  />
                </span>
                <span className="flex flex-col">
                  <p className="text-lg font-[500]">Thiago Alcantara</p>
                  <p className="text-sm text-gray-400">
                    <a href="#" className="hover:text-blue-400">
                      @thiago.lfc
                    </a>
                    - 15 Dec, 2020
                  </p>
                </span>
              </div>
              {/* <span className="w-[75px] h-[75px] text-blue-300 flex flex-row items-center justify-center"> 
                <span className="text-cyan-500">
                  <Icon as={FaTwitter} w={40} h={40} />
                </span>
                </span> 
                    </div>

            <div className="w-full flex flex-col justify-start space-y-4">
              <p className="text-2xl italic leading-loose">
                <a href="#" className="text-cyan-500 hover:text-cyan-300 px-2">
                  @urban.development
                </a>
                のチームは非常に献身的で知識豊富で、役立つ人たちです。仕上がった製品は美しく、お金を払う価値がありました。Urban
                Developmentを心からお勧めします。
              </p>
            </div>
          </div>
        </div> */}
        {/* <LeaveAComment /> */}
        <Footer />
      </main>
    </>
  );
}

export default ServicePage;
