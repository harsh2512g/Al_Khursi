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

      <section className="flex flex-col items-center bg-customLightBlue">

        <Introduction />

        <div id="ourTeam" className="flex flex-col w-full bg-[#e2f3d7] py-20 mt-20 items-center">

          <Expertise />
        </div>

        {/* <div id="ourMisssion" className="flex">
          <div className="flex sm:p-4 xl:p-16">
            <div className="flex flex-col w-full gap-12 py-8">
              <div className="flex flex-col gap-6 max-md:w-11/12 mx-auto text-center items-center">
                <span className="text-3xl md:text-5xl font-semibold">Our Mission at Zaman Holding</span>
                <span className="text-xl text-customGreen font-semibold text-center">Leading Innovation. Driving Global Impact. Shaping the Future.</span>
              </div>
              <div className="flex flex-col-reverse md:flex-row max-md:gap-4">
                <div className="flex flex-col md:w-1/2 px-4 lg:px-20 items-center gap-4">
                  <div>
                    <span><span className="font-bold text-customGreen">At Zaman Holding</span> , we are committed to redefining industries and creating transformative solutions that deliver sustainable growth. Our mission is to drive the next generation of innovation, from <span className="font-bold text-customGreen">renewable energy</span> and <span className="font-bold text-customGreen">advanced healthcare technologies to digital business solutions and global e-commerce.</span>  </span>
                  </div>
                  <ScrollReveal delay={700}>
                    <li className="text-content">
                      <strong className="font-bold text-customGreen">Pioneering Innovation:</strong> We lead with cutting-edge technologies, providing scalable solutions across industries that drive economic and social progress.
                    </li>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <li className="text-content">
                      <strong className="font-bold text-customGreen">Global Reach and Strategic Growth:</strong> Our operations span continents, forging powerful global partnerships and contributing to sustainable economic development worldwide.
                    </li>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <li className="text-content">
                      <strong className="font-bold text-customGreen">Empowering Communities:</strong> We create tangible value by empowering local businesses, driving job creation, and improving the quality of life through transformative projects.
                    </li>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <li className="text-content">
                      <strong className="font-bold text-customGreen">Uncompromising Integrity and Excellence:</strong> Rooted in ethical business practices, we uphold the highest standards of quality, transparency, and accountability in all our ventures.
                    </li>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <li className="text-content">
                      <strong className="font-bold text-customGreen">Shaping Tomorrow, Today:</strong> At Zaman Holding, we don’t just keep pace with the future—we shape it. Through visionary leadership and sustainable innovation, we are committed to building a stronger, smarter, and more connected world.
                    </li>
                  </ScrollReveal>

                </div>
                <div className="flex w-11/12 self-center md:w-1/2 place-content-center">
                  <img className="rounded-lg self-center rightDiv" src="/assets/images/ourMission.jpg" />
                </div>
              </div>

            </div>
          </div>
        </div> */}




      </section>
      {/* <Footer /> */}
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
