"use client"
import AutoScrollImageGallery from "app/components/autoScrollGallery";
import HydrogenGpBanner from "app/components/hydrogenGpBanner";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import ScrollReveal from "../components/ScrollReveal";
import GarantBanner from "./components/banner";
import { useState } from "react";
import VisibilityClass from "app/components/VisibilityClass";

const bannerStyle = {
    backgroundImage: 'url("/assets/images/primeBG.svg")',
};

export default function DocAtlas() {

    const images = [
        "/assets/images/team1.png",
        "/assets/images/team2.png",
        "/assets/images/team4.png",
        "/assets/images/team5.png",
        "/assets/images/scania.webp",
        "/assets/images/johnD.webp",
        "/assets/images/valtra.png",
        "/assets/images/hitachi.png",
        "/assets/images/team7.webp",
        "/assets/images/team8.png",
        "/assets/images/team9.png",
        "/assets/images/team10.png",
    ];

    const data = [
        {
            id: 'DocAtlas',
            title: 'Household Chemicals',
            icon: '/assets/images/hc.png',
            activeIcon: '/assets/images/hcActive.png',
            link: 'https://salekorea.wixsite.com/garant/page4',
        },
        {
            id: 'HydrogenGp',
            title: 'Special Equipment Video',
            icon: '/assets/images/video.png',
            activeIcon: '/assets/images/videoActive.png',
            link: 'https://salekorea.wixsite.com/garant/untitled',
        },
        {
            id: 'Prime',
            title: 'Cosmetics',
            icon: '/assets/images/cosmetic.png',
            activeIcon: '/assets/images/cosmeticActive.png',
            link: 'https://salekorea.wixsite.com/garant/hwajan',
        },
        {
            id: 'Apollo',
            title: 'Special Equipment',
            icon: '/assets/images/jcb.png',
            activeIcon: '/assets/images/jcbActive.png',
            link: 'https://salekorea.wixsite.com/garant/st',
        },
        {
            id: 'DocX',
            title: 'Pipes Fitting etc.',
            icon: '/assets/images/fittings.png',
            activeIcon: '/assets/images/fittingsActive.png',
            link: 'https://salekorea.wixsite.com/garant/blank-2',
        }
    ]

    const [activeProduct, setActiveProduct] = useState<'DocAtlas' | 'HydrogenGp' | 'DocX' | 'Prime' | 'Apollo'>('DocAtlas');
    const [previousProduct, setPreviousProduct] = useState<'DocAtlas' | 'HydrogenGp' | 'DocX' | 'Prime' | 'Apollo' | null>(null);
    const [animationDirection, setAnimationDirection] = useState<'slide-left' | 'slide-right'>('slide-right');
    const handleProductChange = (product: any) => {

        if (product !== activeProduct) {
            // Determine the animation direction based on tab index comparison
            const newIndex = data.findIndex((item) => item.id === product);
            const oldIndex = data.findIndex((item) => item.id === activeProduct);
            const direction = newIndex > oldIndex ? 'slide-right' : 'slide-left';

            setPreviousProduct(activeProduct); // Set previous active product
            setActiveProduct(product);         // Set new active product
            setAnimationDirection(direction);  // Set animation direction
        }
    };

    return (
        <div className="flex flex-col relative min-h-screen text-content">

            <section className="w-full bg-cover bg-center">
                <div className="relative flex w-11/12 sm:w-3/4 mx-auto">
                    <Header />
                </div>
                <GarantBanner />
            </section>

            <section className="overflow-x-hidden  bg-customLightBlue">
                <div className="flex flex-col gap-8 place-self-center items-center mt-16 md:mt-28">

                    <div className="flex flex-col sm:flex-row items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 items-center">
                            <ScrollReveal delay={700} className="text-5xl"><span className="text-2xl md:text-5xl font-semibold self-center">About Us</span> </ScrollReveal>

                            <ScrollReveal delay={990} className="text-base mt-4">
                                <span>Our company was founded in South Korea on May 3, 2005 - as a private company "Garant". On April 19, 2013, it was transformed into a joint-stock company "Garant Co., Ltd." During this time, we have accumulated a wealth of experience in cooperation with suppliers who have a long history - often this is the experience of more than one generation.</span>
                            </ScrollReveal>
                            <ScrollReveal delay={900} className="text-base"><span>Our employees have become the best specialists in their field in the Korean market.   Professionalism in each of our areas of activity guarantees the reliability of cooperation with us.</span></ScrollReveal>
                            <ScrollReveal delay={900} className="text-base"><span>The main activity of the company "Garant Co., Ltd" is the export of special equipment, machinery and finished products of the best manufacturers of South Korea in various fields.  Close partnerships with the best manufacturers, well-established   in the international market, allow us to provide our clients with the best offers and quality service. </span></ScrollReveal>
                            <ScrollReveal delay={900} className="text-base"><span>The best Korean manufacturers, being our partners, guarantee the possibility of any deliveries, quality of transportation and a long-term guarantee. We will be able to satisfy all customer requests in time,  regardless of the urgency and volume of the necessary equipment.  High intellectual and scientific potential, a stable customer base, a constantly growing   need for the services we provide, knowledge of the Korean specifics of doing business - all this allows us  to constantly develop, finding new opportunities for growth. </span></ScrollReveal>
                            <div className="flex mt-8">
                                <ScrollReveal delay={900}><a href="https://salekorea.wixsite.com/garant" target="_blank" type="button" className="text-lg font-semibold px-4 py-2 rounded-lg bg-customGreen text-white hover:text-gray-700">Find More</a></ScrollReveal>
                            </div>

                        </div>

                    </div>


                    <div id="ourTeam" className="flex flex-col w-full bg-[#e2f3d7] py-20 mt-8 md:mt-20 ">
                        <div className="flex flex-col gap-4 text-center w-11/12 sm:w-3/4 mx-auto">
                            <ScrollReveal delay={200} className="text-lg sm:text-4xl font-bold text-content">Our Team</ScrollReveal>
                            <ScrollReveal delay={300} className="text-sm sm:text-2xl flex w-11/12 md:w-3/4 place-self-center font-bold text-secondaryContent">The project is led by an experienced team with a track record of delivering large-scale infrastructure projects in collaboration with Hyundai, SK Corp, and Doosan Infracore.</ScrollReveal>
                        </div>
                        <div className="flex mt-12">
                            <AutoScrollImageGallery images={images} speed={10} />
                        </div>

                    </div>


                    <div className="flex md:hidden flex-col gap-8 pb-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}>
                                <span className="text-2xl md:text-5xl font-semibold mt-8">Offers</span>
                            </ScrollReveal>
                            <ul className="mt-2 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                                <ScrollReveal delay={700}>
                                    <li>
                                        <a href="https://salekorea.wixsite.com/garant/page4" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer underline underline-offset-4">Household Chemicals</a>
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <a href="https://salekorea.wixsite.com/garant/untitled" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer underline underline-offset-4">Special Equipment Video</a>
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <a href="https://salekorea.wixsite.com/garant/hwajan" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer underline underline-offset-4">Cosmetics</a>
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <a href="https://salekorea.wixsite.com/garant/st" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer underline underline-offset-4">Special Equipment</a>
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <a href="https://salekorea.wixsite.com/garant/blank-2" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer underline underline-offset-4">Pipes Fitting etc.</a>
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>

                        {/* <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 w-full md:w-1/2">
                            <img className="rounded-lg" src="/assets/images/hyd1.png" />
                        </div> */}
                    </div>

                    <div className="hidden sm:flex flex-col items-center py-20 ">
                        <ScrollReveal delay={700}>
                            <span className="text-2xl md:text-5xl font-semibold mt-8">Offers</span>
                        </ScrollReveal>
                        <div className="flex flex-wrap max-w-[1366px] gap-4 sm:px-8 justify-center mt-20 text-content">
                            {data.map((product) => (
                                <VisibilityClass visibleClassName="visible-class">
                                    <div
                                        key={product.id}
                                        onClick={() => handleProductChange(product.id as any)}
                                        className={`flex flex-col min-h-72 text-center w-60 items-center rounded-2xl px-6 pt-12 text-content cursor-pointer transition-all duration-500 ease-in ${product.id === activeProduct ? "bg-customBlue text-white" : ""} pb-8 `}
                                    >
                                        <div className={`flex ${product.id === activeProduct ? "bg-[#0e0e0f40]" : "bg-[#0e0e0f0d]"} rounded-full `}>
                                            <img src={product.id === activeProduct ? product.activeIcon : product.icon} alt="DocAtlas" className='w-12 h-12 p-2' />
                                        </div>
                                        <div className="flex flex-col justify-between h-full mt-8 gap-2">
                                            <ScrollReveal delay={200}><span className="text-lg font-bold">{product.title}</span></ScrollReveal>
                                            <ScrollReveal delay={300}><a href={product.link} target="_blank" rel="noopener noreferrer" className={`text-xs font-bold cursor-pointer ${product.id === activeProduct ? "block" : "hidden"} text-black hover:text-customGreen mt-8`}>Click to know more..</a></ScrollReveal>
                                        </div>
                                    </div>
                                </VisibilityClass>

                            ))}
                        </div>
                    </div>





                </div>
            </section>





            <Footer />
        </div>
    );
}
