import { Carousel } from 'antd';
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
        <div>
            Coming soon
        </div>
    );
};

export default HomeBanner;