import React from 'react';
import ScrollReveal from '../../ScrollReveal';
import Link from 'next/link';

interface Props {
    // Define your component's props here
}

const Prime: React.FC<Props> = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-16 w-4/5 sm:w-11/12 xl:w-3/4 mt-5 sm:mt-14 text-content">
            <div className="flex sm:w-1/2">
                <ScrollReveal>
                    <img src="/assets/images/garant.png" alt="DocAtlas" className="rounded-md" />
                </ScrollReveal>

            </div>
            <div className="flex flex-col sm:w-1/2">
                <div className="flex flex-col gap-2">
                    <ScrollReveal delay={500} className="text-xl sm:text-[40px] font-bold"><span className="text-customGreen">Garant</span></ScrollReveal>
                    <ScrollReveal delay={500} className="text-sm sm:text-[26px] font-bold leading-5 sm:leading-8">For businesses seeking innovative and scalable tech solutions.</ScrollReveal>
                </div>

                <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Custom Software Development:</strong> Offers tailored digital tools for improved business operations.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Strategic Consulting:</strong> Provides expert advice to align technology with business growth objectives.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Scalability:</strong> Supports businesses of all sizes, from startups to enterprises, with scalable solutions.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Efficiency Booster:</strong> Helps companies streamline processes, enhance productivity, and save costs.
                        </li>
                    </ScrollReveal>

                </ul>

                <div className="mt-6">
                    <ScrollReveal delay={900}>
                        <Link href="/garant" className="text-customGreen text-xs sm:text-base font-semibold">Find out More →</Link>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Prime;
