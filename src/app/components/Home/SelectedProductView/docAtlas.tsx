import React from 'react';
import ScrollReveal from '../../ScrollReveal';
import Link from 'next/link';

const DocAtlas: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-16 w-4/5 sm:w-11/12 xl:w-3/4 mt-5 sm:mt-14 text-content">

            <div className="flex sm:w-1/2">
                <ScrollReveal>
                    <img src="/assets/images/dubaiDragon.webp" alt="dragons" className="rounded-md object-cover" />
                </ScrollReveal>
            </div>

            <div className="flex flex-col sm:w-1/2">
                <div className="flex flex-col gap-2">
                    <ScrollReveal delay={500} className="text-xl sm:text-[40px] font-bold">Dubai<span className="text-customGreen"> Dragons</span></ScrollReveal>
                    <ScrollReveal delay={500} className="text-sm sm:text-[26px] font-bold leading-5 sm:leading-8">For aspiring sports enthusiasts and community builders. </ScrollReveal>
                </div>

                <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                    <ScrollReveal delay={700}> <li>
                        <strong className="font-bold text-content">Sports Excellence:</strong> A leading rugby team fostering skill development and competition at all levels.
                    </li></ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Community Engagement:</strong> Promotes teamwork, inclusivity, and community spirit through events and outreach.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Fitness Advocacy:</strong> Encourages physical and mental well-being through active participation in sports.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Global Reach:</strong> Inspires international collaboration and camaraderie in the world of rugby.
                        </li>
                    </ScrollReveal>
                </ul >

                <div className="mt-6">
                    <ScrollReveal delay={900}>
                        <Link href="https://dubaidragons.com/" target='_blank' className="text-customGreen text-xs sm:text-base font-semibold">Find out More →</Link>
                    </ScrollReveal>
                </div>
            </div >
        </div >
    );
};

export default DocAtlas;
