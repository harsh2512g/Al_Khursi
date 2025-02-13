import ScrollReveal from "../ScrollReveal";
import { Factory, Hospital, Wheat, BrainCircuit } from "lucide-react";

const Industries = () => {
    return (
        <div className="flex flex-col gap-12 max-w-[1366px] place-items-center ">
            <div className="flex mb-[18px] sm:mb-6">
                <ScrollReveal delay={500} className="text-sm sm:text-4xl font-bold">Industries We Operate In </ScrollReveal>
            </div>
            <div className="flex flex-col sm:flex-row items-center max-sm:gap-8">
                <div className="flex sm:w-1/2 gap-8 justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime1.png" alt="Ultimate Medical Knowledge Hub" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4 sm:ml-20">
                    <div className="flex w-fit rounded-xl p-2 bg-[#CADCFC]">
                        <Factory size={24} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Oil & Gas</ScrollReveal>
                        </div>
                        <div className="text-xs sm:text-lg leading-6 font-normal text-secondaryContent">
                            <ScrollReveal delay={200}> Al Khursi LLP plays a key role in the global energy sector, with expertise in:</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Oil & Gas Trading: </strong>
                                        Supplying crude oil, refined products, and LNG.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Investment in Energy Infrastructure: </strong>
                                        Backing projects that drive energy efficiency and security.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Advanced Energy Solutions: </strong>
                                        Supporting AI-driven innovations in energy management.
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
                    <div className="flex w-fit rounded-xl p-2 bg-[#CADCFC]">
                        <Hospital size={24} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Healthcare & Medical Technologies</ScrollReveal>
                        </div>

                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Investment in Healthcare Infrastructure:</strong>  Supporting hospitals, digital health platforms, and AI-driven medical research.
                                    </li>
                                </ScrollReveal>

                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Pharmaceutical Supply Chains:</strong>  Ensuring secure and efficient distribution of medical supplies.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Innovations in Healthcare AI:</strong> Backing machine learning solutions for diagnostics and telemedicine.
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
                    <div className="flex w-fit rounded-xl p-2 bg-[#CADCFC]">
                        <Wheat size={24} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Commodities & Agricultural Trade</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Global Supplier of Essential Commodities:</strong>   Providing grains, pulses, and specialty agricultural products.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Risk Management & Trading Strategies:</strong>  Offering hedging solutions for commodity price fluctuations.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Sustainable Sourcing & Logistics:</strong>  Ensuring efficient supply chain operations worldwide.
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
                    <div className="flex w-fit rounded-xl p-2 bg-[#CADCFC]">
                        <BrainCircuit size={24} color="#fff" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">AI & Fintech</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Developing AI-Driven Financial Infrastructure:</strong> Enabling digital banking, blockchain, and fintech innovations.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Supporting AI Research & Development:</strong>Investing in next-generation AI-driven technologies.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Enabling Global Digital Transformation:</strong> Powering finance, healthcare, and energy industries with AI.
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

export default Industries;

