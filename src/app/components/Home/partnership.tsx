import ScrollReveal from "../ScrollReveal";

const Partnership = () => {
    return (
        <div className="flex flex-col gap-12 max-w-[1366px] place-items-center ">
            <div className="place-items-center">
                <div className="flex mb-[18px]">
                    <ScrollReveal delay={500} className="text-sm sm:text-4xl font-bold">Al Khursi LLP & Treint Partnership </ScrollReveal>
                </div>
                <div className="text-xs sm:text-lg font-normal text-secondaryContent">
                    <ScrollReveal delay={200}>Al Khursi LLP is a key strategic partner to Treint, supporting its expansion and financial structuring in the UAE.</ScrollReveal>
                </div>
            </div>
            <ScrollReveal delay={700}>
                <div className="hidden sm:flex gap-4 2xl:gap-8 z-20">
                    <div className="flex flex-col gap-3 max-w-80 text-center p-4 xl:p-7 rounded-3xl bg-[#FF8651]">
                        <span className="text-lg lg:text-xl 2xl:text-2xl font-bold">Investment & Financial Structuring</span>
                        <span className="text-sm font-bold">Facilitating capital, regulatory frameworks, and strategic alliances.</span>
                    </div>

                    <div className="flex flex-col relative max-w-80 text-center rounded-3xl bg-[#FFE44D]">
                        <div className="flex flex-col gap-2 p-4 xl:p-7">
                            <span className="text-lg lg:text-xl 2xl:text-2xl font-bold">AI-Powered Infrastructure</span>
                            <span className="text-sm xl:text-base font-normal">Providing high-performance computing environments for Treint’s operations.</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 max-w-80 text-center p-4 xl:p-7 rounded-3xl bg-[#D1B182]">
                        <span className="text-lg lg:text-xl 2xl:text-2xl font-bold">Market Expansion & Deal Structuring </span>
                        <span className="text-sm font-bold"> Securing Treint’s commercial success in the UAE.</span>
                    </div>

                </div>
            </ScrollReveal>
        </div>
    )
}

export default Partnership;