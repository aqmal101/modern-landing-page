import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Icon } from "@chakra-ui/react";
import { VscPlay } from "react-icons/vsc";
import PencilRulerIcon from "../../assets/pencil-ruler-icon.png";
import { BsTelephone } from "react-icons/bs";
import BoxIcon from "../../assets/box-icon.svg";
import VectorIcon from "../../assets/vector-icon.svg";
import QuoteIcon from "../../assets/quote-icon.svg";
import CompanyImage from "../../assets/CompanyImage1.jpg";
import CompanyImage2 from "../../assets/aboutCompany2.png";
import FemaleSecretary from "../../assets/FemaleSecretary.png";

function AboutCompany() {
  const router = useRouter();
  return (
    <>
      <div
        id="company"
        className="pt-[200px] w-full min-h-screen bg-white flex flex-col items-center justify-around px-10"
      >
        <div className="w-full min-h-screen flex flex-row justify-between items-center bg-white mb-14">
          <div className="flex h-full flex-col w-5/12 justify-between items-start space-y-8 bg-white">
            <span className="text-5xl text-left w-[85%] leading-snug">
              賞を受賞した建築会社
            </span>
            <span className="w-[80%] text-lg font-semibold">
              偉大なエージェンシーのように、私たちは最近の仕事の成果にかかると同じくらい優れています。
            </span>
            <span>
              日本語のロレム・イプサムは、デザイン、印刷、およびタイプ設定業界で使用されてきました。これは、テキストの外観を評価するための標準的なサンプルテキストです。ロレム・イプサムは、ラテン語に基づいており、16世紀からの印刷およびタイプ設定業界で使用されてきました。ロレム・イプサムは、本物のコンテンツではなく、テキストの外観を示すためのダミーテキストです。それは言語の特定の意味を持たず、単に印刷またはグラフィックデザインのレイアウトの要素として使用されます。ロレム・イプサムは、テキストの配置、フォント、およびスタイルのテストに役立ちます。
            </span>
            {/* <span className="flex flex-row w-[40%] space-x-3 items-center">
              <button className="bg-orange-600 rounded-full w-[60px] h-[60px] flex flex-col justify-center items-center text-white hover:bg-orange-600/90 pl-1">
                <Icon as={VscPlay} w={30} h={30} />
              </button>
              <span className="w-[60%] font-semibold">
                私たちのストーリーを見る
              </span>
            </span> */}

            {/* 
            <div className="flex flex-col space-y-4">
              <span className="w-[85%] py-3">
                急いでいる場合は、すぐにお電話ください。私たちのサポーターは常に24時間365日対応しており、迅速にお手伝いさせていただきます。
              </span>

              <div className="flex flex-row space-x-3">
                <div className="hover:border-[1px] hover:border-orange-500 text-orange-500 bg-orange-300 hover:bg-orange-500 hover:text-white font-bold rounded-full flex flex-row justify-center items-center w-[40px] h-[40px]">
                  <Icon as={BsTelephone} w={20} h={20} />
                </div>
                <span className="flex flex-col">
                  <p className="text-sm">ホットライン 24/7</p>
                  <a
                    className="text-2xl font-semibold hover:text-orange-600"
                    href="#"
                  >
                    (06) 6282-7755
                  </a>
                </span>
              </div>
            </div> */}
          </div>
          <div className="bg-gray-500/30 w-1/2 h-[500px] flex justify-center items-center">
            <button className="bg-transparent rounded-full w-[90px] h-[90px] flex flex-col justify-center items-center text-orange-500 hover:bg-orange-500 pl-[6px] hover:text-white border border-orange-500">
              <Icon as={VscPlay} w={50} h={50} />
            </button>
          </div>
        </div>

        <span className="border-gray-400 border-b-[1px] w-full" />

        <div className="w-full h-auto flex flex-row-reverse justify-between items-start py-10 my-20">
          <div className="flex flex-col items-start w-5/12 h-full space-y-20">
            <h1 className="text-5xl leading-snug">
              私たちは、お客様の期待を超えるものを創造できます
            </h1>
            <span className="space-y-10 w-[85%]">
              <p className="italic text-xl">
                25年以上にわたり、Urban
                は投資家が夢を実現し、ビジネス目標を完璧に達成するのを支援しています
              </p>
              <p className="text-gray-500">
                これまでに、フォーチュン500社から新興のスタートアップまで様々な企業と共に仕事をしてきました。私たちは、お客様のような野心的なビジネスが認知度を高め、ウェブトラフィックを増やし、顧客とつながり、総売上を伸ばすのをお手伝いします。お気軽にお問い合わせください。
              </p>
            </span>
            <button
              className="bg-white hover:text-white border-[1px] border-orange-500 rounded-md w-[200px] h-[60px] flex flex-col justify-center items-center text-orange-500 hover:bg-orange-600/90 pl-1"
              onClick={() => router.push("/portofolio")}
            >
              プロジェクトを見る
            </button>
          </div>
          <div className="w-[50%] h-fit max-h- bg-purple-500">
            <Image
              src={CompanyImage}
              alt="Company Image 1"
              width="300px"
              height="300px"
            ></Image>
            {/* <div className="w-auto h-fit flex flex-col justify-center items-start text-white absolute bottom-20 left-20">
              <span className="w-[50%] flex flex-row space-x-3">
                <span className="text-[120px] font-light">25</span>
                <span className="w-fit text-2xl font-bold flex flex-row justify-center">
                  年の経験
                </span>
              </span>
              <span className="text-2xl w-[75%]">
                建築とインテリアのリーディング
              </span>
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-row w-full justify-between py-24 bg-white">
          <div className="flex flex-row  max-w-[300px] items-center space-x-4">
            <span className="text-6xl">100%</span>
            <span>顧客満足度</span>
          </div>
          <div className="flex flex-row  max-w-[300px] items-center space-x-4">
            <span className="text-6xl">250</span>
            <span>世界中の従業員</span>
          </div>
          <div className="flex flex-row  max-w-[330px] items-center space-x-4">
            <span className="text-6xl">3,875</span>
            <span>60か国で完了したプロジェクト</span>
          </div>
        </div> */}

        <span className="border-gray-400 border-b-[1px] w-full" />

        <div className="w-full flex flex-col py-28">
          <span className="flex flex-col space-y-6">
            <h1 className="text-5xl">夢のための最適なソリューション</h1>
            <p className="text-md text-gray-700">
              私たちは夢のための最適なソリューションを提供し、予算に適応し、プロジェクトの品質に関する要件に合致します。
            </p>
          </span>
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
        </div>

        {/* <div className="w-full min-h-screen flex flex-row justify-between space-x-5 items-start my-10">
          <div className="flex h-fit flex-col w-[40%] justify-start ">
            <span className="w-[40%] h-full">
              <Image
                src={QuoteIcon}
                alt="quote icon"
                width={120}
                height={120}
                className="p-0"
              />
            </span>
            <span className="text-[32px] text-gray-800">
              他に何と言えばいいかわかりません。これは以前に見たことのないものです。ユニークなデザイン、印象的で優れたサポートです。
            </span>
            <span className="flex flex-col space-y-2 mt-10">
              <p className="text-2xl">Laura Lorewnce</p>
              <p className="text-sm">
                キュービック ホテルのディレクター、ウクライナ
              </p>
            </span>
          </div>
          <div className="w-1/2 h-full">
            <Image
              src={FemaleSecretary}
              alt="Female Secreatry"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AboutCompany;
