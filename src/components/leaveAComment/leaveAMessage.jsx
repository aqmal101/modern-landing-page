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

// const StarWrapper = styled("div")({
//   color: (theme) => theme.palette.orange[500], // Warna bintang orange-500
//   position: "absolute",
//   top: "-5px",
//   left: "-10px",
// });

function LeaveAComment() {
  return (
    <div className="w-full flex flex-col items-start space-y-10 py-28">
      <div className="w-full h-fit flex flex-col space-y-4">
        <span className="text-5xl w-[45%] text-justfy leading-medium">
          はじめる準備ができました
        </span>
        <span className="text-lg text-gray-600 w-[65%]">
          質問してください！私たちのサポーターは24時間以内にお答えいたします
        </span>
      </div>
      <div className="w-full flex flex-row space-x-10 items-start justify-between">
        <span className="w-[30%]">
          <CustomTextField
            id="standard-basic"
            label="フルネーム
            "
            variant="standard"
            fullWidth
          />
        </span>
        <span className="w-[30%]">
          <CustomTextField
            id="standard-basic"
            label={
              <div>
                {/* <StarWrapper>*</StarWrapper> */}
                メールアドレス
              </div>
            }
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
          label="メッセージをこちらに入力"
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

export default LeaveAComment;
