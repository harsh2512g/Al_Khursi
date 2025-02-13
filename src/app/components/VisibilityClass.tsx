import React, { useEffect, useState, useRef } from 'react';

interface VisibilityClassProps {
    children: React.ReactNode;
    className?: string; // Optional: base class name
    visibleClassName: string; // The class to add when visible
    threshold?: number; // Optional: threshold for visibility detection
}

const VisibilityClass: React.FC<VisibilityClassProps> = ({
    children,
    className = '', // Default base class if none provided
    visibleClassName,
    threshold = 0.2,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
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

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? visibleClassName : ''}`}
        >
            {children}
        </div>
    );
};

export default VisibilityClass;
