import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const HomeBanner = () => {

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
                            <source src="https://video.wixstatic.com/video/4fb1cf_f45426e3799046a086a45a575620f71a/1080p/mp4/file.mp4" type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                    </div>
                    <div className="absolute right-0 left-0 top-48 md:top-40 flex flex-col mt-[10vh] sm:mt-[20vh]">
                        <div className="flex gap-4 px-4 self-center">
                            <span className="text-xl md:text-4xl grow font-extrabold text-white">Shaping the Future of Global Trade, Investments & AI Infrastructure </span>
                        </div>
                        <div className="flex max-md:mt-1 bg-gradient-to-r from-[#fff] via-[#CADCFC] to-[#9fbff6] h-2 bounce-in-left w-[70%] self-center rounded-xl"></div>
                        <div className="flex self-center mt-2 md:mt-4">
                            <ScrollReveal delay={200} className="text-lg md:text-2xl font-bold ">Powering industries, enabling innovation, and driving sustainable growth across global markets.</ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Slide */}
            {/* <div>
                <div style={isMobile ? mobileStyle2 : bannerStyle2} className="flex flex-col h-[90vh]">
                    <div className="flex justify-center items-center w-full h-full">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/assets/images/banner2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex sm:hidden flex-col gap-2 mt-[10vh] sm:mt-[20vh] text-3xl max-sm:items-center sm:text-7xl xl:text-[84px]">
                        <div className="flex gap-4 bg-white px-4 py-2">
                            <ScrollReveal className="text-2xl font-extrabold text-content">AI Driven care</ScrollReveal>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <ScrollReveal className="text-2xl font-extrabold text-white">Power, Precision, Progress</ScrollReveal>
                        </div>
                    </div>
                </div>
            </div> */}

        </Carousel>
    );
};

export default HomeBanner;
