import React from "react";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import AboutTeam from "@/components/aboutTeam";
import AboutContacts from "@/components/aboutContacts";

function AboutUsTeam() {
  return (
    <>
      <main className="flex w-full h-fit min-h-screen flex-col items-center justify-between px-10">
        <Navbar />
        <AboutTeam />
        <hr className="w-full h-[2px] bg-gray-400" />
        <AboutContacts />

        <div className="w-full flex flex-col items-start space-y-8 px-14">
          <span className="text-5xl text-orange-500">
            <a href="#"> hello@liarch-studio.co</a>
          </span>
          <span className="text-2xl text-gray-700">
            Let tell us know your dream and we will help you make it become
            reality
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default AboutUsTeam;
