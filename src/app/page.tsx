"use client"
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import Introduction from "./components/Home/Introduction";
import HomeBanner from "./components/Home/banner";
import ScrollReveal from "./components/ScrollReveal";
import AutoScrollImageGallery from "./components/autoScrollGallery";
import CommonModal from "./components/commonModal";
import ContactUsModal from "./components/contactUsModal";
import Expertise from "./components/Home/Expertise";
import Industries from "./components/Home/industries";
import Partnership from "./components/Home/partnership";


export default function Home() {
  const [contactUsModal, setContactUsModal] = useState(false);

  const images = [
    "/assets/images/team1.png",
    "/assets/images/team2.png",
    "/assets/images/team4.png",
    "/assets/images/team5.png",
    "/assets/images/team6.png",
    "/assets/images/team7.webp",
    "/assets/images/team8.png",
    "/assets/images/team9.png",
    "/assets/images/team10.png",
  ];

  return (
    <div className="flex flex-col relative min-h-screen text-content">

      <section className="w-full bg-cover bg-center">
        <div className="relative flex w-11/12 sm:w-3/4 mx-auto">
          <Header />
        </div>
        <HomeBanner />
      </section>

      <section className="flex flex-col items-center ">
        <Introduction />

        <div id="ourExpertise" className="flex flex-col w-full bg-[#CADCFC] py-20 mt-20 items-center">
          <Expertise />
        </div>
        <div id="industries" className="flex flex-col w-full  py-20 items-center">
          <Industries />
        </div>
        <div id="partnership" className="flex flex-col w-full bg-[#CADCFC] py-20 mt-20 items-center">
          <Partnership />
        </div>

      </section>
      <Footer />
      {contactUsModal && <div>
        <CommonModal
          visible={contactUsModal}
          onCancel={() => setContactUsModal(false)}
          width='400px'
        >
          <ContactUsModal onCancel={() => setContactUsModal(false)} />
        </CommonModal>

      </div>
      }
    </div>
  );
}
