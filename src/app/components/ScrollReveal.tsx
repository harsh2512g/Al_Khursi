import React, { useEffect, useState, useRef } from 'react';
import { a, useSpring } from '@react-spring/web';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;  // Optional: Allows setting custom scroll threshold
    delay?: number;      // Optional: Adds a delay to the animation
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, threshold = 0.2, delay = 500, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    const springProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        delay,
        config: { tension: 100, friction: 10, duration: 300 },
    });

    return (
        <a.div style={springProps} ref={elementRef}>
            <span className={`${className}`}>{children}</span>
        </a.div>
    );
};

export default ScrollReveal;
