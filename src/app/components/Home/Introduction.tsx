import React, { useState } from 'react';
import DocAtlas from './SelectedProductView/docAtlas';
import Titan from './SelectedProductView/titan';
import Prime from './SelectedProductView/prime';
import Apollo from './SelectedProductView/apollo';
import ScrollReveal from '../ScrollReveal';
import VisibilityClass from '../VisibilityClass';
import DocX from './SelectedProductView/docX';

const Products: React.FC = () => {

    const data = [
        {
            id: 'DocAtlas',
            title: 'Dubai Drangons',
            icon: '/assets/images/dubaiDragons.svg',
            activeIcon: '/assets/images/dubaiDragonsActive.svg',
            description: 'For aspiring sports enthusiasts and community builders.',
        },
        {
            id: 'HydrogenGp',
            title: 'Hydrogen GP',
            icon: '/assets/images/hydrogenIconActive.svg',
            activeIcon: '/assets/images/hydrogenIcon.svg',
            description: 'For innovators and advocates of sustainable energy solutions.',
        },
        {
            id: 'Prime',
            title: 'Garant',
            icon: '/assets/images/garantActive.svg',
            activeIcon: '/assets/images/garant.svg',
            description: 'For businesses seeking innovative and scalable tech solutions.',
        },
        {
            id: 'Apollo',
            title: 'TwoClickWorld',
            icon: '/assets/images/clickWorld.svg',
            activeIcon: '/assets/images/clickWorldActive.svg',
            description: 'For e-commerce pioneers and global marketplace enthusiasts.',
        },
        {
            id: 'DocX',
            title: 'DocX',
            icon: '/assets/images/titanIcon.svg',
            activeIcon: '/assets/images/titanIconActive.svg',
            description: 'For Individual practitioners & small to mid-sized Clinics.',
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

    console.log({ activeProduct })
    const renderView = () => {
        switch (activeProduct) {
            case 'DocAtlas':
                return <DocAtlas />
            case 'HydrogenGp':
                return <Titan />
            case 'Prime':
                return <Prime />
            case 'Apollo':
                return <Apollo />
            case 'DocX':
                return <DocX />
            default:
                return <DocAtlas />
        }
    }
    return (
        <>
            <div id='ourProduct' className="flex flex-col w-full max-sm:px-5 sm:w-11/12 xl:w-3/4 max-w-[1366px] mt-20 place-items-center text-center">
                <div className="flex">
                    <img src="/assets/images/logo.png" alt="logo" className='w-40 h-32' />
                </div>
                <div className="flex mt-3 sm:mt-7 mb-[18px] sm:mb-6">
                    <ScrollReveal delay={500} className="text-sm sm:text-[36px] font-bold">Introduction </ScrollReveal>
                </div>
                <div className="flex">
                    <ScrollReveal delay={700} className="text-sm sm:text-xl font-semibold max-sm:leading-6">
                        Al Khursi LLP is a leading multinational enterprise, specializing in high-value trading, strategic investments, and AI-driven infrastructure. With a commitment to excellence, innovation, and long-term partnerships, we provide cutting-edge solutions in commodities, oil & gas, healthcare, and advanced AI data centers.
                    </ScrollReveal>
                </div>
                <div className="mt-6 text-left ">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 text-xl mr-3">✅</span>
                            <span className="text-gray-800 text-md font-medium">
                                Pioneering AI Infrastructure – Powering next-generation computing with sustainable energy-backed data centers.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 text-xl mr-3">✅</span>
                            <span className="text-gray-800 text-md font-medium">
                                Global Trading Expertise – A trusted name in gold, agricultural commodities, and energy markets.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 text-xl mr-3">✅</span>
                            <span className="text-gray-800 text-md font-medium">
                                Strategic Investment & Advisory – Structuring high-value deals and facilitating global market entry in the UAE.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* <div className="flex flex-wrap place-content-center sm:hidden gap-2 mt-5">
                {["Dubai Drangons", "Hydrogen GP", "Garant", "TwoClickWorld", "DocX"].map((product: any, index: number) => (
                    <div
                        key={product}
                        onClick={() => handleProductChange(data[index].id)}
                        className={`flex w-fit px-4 py-2 cursor-pointer ${activeProduct === data[index].id
                            ? "bg-customBlue text-white"
                            : "bg-white text-content"
                            } rounded-md`}
                    >
                        <ScrollReveal>{product}</ScrollReveal>
                    </div>
                ))}
            </div>
            <div className="hidden sm:flex flex-wrap max-w-[1366px] gap-4 sm:px-8 justify-center mt-20 text-content">
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
                                <ScrollReveal delay={300}><span className="text-sm font-semibold">{product.description}</span></ScrollReveal>
                            </div>
                        </div>
                    </VisibilityClass>

                ))}
            </div>


            {renderView()} */}

        </>
    );
};

export default Products;
