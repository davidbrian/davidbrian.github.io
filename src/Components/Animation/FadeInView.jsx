import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

const FadeInOnView = ({ children, delay }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // Animation
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0%)" : "translateY(10%)",
        from: { opacity: 0, transform: "translateY(10%)" },
        config: config.molasses,
        delay
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting || entry.boundingClientRect.y <= 0) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -1% 0px',
            threshold: 0.01
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return (
        <animated.div style={fade} ref={ref}>
            {children}
        </animated.div>
    );
};

export default FadeInOnView;