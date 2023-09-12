import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LatestPostImage from "../../assets/LatestPostImage.jpg";
import { Icon } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";

function LatestArticle() {
  const router = useRouter();

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 space-x-8">
        <span className="w-full flex flex-col justify-center items-center pb-12">
          {/* <p className="text-orange-500 text-lg font-semibold">
            私たちのジャーナル
          </p> */}
          <p className="text-6xl font-extrabold">最新の記事</p>
        </span>
        <div className="flex flex-row justify-between ">
          <div className="relative w-1/2">
            <Image
              src={LatestPostImage}
              alt="Terrace of Cottage"
              className="w-full h-full object-cover"
            />
            <span className="top-0 bottom-0 right-0 left-0 hover:opacity-100 flex flex-col opacity-100 absolute items-start justify-between p-16 text-white">
              <span className="text-white">特選記事</span>
              <span className="space-y-6">
                <p>
                  <span className="hover:text-orange-500 hover:cursor-pointer duration-150">
                    知識
                  </span>
                  <span className="text-gray-400 px-1">|</span> 2023年8月25日
                </p>
                <p
                  className="text-4xl hover:text-orange-500 font-semibold duration-500 hover:cursor-pointer"
                  onClick={() => router.push("/blog/1")}
                >
                  3Ds Maxで日中のV-Ray 2.0を使用するためのヒント
                </p>
              </span>
            </span>
          </div>
          <div className="w-5/12 flex flex-col justify-start space-y-8 px-6">
            <span className="space-y-3">
              <p className="text-sm text-gray-400">
                ニュース<span className="text-gray-400 px-1">|</span>{" "}
                2023年8月25日
              </p>
              <p className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer duration-150">
                宇宙についてほとんどの人が知らない10のこと
              </p>
            </span>
            <hr className="h-[1px] bg-gray-500" />
            <span className="space-y-3">
              <p className="text-sm text-gray-400">
                インスピレーション
                <span className="text-gray-400 px-1">|</span> 2020年7月16日
              </p>
              <p className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer duration-150">
                あなたの家をどうやって改善するか
              </p>
            </span>
            <hr className="h-[1px] bg-gray-500" />
            <span className="space-y-3">
              <p className="text-sm text-gray-400">
                知識<span className="text-gray-400 px-1">|</span> 2020年7月8日
              </p>
              <p className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer duration-150">
                素材のためのCGIを向上させる
              </p>
            </span>
            <hr className="h-[1px] bg-gray-500" />
            <span className="space-y-3">
              <p className="text-sm text-gray-400">
                その他
                <span className="text-gray-400 px-1">|</span> 2020年7月2日
              </p>
              <p className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer duration-150">
                AIA Global 2020 オープニング
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestArticle;
