import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const HydrogenGpBanner = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check the window width on component mount
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initialize the state based on the current window width
        handleResize();

        // Add event listener to handle window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const bannerStyle = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%)', backgroundSize: 'cover', backgroundPosition: 'top' };

    const mobileStyle = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/bannerMobile1.jpg")', backgroundSize: 'cover', backgroundPosition: 'top' };

    const bannerStyle2 = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%)', backgroundSize: 'cover', backgroundPosition: 'top' };

    const mobileStyle2 = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/bannerMobile2.png")', backgroundSize: 'cover', backgroundPosition: 'bottom', 'place-content': 'end' };

    return (
        <Carousel className="absolute top-0 w-full">
            <div style={bannerStyle}>
                <div style={isMobile ? mobileStyle2 : bannerStyle2} className="flex flex-col h-[90vh]">
                    <div className="flex justify-center items-center w-full h-full">
                        <video
                            className="w-full h-full object-cover "
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/assets/images/hydrogenGP.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute right-0 left-10 top-[48%] md:top-[36%] flex flex-col z-20 mt-[10vh] sm:mt-[20vh]">
                        <div className="flex self-center mt-2 md:mt-4">
                            <ScrollReveal delay={200} className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#98c0eaf2] to-[#00BCD4] bg-clip-text text-transparent">GREEN POWER</ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
            

        </Carousel>
    );
};

export default HydrogenGpBanner;
