import React from "react";
import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaTwitter } from "react-icons/fa";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import RelatedPostImage from "../../assets/grid2.png";
import RelatedPostImage2 from "../../assets/grid3.png";
// import ServiceImage from "../../assets/service-image.png";
import ServiceImage from "../../assets/ServiceImage.jpg";
import Testimoni from "../../assets/Tester2.jpg";
import MessageContact from "@/components/leaveAComment/messageContact";
import CircularProgress from "@/components/circularProgress";

function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  const ImageData = [RelatedPostImage, RelatedPostImage2];

  return (
    <>
      <div className="flex w-full h-fit min-h-screen flex-col items-center justify-between px-20">
        {id}
        <Navbar />
        <div className="w-full bg-white mt-[160px] h-fit flex flex-col items-center justify-center space-y-12">
          <div className="flex flex-col w-[90%] bg-white space-y-10">
            <span className="text-5xl text-left">
              アーキテクチャ＆インテリア
            </span>
            <span className="w-4/5 text-md text-gray-600 leading-8">
              夢のインテリアデザインは、青写真、プロジェクト計画、3Dビジュアライゼーションに反映されるコンセプトから始まります。どんな場所でも、それをより面白く、魅力的で機能的にすることが可能です。そのためには、本物のプロフェッショナルに信頼する価値があります。そうすれば、お金は無駄にはなりません。
            </span>
          </div>

          <div className="w-full h-screen">
            <Image
              src={ServiceImage}
              alt="woman in the room"
              className="w-full h-full"
            />
          </div>

          <div className="h-fit flex flex-row w-[90%] justify-between space-x-12">
            <div className="flex flex-col space-y-20  ">
              <span className="w-full text-md text-gray-600">
                自然のシステムとプロセスの活用を奨励することにより、自然に触れる機会が増え、その結果、これらのデザインアプローチは健康と幸福を向上させます。
                心拍変動や脈拍の減少、血圧の低下、神経系の活性化など、多くの利点が考えられます。
              </span>
              <div className="flex flex-col space-y-5">
                <span className="text-4xl text-left">
                  アーキテクチャ＆インテリア
                </span>
                <span className="w-full text-md text-gray-600">
                  夢のインテリアデザインは、ブループリント、プロジェクト計画、3Dビジュアライゼーションに反映されるコンセプトから始まります。どんな場所でもより面白く、魅力的で機能的にすることが可能で、そのためには真のプロフェッショナルに信頼を置く価値があります。そうすれば無駄にお金を使うことはありません。
                </span>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="text-4xl text-left">専門分野</span>
                <span className="w-full text-md text-gray-600">
                  デザインに自然のシステムとプロセスを活用することを奨励することで、自然に触れ合う機会が増え、結果としてこれらのデザインアプローチは健康と幸福を向上させます。
                </span>
              </div>

              {/* progress */}
              {/* <div>
                <CircularProgress />
              </div> */}
              {/* progress */}

              <div className="flex flex-col space-y-5">
                <span className="text-4xl text-left">アプローチ</span>
                <span className="w-full text-md text-gray-600">
                  デザインに自然のシステムとプロセスを活用することを奨励することで、自然との接触が可能になり、その結果、これらのデザインアプローチは健康と幸福を向上させます。
                </span>
              </div>
              {/* List */}
              <div className="w-full bg-white h-fit flex flex-col space-y-10 justify-right">
                <div className="w-full flex flex-row justify-left items-center space-x-10">
                  <span className="w-[10%] text-7xl text-gray-400">1.</span>
                  <div className="flex flex-col bg-white space-y-4">
                    <span className="text-3xl">
                      建築工事土木工事及びこれらに関連するコンサルティング業務
                    </span>
                  </div>
                </div>
                {/* <span className="border-b-[1px] w-full border-gray-300" /> */}
                <div className="w-full flex flex-row justify-left items-center space-x-6">
                  <span className="w-[10%] text-7xl text-gray-400">2.</span>
                  <div className="flex flex-col bg-white space-y-4">
                    <span className="text-3xl">一級建築士事務所の経営</span>
                  </div>
                </div>
                {/* <span className="border-b-[1px] w-full border-gray-300" /> */}
                <div className="w-full flex flex-row justify-left items-center space-x-6">
                  <span className="w-[10%] text-7xl text-gray-400">3.</span>
                  <div className="flex flex-col bg-white space-y-4">
                    <span className="text-3xl">
                      産業廃棄物の収集及び運搬に関する事業
                    </span>
                  </div>
                </div>
                {/* <span className="border-b-[1px] w-full border-gray-300" /> */}
                <div className="w-full flex flex-row justify-left items-center space-x-10">
                  <span className="w-[10%] text-7xl text-gray-400">4.</span>
                  <div className="flex flex-col bg-white space-y-4">
                    <span className="text-3xl">
                      土地開発、地域開発、都市開発及び環境整備に関する調査
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-left items-center space-x-10">
                  <span className="w-[10%] text-7xl text-gray-400">5.</span>
                  <div className="flex flex-col bg-white space-y-4">
                    <span className="text-3xl">
                      不動産の販売、交換、賃貸借、管理、仲介、保有及び運用並びにこれらに
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-left items-center space-x-6">
                  <span className="w-[10%] text-7xl text-gray-400">6.</span>
                  <span className="text-3xl">飲食店の経営</span>
                </div>
              </div>

              {/* List */}
            </div>
            <div className="w-[500px] flex flex-col space-y-10">
              <span className="text-3xl py-5">サービス一覧</span>
              <div className="flex flex-col space-y-4">
                <div className="w-full flex flex-row justify-left items-center space-x-3">
                  {/* <span className="w-1/5 text-3xl text-gray-400 border-r-[1px] h-full border-gray-300 ">
                    1
                  </span> */}
                  <div className="flex flex-col bg-white">
                    <span className="text-lg">サービス 1 </span>
                    {/* <span className="text-lg">インテリア</span> */}
                  </div>
                </div>
                <span className="border-b-[1px] w-full border-gray-300" />
                <div className="w-full flex flex-row justify-left items-center space-x-3">
                  {/* <span className="w-1/5 text-3xl text-gray-400 border-r-[1px] h-full border-gray-300 ">
                    2
                  </span> */}
                  <div className="flex flex-col bg-white">
                    <span className="text-lg">サービス 2</span>
                    {/* <span className="text-lg">写真撮影</span> */}
                  </div>
                </div>
                <span className="border-b-[1px] w-full border-gray-300" />
                <div className="w-full flex flex-row justify-left space-x-3">
                  {/* <span className="w-1/5 text-3xl text-gray-400 border-r-[1px] h-full border-gray-300 ">
                    3
                  </span> */}
                  <div className="flex flex-col bg-white">
                    <span className="text-lg">サービス 3</span>
                    {/* <span className="text-lg">製品</span>
                    <span className="text-lg">製造</span> */}
                  </div>
                </div>
                <span className="border-b-[1px] w-full border-gray-300" />
                <div className="w-full flex flex-row justify-left space-x-3">
                  {/* <span className="w-1/5 text-3xl text-gray-400 border-r-[1px] h-full border-gray-300 ">
                    4
                  </span> */}
                  <div className="flex flex-col bg-white">
                    <span className="text-lg">サービス 4</span>
                    {/* <span className="text-lg ">カスタムソリューション</span> */}
                  </div>
                </div>
              </div>

              {/* <span className="text-3xl py-5">表彰状</span>

              <div className="w-full h-fit border-2 border-gray-300 flex flex-col p-7 space-y-8">
                {/* <div className="w-full flex flex-row justify-between items-center bg-white">
                  {/* profile 
                  <div className="flex flex-row space-x-5 items-center">
                    <span className="w-[55px] h-[55px] rounded-full">
                      <Image
                        src={Testimoni}
                        width={55}
                        height={55}
                        className="w-full h-full rounded-full "
                        alt="Author this Blog"
                      />
                    </span>
                    <span className="flex flex-col">
                      <p className="text-md font-[500]">Laura Florence</p>
                      <a
                        href="#"
                        className="hover:text-blue-400 text-gray-600 text-[12px]"
                      >
                        @laura.cubichotel
                      </a>
                    </span>
                  </div>
                  {/* <span className="w-[75px] h-[75px] text-blue-300 flex flex-row items-center justify-center"> 
                  <span className="text-cyan-500">
                    <Icon as={FaTwitter} w={20} h={20} />
                  </span>
                  {/* </span> 
                </div> 

                <div className="w-full flex flex-col justify-start space-y-4">
                  <p className="text-md italic leading-loose text-gray-700">
                    わからないことは他に言うことがありません、これはあなたが以前に見たことのないものです。ユニークなデザイン、印象的で優れたサポート。.
                  </p>
                </div>

                <span className="text-xs text-gray-500">2023年7月23日</span>
              </div> */}
            </div>
          </div>
        </div>
        {/* <MessageContact /> */}
        <Footer />
      </div>
    </>
  );
}

export default ServiceDetail;
