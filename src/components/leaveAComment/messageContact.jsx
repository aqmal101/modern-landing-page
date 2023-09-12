import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:after": {
    borderBottomColor: "black", // Warna border bottom saat aktif/fokus
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "gray", // Warna teks label saat aktif/fokus
  },
}));

function MessageContact() {
  return (
    <div className="w-full flex flex-col items-start space-y-10 py-20">
      <span className="w-full flex flex-col items-start justify-center space-y-5 my-8">
        <p className="text-5xl">ドロップアスライン</p>
        <p className="text-xl text-gray-700">
          離れて聞いてください!サポーターは24時間以内に返信します
        </p>
      </span>
      <div className="w-full flex flex-row space-x-10 items-start justify-between">
        <span className="w-[30%]">
          <CustomTextField
            id="standard-basic"
            label="氏名"
            variant="standard"
            fullWidth
          />
        </span>
        <span className="w-[30%]">
          <CustomTextField
            id="standard-basic"
            label="メールアドレス"
            variant="standard"
            fullWidth
          />
        </span>
        <span className="w-[30%]">
          <CustomTextField
            id="standard-basic"
            label="件名（オプション）"
            variant="standard"
            fullWidth
          />
        </span>
      </div>
      <span className="w-full mt-8">
        <CustomTextField
          id="standard-basic"
          label="ここにメッセージを入力してください"
          variant="standard"
          fullWidth
          multiline
          inputProps={{
            style: {
              height: "200px",
              width: "100%",
            },
          }}
        />
      </span>
      <span className="">
        <button className="text-lg bg-orange-600 border hover:border-orange-500 hover:bg-white hover:text-orange-600  px-8 py-6 text-white">
          メッセージを送信
        </button>
      </span>
    </div>
  );
}

export default MessageContact;
