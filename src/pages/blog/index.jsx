import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
// import Grid1 from "../../assets/grid1.png";
// import Grid2 from "../../assets/grid2.png";
// import Grid3 from "../../assets/grid3.png";
// import Grid45 from "../../assets/grid45.png";
// import Grid6 from "../../assets/grid6.png";
// import Grid7 from "../../assets/grid7.png";
// import Grid89 from "../../assets/grid89.png";
// import Grid101112 from "../../assets/grid101112.png";
// import Grid13 from "../../assets/grid13.png";
// import Grid14 from "../../assets/grid14.png";
// import Grid15 from "../../assets/grid15.png";

function BlogPage() {
  const router = useRouter();
  // const { id } = router.query;
  const DataBlog = [
    { id: 1, link: "すべて" },
    { id: 2, link: "インスピレーション" },
    { id: 3, link: "体験" },
    { id: 4, link: "レビュー" },
    { id: 5, link: "ヒント" },
    { id: 6, link: "その他" },
  ];

  return (
    <>
      <div className="flex w-full h-auto min-h-screen flex-col items-center justify-between px-20">
        <Navbar />
        <div className="w-full h-auto flex flex-col mt-[160px] space-y-8 pt-10 bg-white">
          <span className="text-5xl w-full text-center">私たちのブログ</span>
        </div>
        <span className="flex flex-row space-x-6 my-10 font-semibold">
          {DataBlog.map((item, idx) => (
            <a
              href="#"
              className={`hover:text-orange-500 ${
                item.id == 1 ? "text-orange-500" : ""
              }`}
              key={idx}
            >
              {item.link}
            </a>
          ))}
        </span>
        <div className="w-full h-full grid grid-cols-3 gap-4">
          <div
            className="bg-[url('../assets/grid1.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/1")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル{" "}
              </span>
            </span>
          </div>

          <div
            className="bg-[url('../assets/grid2.png')] h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/2")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>

          <div
            className="bg-[url('../assets/grid3.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/3")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">2023年8月23日</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>

          <div
            className="col-span-2 bg-[url('../assets/BlogImage45.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/4")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">2023年8月23日</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
          <div
            className="bg-[url('../assets/grid6.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/5")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">2023年8月23日</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
          <div
            className="bg-[url('../assets/grid2.png')] h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/6")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
          <div
            className="bg-[url('../assets/grid45.png')] h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/7")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
          <div
            className="bg-[url('../assets/grid1.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/8")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル{" "}
              </span>
            </span>
          </div>
          <div
            className="col-span-3 bg-[url('../assets/grid101112.png')] h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/9")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
          <div
            className="bg-[url('../assets/grid1.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/10")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>

          <div
            className="bg-[url('../assets/grid2.png')] h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/11")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">December 15, 2023</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>

          <div
            className="bg-[url('../assets/grid3.png')]  h-[350px] relative border-2 hover:cursor-pointer transition-all duration-300 hover:border-orange-500"
            onClick={() => router.push("/blog/12")}
          >
            <span className="bottom-0 right-0 left-0 flex flex-col absolute items-start justify-end space-y-3 p-4 bg-gradient-to-t from-black text-white">
              <span className="text-md ">2023年8月23日</span>
              <span className="text-xl text-left font-bold ">
                日本風、シンプルな生活のためのインテリアスタイル
              </span>
            </span>
          </div>
        </div>
        <span className="border-[1px] border-gray-400 p-5 text-xl my-20 rounded-full w-[120px] flex flex-col items-center justify-center h-[120px] hover:cursor-pointer hover:border-orange-500 hover:text-orange-500 font-semibold">
          もっと
        </span>

        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
