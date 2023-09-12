import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid1 from "../../assets/grid1.png";
import Grid2 from "../../assets/grid2.png";
import Grid3 from "../../assets/grid3.png";
import Grid45 from "../../assets/grid45.png";
import Grid6 from "../../assets/grid6.png";
import Grid7 from "../../assets/grid7.png";
import Grid89 from "../../assets/grid89.png";
import Grid101112 from "../../assets/grid101112.png";
import Grid13 from "../../assets/grid13.png";
import Grid14 from "../../assets/grid14.png";
import Grid15 from "../../assets/grid15.png";

function AboutGallery() {
  const router = useRouter();

  return (
    <>
      <div
        id="gallery"
        className="flex w-full h-auto min-h-screen flex-col items-center justify-between px-20"
      >
        <div className="w-full h-auto flex flex-col mt-[160px] space-y-8 py-10 justify-center items-center bg-white">
          <span className="text-5xl w-full text-center">ギャラリー</span>
          <span className="text-xl text-gray-500">
            不動産の可能性を探求するためのインスピレーションを得るために、当サイトのギャラリーをご覧ください。建物のデザインや内部の美しさを通じて、夢のプロパティに近づく方法を発見できます。
          </span>
        </div>
        <span className="flex flex-row space-x-6">
          <a href=""></a>
        </span>
        <div className="w-full h-full grid grid-cols-3 gap-4">
          <div className="bg-purple-500 w-full h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid1}
              alt={Grid1}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid2}
              alt={Grid2}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid3}
              alt={Grid3}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="col-span-2 bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid45}
              alt={Grid45}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid6}
              alt={Grid6}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid7}
              alt={Grid7}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="col-span-2 bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid89}
              alt={Grid89}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div class="col-span-3 bg-purple-500 h-[350px] hover:scale-100 overflow-hidden ">
            <Image
              src={Grid101112}
              alt={Grid101112}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 w-full h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid13}
              alt={Grid13}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden">
            <Image
              src={Grid14}
              alt={Grid14}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
          <div className="bg-purple-500 h-[350px] hover:scale-100 overflow-hidden ">
            <Image
              src={Grid15}
              alt={Grid15}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
        </div>
        <span className="border-[1px] border-gray-400 p-5 text-xl my-20 rounded-full w-[120px] flex flex-col items-center justify-center h-[120px] hover:cursor-pointer hover:border-orange-500 hover:text-orange-500 font-semibold">
          もっと
        </span>
      </div>
    </>
  );
}

export default AboutGallery;
