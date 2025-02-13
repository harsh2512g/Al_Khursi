import React from 'react';
import ScrollReveal from '../../ScrollReveal';
import Link from 'next/link';

interface Props {
    // Define your component's props here
}

const Titan: React.FC<Props> = (props) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col sm:flex-row gap-16 w-4/5 sm:w-11/12 xl:w-3/4 mt-5 sm:mt-14 text-content">
            <div className="flex sm:w-1/2">
                <ScrollReveal>
                    <img src="/assets/images/hydrogen.png" alt="hydrogengreenpower" className="rounded-md" />
                </ScrollReveal>

            </div>
            <div className="flex flex-col sm:w-1/2">
                <div className="flex flex-col gap-2">
                    <ScrollReveal delay={500} className="text-xl sm:text-[40px] font-bold">Hydrogen <span className="text-customGreen">Green Power</span></ScrollReveal>
                    <ScrollReveal delay={500} className="text-sm sm:text-[26px] font-bold leading-5 sm:leading-8">For innovators and advocates of sustainable energy solutions. </ScrollReveal>
                </div>

                <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Renewable Energy Focus:</strong> Develops cutting-edge hydrogen technologies for energy production.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Smart Records, Fast Decisions:</strong> Access patient histories 35% faster, empowering doctors to make quicker, data-driven treatment choices.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Environmental Impact:</strong> Contributes to reducing global carbon emissions with sustainable solutions.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Innovative Solutions:</strong> Pioneers advancements in green energy technology for industrial applications.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Global Sustainability Goals:</strong> Aligns with international efforts to achieve a carbon-neutral future.
                        </li>
                    </ScrollReveal>

                </ul>

                <div className="mt-6">
                    <ScrollReveal delay={900}>
                        <Link href="/hydrogenGreenPower" className="text-customGreen text-xs sm:text-base font-semibold">Find out More →</Link>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Titan;
