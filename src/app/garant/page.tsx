"use client"

import Footer from "../components/Footer";
import Header from "../components/Headers";
import ScrollReveal from "../components/ScrollReveal";
import GarantBanner from "./components/banner";
import { useState } from "react";


const bannerStyle = {
    backgroundImage: 'url("/assets/images/primeBG.svg")',
};

export default function DocAtlas() {

    const images = [
        "/assets/images/team1.png",
        "/assets/images/team2.png",
        "/assets/images/team4.png",
        "/assets/images/team5.png",
        "/assets/images/scania.webp",
        "/assets/images/johnD.webp",
        "/assets/images/valtra.png",
        "/assets/images/hitachi.png",
        "/assets/images/team7.webp",
        "/assets/images/team8.png",
        "/assets/images/team9.png",
        "/assets/images/team10.png",
    ];

    const data = [
        {
            id: 'DocAtlas',
            title: 'Household Chemicals',
            icon: '/assets/images/hc.png',
            activeIcon: '/assets/images/hcActive.png',
            link: 'https://salekorea.wixsite.com/garant/page4',
        },
        {
            id: 'HydrogenGp',
            title: 'Special Equipment Video',
            icon: '/assets/images/video.png',
            activeIcon: '/assets/images/videoActive.png',
            link: 'https://salekorea.wixsite.com/garant/untitled',
        },
        {
            id: 'Prime',
            title: 'Cosmetics',
            icon: '/assets/images/cosmetic.png',
            activeIcon: '/assets/images/cosmeticActive.png',
            link: 'https://salekorea.wixsite.com/garant/hwajan',
        },
        {
            id: 'Apollo',
            title: 'Special Equipment',
            icon: '/assets/images/jcb.png',
            activeIcon: '/assets/images/jcbActive.png',
            link: 'https://salekorea.wixsite.com/garant/st',
        },
        {
            id: 'DocX',
            title: 'Pipes Fitting etc.',
            icon: '/assets/images/fittings.png',
            activeIcon: '/assets/images/fittingsActive.png',
            link: 'https://salekorea.wixsite.com/garant/blank-2',
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

    return (
        <div>

        </div>
    );
}
