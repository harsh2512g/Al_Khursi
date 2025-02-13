import React from 'react';
import ScrollReveal from '../../ScrollReveal';
import Link from 'next/link';

interface Props {
    // Define your component's props here
}

const DocX: React.FC<Props> = (props) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col sm:flex-row gap-16 w-4/5 sm:w-11/12 xl:w-3/4 mt-5 sm:mt-14 text-content">
            <div className="flex sm:w-1/2">
                <ScrollReveal>
                    <img src="/assets/images/docX.png" alt="DocX" className="rounded-md" />
                </ScrollReveal>

            </div>
            <div className="flex flex-col sm:w-1/2">
                <div className="flex flex-col gap-2">
                    <ScrollReveal delay={500} className="text-xl sm:text-[40px] font-bold"><span className="text-customGreen">DocX</span></ScrollReveal>
                    <ScrollReveal delay={500} className="text-sm sm:text-[26px] font-bold leading-5 sm:leading-8">Simplifying Clinics, Empowering Care. </ScrollReveal>
                </div>

                <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Booking Bliss:</strong> Automate appointments, slash no-shows by 30%, and keep your schedule packed with ease.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Smart Records, Fast Decisions:</strong> Access patient histories 35% faster, empowering doctors to make quicker, data-driven treatment choices.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Instant Cash Flow Boost:</strong> Automate billing, cut payment cycles by 70%, and keep your clinic’s revenue flowing seamlessly.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Virtual Care, Real Results:</strong> Securely offer telemedicine, expand your reach, and elevate patient engagement with hassle-free virtual consultations.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Effortless Treatment Planning:</strong> Create, customize, and track treatment plans, ensuring better patient outcomes with minimal effort.
                        </li>
                    </ScrollReveal>

                </ul>

                <div className="mt-6">
                    <ScrollReveal delay={900}>
                        <Link href="https://treint.com/docx" target='_blank' className="text-customGreen text-xs sm:text-base font-semibold">Find out More →</Link>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default DocX;
