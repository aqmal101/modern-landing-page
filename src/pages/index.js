import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Cottage from "../assets/HomeImage2.jpg";
import HeroCarousel from "@/components/heroCarousel";
import CubicScroll from "@/components/cubicScroll";
import InstagramSection from "@/components/instagramSection";
// import LatestProjects from "@/components/LatestProject";
import ProjectCarousel from "@/components/latestProject/ProjectCarousel";
import LatestArticle from "@/components/latestArticle";
import RunningText from "@/components/runningText";
// import { DisplayCircle } from "@/components/runningText";
import styles from "@/components/patternBg/pattern.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex w-full h-fit min-h-screen flex-col items-center justify-between  ${inter.className}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar />
      <HeroCarousel />
      <CubicScroll />
      <div
        id="quote"
        className="min-h-screen h-auto w-full flex flex-row items-start justify-around px-20 py-20 my-20"
      >
        <div className="h-[500px] w-5/12 bg-white relative">
          <div
            className={`top-0 left-0 bg-white h-[90%] w-[90%] ${styles["pattern-bg"]}`}
          ></div>
          <span className="absolute bottom-0 right-0 h-[90%] w-[90%] hover:scale-100 overflow-hidden transition-all duration-300">
            <Image
              src={Cottage}
              alt="cottage 3d rendered"
              className="relative object-cover w-full h-full hover:scale-110 transition-all duration-300"
            />
          </span>
          {/* <RunningText /> */}
        </div>

        <div className="w-5/12 min-h-screen flex flex-col space-y-14">
          <span className="font-semibold text-orange-500">EST. 1991 </span>
          <span className="flex flex-col space-y-10">
            <p className="text-5xl font-extrabold">
              シンプリシティは究極の洗練です
            </p>

            <p className="text-2xl">
              「ニーズを認識することは、デザインの主要な条件です」 -
              チャールズ・イームズ
            </p>
            <span className="space-y-5">
              <p>弊社、株式会社アーバン</p>
              <p>
                建築・土木工事に関するご相談やコンサルティング業務を提供しており、
              </p>
              <p> 産業廃棄物の収集と運搬も行っています。</p>
              <p> また、販売、交換、賃貸、管理、および所有権の仲介も行い、</p>
              <p> さらにレストランの経営も受け付けております。</p>
            </span>
          </span>
          <button
            className="bg-white w-fit py-5 border-[2px] text-orange-500 border-orange-500 px-6 rounded-md my-10 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500"
            onClick={() => router.push("/about-us#company")}
          >
            詳細を見る
          </button>
        </div>
        {/* <RunningText /> */}
      </div>
      <span className="border-b-[1px] border-gray-500"></span>
      {/* <div className="flex flex-row w-full justify-between py-24 px-10 bg-white">
        <div className="flex flex-row  max-w-[300px] items-center space-x-4">
          <span className="text-6xl">100%</span>
          <span>SATISFITATION CLIENTS</span>
        </div>
        <div className="flex flex-row  max-w-[300px] items-center space-x-4">
          <span className="text-6xl">250</span>
          <span>EMPLOYEES ON WORLDWIDE</span>
        </div>
        <div className="flex flex-row  max-w-[330px] items-center space-x-4">
          <span className="text-6xl">3,875</span>
          <span>PROJECTS COMPLETED ON 60 COUNTRIES</span>
        </div>
      </div> */}
      <ProjectCarousel />
      {/* <LatestProjects /> */}
      <LatestArticle />
      <span className="border-b-[2px] border-gray-500 py-9"></span>
      <InstagramSection />
      <Footer />
    </main>
  );
}
