import React from 'react';
import ScrollReveal from '../../ScrollReveal';
import Link from 'next/link';

interface Props {
    // Define the props for your component here
}

const Apollo: React.FC<Props> = (props) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col sm:flex-row gap-16 w-4/5 sm:w-11/12 xl:w-3/4 mt-5 sm:mt-14 text-content">
            <div className="flex sm:w-1/2">
                <ScrollReveal>
                    <img src="/assets/images/twoClick.png" alt="Twoclickworld" className="rounded-md" />
                </ScrollReveal>

            </div>
            <div className="flex flex-col sm:w-1/2">
                <div className="flex flex-col gap-2">
                    <ScrollReveal delay={500} className="text-xl sm:text-[40px] font-bold"><span className="text-customGreen">TwoClickWorld</span></ScrollReveal>
                    <ScrollReveal delay={500} className="text-sm sm:text-[26px] font-bold leading-5 sm:leading-8">For e-commerce pioneers and global marketplace enthusiasts.</ScrollReveal>
                </div>

                <ul className="mt-4 space-y-3 list-disc text-xs sm:text-base max-sm:leading-5 text-secondaryContent">
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Global Marketplace:</strong> Bridges the gap between buyers and sellers across international borders.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Ease of Use:</strong> Simplifies the e-commerce experience with an intuitive and user-friendly platform.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Empowering SMEs:</strong> Provides tools and resources for small and medium enterprises to grow.
                        </li>
                    </ScrollReveal>
                    <ScrollReveal delay={700}>
                        <li>
                            <strong className="font-bold text-content">Secure Transactions:</strong> Ensures safe and reliable payment and logistics solutions for users.
                        </li>
                    </ScrollReveal>


                </ul>

                <div className="mt-6">
                    <ScrollReveal delay={900}>
                        <Link href="https://twoclickworld.com/" target='_blank' className="text-customGreen text-xs sm:text-base font-semibold">Find out More →</Link>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Apollo;
