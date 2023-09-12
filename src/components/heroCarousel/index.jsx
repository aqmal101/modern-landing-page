import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@chakra-ui/react";
import { VscPlay } from "react-icons/vsc";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// import Image1 from "../../assets/BannerHero1.jpg";
import Image2 from "../../assets/BannerHero2.jpg";
import Image3 from "../../assets/BannerHero3.jpg";
import Image4 from "../../assets/BannerHero4.jpg";

export default class HeroCarousel extends Component {
  // export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: "",
      prevArrow: "",
      nextArrow: <NextArrow />, // Custom Next button
      prevArrow: <PrevArrow />, // Custom Prev button
      customPaging: (i) => (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#f97316", // Background color for each dot
            width: "15px", // Width of each dot
            height: "15px", // Height of each dot
            borderRadius: "50%", // Make dots round
            cursor: "pointer",
            left: "400px",
            bottom: "200px",
          }}
        ></div>
      ),
    };

    let sliderRef = React.createRef();
    const DataImage = [Image3, Image2, Image4];

    function PrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={className}
          onClick={() => sliderRef?.current?.slickPrev()}
          style={{
            zIndex: 1000,
            position: "absolute",
            top: "50%",
            left: "20px",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "red", // Set background to transparent
            border: "1px solid white", // Add 2px solid white border
            transition: "background-color 0.1s", // Add transition for hover effect
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.backgroundColor = "#f97316"),
              (e.currentTarget.style.borderColor = "#f97316");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.backgroundColor = "transparent"),
              (e.currentTarget.style.borderColor = "#fff");
          }}
        >
          <Icon as={ChevronLeftIcon} w={60} h={60} color="white" />
        </div>
      );
    }

    function NextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={className}
          onClick={() => sliderRef?.current?.slickNext()}
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "1px solid white", // Add 2px solid white border
            transition: "background-color 0.1s", // Add transition for hover effect
            zIndex: 999,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.backgroundColor = "#f97316"),
              (e.currentTarget.style.borderColor = "#f97316");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.backgroundColor = "transparent"),
              (e.currentTarget.style.borderColor = "#ffffff");
            // Reset background color on mouse leave
          }}
        >
          <Icon as={ChevronRightIcon} w={60} h={60} color="white" />
        </div>
      );
    }

    return (
      <div className="max-h-screen h-screen max-w-full bg-white justify-center">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {DataImage.map((item, idx) => (
            <div className="w-full h-screen relative" key={idx}>
              <Image
                src={item}
                className="w-full h-full object-cover"
                alt={`Image ${idx + 1}`}
              />
              <NextArrow></NextArrow>
              <PrevArrow></PrevArrow>
              <div className="bg-gray-900/30 absolute top-0 bottom-0 left-0 right-0 py-[130px] px-20 space-y-12 text-white ">
                <div className="flex flex-row justify-between">
                  <div className="text-6xl font-bold w-[36%] bg-transparent">
                    空間を創り、夢を実現させます
                  </div>
                  {/* <div className="flex flex-row w-[50%] justify-around">
                    <div className="flex flex-col border-t-2 border-orange-500 pt-10 space-y-8">
                      <span className="text-xl">経験年数</span>
                      <span className="text-6xl">20</span>
                    </div>
                    <div className="flex flex-col border-t-2 border-orange-500 pt-10 space-y-8">
                      <span className="text-xl">受賞実績</span>
                      <span className="text-6xl">135</span>
                    </div>
                  </div> */}
                </div>
                <div className="text-xl px-10">
                  私たちは日本から来ました。私たちは空間に情熱を傾け、持続可能な価値をそこで創り出しています。
                </div>
                <span className="flex flex-row w-[25%] space-x-3 items-center">
                  <Link href="/about-us#company">
                    <div
                      className="bg-transparent border rounded-full w-[90px] h-[90px] flex flex-col justify-center items-center border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-orange-500 pl-1 transition-all duration-200"
                      // href="/about-us#company"
                      // onClick={() => router.push("/about-us#company")}
                    >
                      <Icon as={VscPlay} w={40} h={40} />
                    </div>
                  </Link>
                  <span className="w-[52%] justify-left">
                    私たちの会社概要を見る
                  </span>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
