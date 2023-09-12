import React from "react";
import Image from "next/image";
import Author from "../../assets/author.png";

function CommentSection() {
  return (
    <div className="flex flex-col w-full justify-start space-y-10 bg-white">
      <span className="text-3xl py-3">02 COMMENTS</span>
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
          <span className="flex flex-row items-center justify-between bg-white">
            <p className="text-xl">Robert Stevenson</p>
            <p className="text-sm text-gray-700">9 HOURS AGO</p>
          </span>
          <span className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <button className="border-[1px] border-gray-400 hover:border-orange-500 hover:text-orange-500 text-xs p-1 w-[10%]">
            REPLY
          </button>
          <div className="w-full h-fit bg-yellow flex flex-row space-x-3">
            <span className="w-[55px] h-[55px]">
              <Image
                src={Author}
                width={55}
                height={55}
                className="w-full h-full rounded-full "
                alt="Author this Blog"
              />
            </span>
            <div className="w-[90%] flex flex-col justify-start space-y-4">
              <span className="flex flex-row items-center justify-between bg-white">
                <p className="text-xl">Leona Porter</p>
                <p className="text-sm text-gray-700">3 HOURS AGO</p>
              </span>
              <span className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <button className="border-[1px] border-gray-400 hover:border-orange-500 hover:text-orange-500 text-xs p-1 w-[10%]">
                REPLY
              </button>
            </div>
          </div>
        </div>
      </div>
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
          <span className="flex flex-row items-center justify-between bg-white">
            <p className="text-xl">Janie Joubile</p>
            <p className="text-sm text-gray-700">JUNE 29, 2023</p>
          </span>
          <span className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <button className="border-[1px] border-gray-400 hover:border-orange-500 hover:text-orange-500 text-xs p-1 w-[10%]">
            REPLY
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
