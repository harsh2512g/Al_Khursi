import ScrollReveal from "../ScrollReveal";
import { Cpu, Gem, Briefcase, Factory } from "lucide-react";
const Expertise = () => {
    return (
        <div className="flex flex-col gap-12 max-w-[1366px] place-items-center ">
            <div className="flex mb-[18px] sm:mb-6">
                <ScrollReveal delay={500} className="text-sm sm:text-4xl font-bold">Our Expertise </ScrollReveal>
            </div>
            <div className="flex flex-col sm:flex-row items-center max-sm:gap-8">
                <div className="flex sm:w-1/2 gap-8 justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime1.png" alt="Ultimate Medical Knowledge Hub" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4 sm:ml-20">
                    <div className="flex w-fit rounded-xl p-1 bg-[#CADCFC]">
                        <Cpu size={44} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">AI Infrastructure & Energy-Powered Data Centers</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}> Al Khursi LLP is at the forefront of AI-driven infrastructure, developing high-performance, energy-efficient data centers designed for cloud computing, financial services, and AI applications.</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Cutting-Edge Design: </strong>
                                        Built for scalability, security, and high-performance computing (HPC).
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Sustainably Powered: </strong>
                                        Our data centers operate on proprietary energy solutions, reducing carbon footprints.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">AI-Optimized: </strong>
                                        Providing computational power for AI research, fintech, and enterprise solutions.
                                    </li>
                                </ScrollReveal>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
                <div className="flex sm:w-1/2 gap-8 justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime2.png" alt="Prime Clinical Excellence" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4">
                    <div className="flex w-fit rounded-xl p-1 bg-[#CADCFC]">
                        <Gem size={44} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Global Trading: Gold, Agriculture & Energy Markets</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}>We leverage deep market intelligence, regulatory expertise, and strategic partnerships to facilitate profitable, risk-managed trade.</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}>Al Khursi LLP has a strong global presence in commodities trading, offering seamless transactions in:</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Gold & Precious Metals:</strong> Secure sourcing, logistics, and high-value transactions.
                                    </li>
                                </ScrollReveal>

                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Agricultural Commodities:</strong>  Reliable supply chains for grains, pulses, and high-demand crops.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Oil & Gas Markets:</strong>  Strategic trade of crude oil, refined products, and LNG.
                                    </li>
                                </ScrollReveal>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center max-sm:gap-8">
                <div className="flex sm:w-1/2 gap-8 rounded-2xl justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime3.png" alt="Prime Financials" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4 sm:ml-20">
                    <div className="flex w-fit rounded-xl p-1 bg-[#CADCFC]">
                        <Briefcase size={44} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Investment & Corporate Advisory</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}>We work with institutional investors, multinational corporations, and government entities to drive business success and economic growth.</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}>With a strong track record in investment structuring, corporate finance, and cross-border deal execution, Al Khursi LLP provides:</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Market Entry & Expansion Strategies:</strong>  Helping businesses scale in high-growth regions like the UAE.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Fund Structuring & Capital Placement:</strong> Optimizing investments for maximum returns and risk mitigation.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Corporate Deal Structuring:</strong> Facilitating mergers, acquisitions, and strategic partnerships.
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Expertise;
