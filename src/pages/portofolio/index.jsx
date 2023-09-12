import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import Portofolio1 from "../../assets/PortofolioImage1.jpg";
import Portofolio2 from "../../assets/PortofolioImage2.jpg";
import Portofolio3 from "../../assets/PortofolioImage3.jpg";
import Portofolio4 from "../../assets/PortofolioImage4.jpg";
import Portofolio5 from "../../assets/PortofolioImage5.jpg";
import Portofolio6 from "../../assets/PortofolioImage6.jpg";
import Portofolio7 from "../../assets/PortofolioImage7.jpg";
import Portofolio8 from "../../assets/PortofolioImage8.jpg";
import Portofolio9 from "../../assets/PortofolioImage9.jpg";

function PortofolioPage() {
  const ImageData = [
    Portofolio1,
    Portofolio2,
    Portofolio3,
    Portofolio4,
    Portofolio5,
    Portofolio6,
    Portofolio7,
    Portofolio8,
    Portofolio9,
  ];

  console.log(ImageData);

  return (
    <>
      <main className="flex w-full h-auto min-h-screen flex-col items-center justify-between px-20">
        <Navbar />
        <div className="w-full h-fit flex flex-col mt-[180px] space-y-8 pb-10">
          <span className="text-5xl w-[65%] text-justfy leading-medium">
            建築は視覚芸術であり、建物自体が語りかけます。
          </span>
          <span className="w-[75%]">
            クラフトビールのエリートセイタンエクササイズ、フォトブース、8ビットのケールチップスは、チルウェーブディープラボラムを提供します。アリキップヴェニアムデレクタス、マルファエイウモドピンテレストインドウマミレディメイドスワッグ。セルフアイフォンキックスターター、ドリンキングビネガージーンビネガースタンプタウンイヤーポップアップアーティザン。
          </span>
        </div>
        <span className="flex flex-row space-x-6">
          <a href=""></a>
        </span>
        <div className="w-full grid grid-cols-3 gap-5 my-8 bg-white mt-5">
          {ImageData.map((item, idx) => (
            <div
              className="w-full h-[500px] bg-white flex flex-col justify-between"
              key={idx}
            >
              <div className="w-full h-[50%]">
                <Image
                  src={item}
                  alt={item}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-1/2 flex flex-col justify-between py-8 space-y-3">
                <span className="text-orange-500">
                  アーキテクチャ、インテリア
                </span>
                <span className="text-3xl">CUBE VILLA、ポーランド</span>
                <span>
                  CleanCloudのグローバル市場での存在感を高めるのにどのようにお手伝いしましたか、そのビジュアルアイデンティティのスケーリングアップを通じて発見してください。
                </span>
              </div>
            </div>
          ))}
        </div>
        <span className="border-[1px] border-gray-400 p-5 text-xl my-20 rounded-full w-[120px] flex flex-col items-center justify-center h-[120px] hover:cursor-pointer hover:border-orange-500 hover:text-orange-500 font-semibold">
          もっと
        </span>

        <Footer />
      </main>
    </>
  );
}

export default PortofolioPage;
