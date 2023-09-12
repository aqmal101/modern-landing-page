import React from "react";

function LeaveAComment() {
  return (
    <div className="w-full flex flex-col space-y-8">
      <span className="text-3xl py-5">コメントを残す</span>
      <div className="w-full flex flex-row space-x-10 pb-5 ">
        <span className="w-[30%] relative">
          <input
            type="text"
            className="border border-gray-500 w-full h-12 px-3"
            placeholder="名前
            "
          />
        </span>
        <span className="w-[30%] relative">
          <input
            type="email"
            className="border border-gray-500 w-full h-12 px-3"
            placeholder="アドレス
            "
          />
        </span>
        <span className="w-[30%] relative">
          <input
            type="text"
            className="border border-gray-500 w-full h-12 px-3"
            placeholder="件名 (オプション)
            "
          />
        </span>
      </div>
      <div className="w-full">
        <textarea
          className="w-full border border-gray-500 h-52 p-4 resize-none"
          rows="10"
          placeholder="メッセージ"
        ></textarea>
      </div>
      <span className="">
        <button className="text-lg bg-orange-600 px-6 py-4 text-white">
          メッセージを送る
        </button>
      </span>
    </div>
  );
}

export default LeaveAComment;
