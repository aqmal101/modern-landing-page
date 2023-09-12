import React from "react";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import AboutCompany from "@/components/aboutCompany";
import AboutTeam from "@/components/aboutTeam";
import AboutGallery from "@/components/aboutGallery";
import AboutContacts from "@/components/aboutContacts";

function AboutUsTeam() {
  return (
    <>
      <main className="flex w-full h-fit min-h-screen flex-col items-center justify-between px-10">
        <Navbar />
        <AboutCompany />
        <hr className="w-full h-[2px] bg-gray-500" />
        <AboutTeam />
        <hr className="w-full h-[2px] bg-gray-500" />
        <AboutGallery />
        <hr className="w-full h-[2px] bg-gray-400" />
        <AboutContacts />

        <Footer />
      </main>
    </>
  );
}

export default AboutUsTeam;
