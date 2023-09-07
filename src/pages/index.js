import { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Cottage from "../assets/cottage3d.png";
import InstagramSection from "@/components/instagramSection";
import LatestProjects from "@/components/LatestProject";
import LatestArticle from "@/components/latestArticle";
import RunningText from "@/components/runningText";
// import HeroCarousel from "@/components/heroCarousel";
import Landscape from "../assets/landscape1.png";
import styles from "../../src/components/cubic.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const quoteRef = useRef(null); // Buat useRef untuk mengarahkan ke elemen dengan ID "quote"
  const scrollToQuote = () => {
    quoteRef.current.scrollIntoView({ scrollBehavior: "smooth" }); // Gunakan scrollIntoView dengan efek smooth
  };

  return (
    <main
      className={`flex w-full h-fit min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Navbar />
      <div className="min-h-screen w-full bg-white">
        {/* <HeroCarousel /> */}
        <Image
          src={Landscape}
          className="w-full h-screen"
          alt="cottage 3d rendered"
        />
      </div>
      <div className={`${styles["cubic"]} scroll-smooth absolute bottom-0`}>
        <a href="#quote" onClick={scrollToQuote}>
          <Icon as={ChevronDownIcon} w={60} h={60} />
        </a>
      </div>

      <div
        id="quote"
        ref={quoteRef}
        className="min-h-screen w-full flex flex-row items-center justify-around px-20 py-4"
      >
        <span className="w-5/12">
          <Image src={Cottage} alt="cottage 3d rendered" />
        </span>
        <div className="w-5/12 min-h-screen flex flex-col bg-white ">
          <span className="py-3 font-semibold text-lime-300">EST. 1991 </span>
          <span className="flex flex-col space-y-8">
            <p className="text-5xl font-extrabold">
              Simplicity Is The Ultimate Sophistictation
            </p>
            <p className="text-2xl">
              “Recognizing the need is the primary condition for design” -
              Charles Eames
            </p>
            <p className="text-justify">
              Founded by Jugenr Kloop in 1991, we're an employee-owned firm
              pursuing a democratic design process that values everyone's input.
              Today we have more than 150 people in London, Hong Kong & Sydney
              providing architecture, interior & urban design services from
              concept to completion. With a passion for quality products,
              Liarch's mission is to uncover special artisans, unique materials
              & products.
            </p>
          </span>
          <button className="bg-white w-fit py-5 border-[2px] text-lime-400 border-lime-400 px-6 rounded-md my-10 hover:bg-lime-400 hover:text-white transition-all ease-in-out duration-500">
            LEARN MORE
          </button>
        </div>
        {/* <RunningText /> */}
      </div>
      <span className="border-b-[1px] border-gray-500"></span>
      {/* instagram */}
      <LatestProjects />
      <LatestArticle />
      <InstagramSection />
      <Footer />
    </main>
  );
}
