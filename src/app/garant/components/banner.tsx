import { Carousel } from 'antd';
import ScrollReveal from 'app/components/ScrollReveal';
import { useEffect, useState } from 'react';

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

    const bannerStyle = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/garantBanner1.jpg")', backgroundSize: 'cover', backgroundPosition: 'top' };

    const mobileStyle = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/garantBanner1.jpg")', backgroundSize: 'cover', backgroundPosition: 'top' };

    const bannerStyle2 = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/garantBanner2.jpg")', backgroundSize: 'cover', backgroundPosition: 'top' };

    const mobileStyle2 = { backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/garantBanner2.jpg")', backgroundSize: 'cover', backgroundPosition: 'bottom', 'place-content': 'end' };

    return (
        <Carousel className="absolute top-0 w-full">
            <div>
                <div style={isMobile ? mobileStyle : bannerStyle} className="flex flex-col h-[80vh]">
                <div className="hidden md:flex flex-col w-11/12 sm:w-3/4 mx-auto mt-[10vh] sm:mt-[25vh] text-3xl max-sm:items-center sm:text-7xl xl:text-[84px] ">
                        <div className="flex gap-4 w-fit rounded-t-lg rounded-br-lg px-4 bg-white text-black">
                            <ScrollReveal className="font-bold">GARANT</ScrollReveal>
                            {/* <ScrollReveal className="font-normal">Co. Ltd.</ScrollReveal> */}
                        </div>
                        <div className="flex gap-4 w-fit rounded-b-lg px-4 bg-white text-black">
                            <ScrollReveal className="font-normal">Co. Ltd.</ScrollReveal>
                        </div>

                    </div>
                    <div className="flex md:hidden flex-col w-fit gap-2 mt-[55vh] sm:mt-[50vh] self-center text-3xl items-center sm:text-7xl xl:text-[84px]">
                        <div className="flex gap-4  px-4 py-2">
                            <ScrollReveal className="text-2xl font-extrabold px-4 py-2 bg-white text-content">GARANT Co. Ltd.</ScrollReveal>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <ScrollReveal className="text-2xl font-extrabold text-white"> </ScrollReveal>
                            {/* <ScrollReveal className="font-extrabold">Lives</ScrollReveal> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={isMobile ? mobileStyle2 : bannerStyle2} className="flex flex-col h-[80vh]">
                    <div className="hidden md:flex flex-col w-11/12 sm:w-3/4 mx-auto mt-[10vh] sm:mt-[25vh] text-3xl max-sm:items-center sm:text-7xl xl:text-[84px] ">
                        <div className="flex gap-4 w-fit rounded-t-lg rounded-br-lg px-4 bg-white text-black">
                            <ScrollReveal className="font-bold">GARANT</ScrollReveal>
                            {/* <ScrollReveal className="font-normal">Co. Ltd.</ScrollReveal> */}
                        </div>
                        <div className="flex gap-4 w-fit rounded-b-lg px-4 bg-white text-black">
                            <ScrollReveal className="font-normal">Co. Ltd.</ScrollReveal>
                        </div>

                    </div>
                    <div className="flex md:hidden flex-col w-fit gap-2 mt-[10vh] sm:mt-[50vh] self-center text-3xl items-center sm:text-7xl xl:text-[84px]">
                        <div className="flex gap-4  px-4 py-2">
                            <ScrollReveal className="text-2xl font-extrabold px-4 py-2 bg-white text-content">GARANT Co. Ltd.</ScrollReveal>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <ScrollReveal className="text-2xl font-extrabold text-white"> </ScrollReveal>
                            {/* <ScrollReveal className="font-extrabold">Lives</ScrollReveal> */}
                        </div>
                    </div>

                </div>
            </div>
            {/* <div style={{ ...contentStyle, backgroundImage: 'url("/assets/images/banner3.png")' }}>
            <div style={{ backgroundImage: 'linear-gradient(to bottom, white 0%, white 2%, transparent 20%), url("/assets/images/banner3.png")' }} className="flex flex-col h-[80vh]">


            </div>
          </div> */}

        </Carousel>
    );
};

export default HomeBanner;