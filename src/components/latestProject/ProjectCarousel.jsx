import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/ProjectImage1.jpg";
import Image2 from "../../assets/ProjectImage2.jpg";
import Image3 from "../../assets/ProjectImage3.jpg";
import Image4 from "../../assets/ProjectImage4.jpg";

export default class ProjectCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      draggable: true,
      customPaging: (i) => (
        <div
          style={{
            position: "absolute",
            backgroundColor: i === settings.currentSlide ? "gray" : "#f97316", // Check if the dot is active and set the background color accordingly
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            right: "0",
            top: "100%",
          }}
        ></div>
      ),
    };

    const DataImage = [Image1, Image2, Image3, Image4];

    return (
      <div className=" px-10 py-12 max-w-full bg-white flex flex-col justify-center mb-20">
        <span className="flex flex-col items-center bg-white py-10">
          {/* <p className="text-orange-500 font-semibold">私たちの仕事 </p> */}
          <p className="text-6xl font-extrabold">最新のプロジェクト</p>{" "}
        </span>
        <Slider {...settings} swipe>
          {DataImage.map((item, idx) => (
            <div
              className="w-[500px] h-[500px] border-x-[12px] border-white relative hover:scale-100 box-border overflow-hidden"
              key={idx}
            >
              <Image
                src={item}
                className="w-full h-full object-cover hover:scale-150 overflow-hidden transition-all duration-100"
                width={500}
                height={500}
                alt={`Image ${idx + 1}`}
              />
              <span className="top-0 bottom-0 right-0 left-0 hover:opacity-100 flex flex-col opacity-100 absolute items-start justify-between p-16 text-white">
                <span className="text-white">2023</span>
                <span className="space-y-6">
                  <p className="text-white hover:cursor-pointer duration-150">
                    RESIDENTIAL
                  </p>
                  <p
                    className="text-4xl text-white font-semibold duration-500 hover:cursor-pointer"
                    // onClick={() => router.push("/ser/1")}
                  >
                    ダニエル ヴィラ、ルーマニア
                  </p>
                </span>
              </span>
              <span className="top-0 bottom-0 right-0 hover:cursor-pointer left-0 hover:opacity-100 flex flex-col opacity-0 bg-orange-500 transition-all duration-300 absolute items-start justify-between p-16 text-white">
                <span className="text-white">2023</span>
                <span className="space-y-6">
                  <p className="text-white hover:cursor-pointer duration-150">
                    RESIDENTIAL
                  </p>
                  <p
                    className="text-4xl text-white font-semibold duration-500 hover:cursor-pointer"
                    // onClick={() => router.push("/ser/1")}
                  >
                    ダニエル ヴィラ、ルーマニア
                  </p>
                </span>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
