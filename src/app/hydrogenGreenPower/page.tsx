"use client"
import AutoScrollImageGallery from "app/components/autoScrollGallery";
import HydrogenGpBanner from "app/components/hydrogenGpBanner";
import Footer from "../components/Footer";
import Header from "../components/Headers";
import ScrollReveal from "../components/ScrollReveal";

const bannerStyle = {
    backgroundImage: 'url("/assets/images/primeBG.svg")',
};

export default function DocAtlas() {

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
                <HydrogenGpBanner />
            </section>

            <section className="overflow-x-hidden  bg-customLightBlue">
                <div className="flex flex-col gap-8 place-content-center items-center mt-16 md:mt-28">

                    <div className="flex flex-col sm:flex-row mx-auto items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}><span className="text-2xl md:text-5xl font-semibold">Challenges</span> </ScrollReveal>
                            <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Lengthy construction time for power plants:</strong> Building traditional green power plants typically takes around 4 years, delaying the deployment of critical energy solutions.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Low performance of traditional green technologies:</strong> Most green technologies cannot reliably produce 100 MW of stable power, limiting their applicability for large-scale projects.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Difficulty of implementation in hot climates:</strong> High temperatures complicate the installation and operation of green technologies, reducing their efficiency.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Global energy deficit:</strong>
                                        <ul className="ml-4 list-disc">
                                            <li>770 million people worldwide still lack access to electricity (IEA).</li>
                                            <li>Global energy demand grows by 2.6% annually.</li>
                                            <li>Over 40% of global electricity generation still relies on coal, necessitating an urgent transition to eco-friendly alternatives.</li>
                                        </ul>
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>

                        <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 justify-center w-full md:w-1/2">
                            <img className="rounded-lg h-[420px]" src="/assets/images/hyd1.jpg" />
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row-reverse mx-auto items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}>
                                <span className="text-2xl md:text-5xl font-semibold mt-8">Solution</span>
                            </ScrollReveal>
                            <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Faster construction:</strong> Utilizing new technology, a 100 MW power plant can be built in just one year, four times faster than traditional methods.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">High efficiency:</strong> These unique installations can generate up to 500 MW entirely from green energy sources while minimizing seawater usage.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Ease of operation in hot climates:</strong> Specialized equipment produces cold air, making the technology ideal for regions with extreme temperatures.
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>

                        <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 w-full md:w-1/2">
                            <img className="rounded-lg" src="/assets/images/hyd2.jpg" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row mx-auto items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}><span className="text-2xl md:text-5xl font-semibold">Eco-Friendly Technology</span> </ScrollReveal>
                            <ScrollReveal delay={700}><span className="text-xl md:text-3xl font-semibold">Hydrogen Gas Turbine</span> </ScrollReveal>
                            <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">The most clean and safe energy generation technology:</strong> Uses only seawater to produce hydrogen.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Produces no emissions, operates silently, and ensures reliable energy supply:</strong> Reduces the carbon footprint while efficiently utilizing natural resources like seawater with minimal environmental impact.
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>

                        <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 w-full md:w-1/2">
                            <img className="rounded-lg" src="/assets/images/hyd3.png" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row-reverse mx-auto items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}><span className="text-2xl md:text-5xl font-semibold">Short Implementation Time</span> </ScrollReveal>
                            <ScrollReveal delay={700}><span className="text-xs md:text-base font-bold">The complete cycle — from planning to commissioning — takes only 12 months, accelerating the resolution of global energy challenges.</span> </ScrollReveal>
                            
                        </div>
                        <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 w-full md:w-1/2">
                            <img className="rounded-lg" src="/assets/images/hyd5.jpg" />
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


                    <div className="flex flex-col sm:flex-row-reverse mx-auto items-center gap-8 w-4/5 sm:w-11/12 xl:w-3/4">
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <ScrollReveal delay={700}>
                                <span className="text-2xl md:text-5xl font-semibold mt-8">Development of Ecosystems for New Cities</span>
                            </ScrollReveal>
                            <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Hydrogen turbines accelerate urban development:</strong> Simplify energy connectivity.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Only 300 tons of seawater per ton per year are required:</strong> Meets the needs of a large settlement, generating 5 MW per hour.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={700}>
                                    <li>
                                        <strong className="font-bold text-content">Simplifies infrastructure expansion:</strong> Achieves this with minimal transportation and maintenance costs.
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>

                        <div className="flex mt-8 sm:mt-24 px-2 md:px-8 sm:px-0 w-full md:w-1/2">
                            <img className="rounded-lg" src="/assets/images/hyd1.png" />
                        </div>
                    </div>





                </div>
            </section>





            <Footer />
        </div>
    );
}
