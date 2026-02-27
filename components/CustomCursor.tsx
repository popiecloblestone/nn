import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.closest('.magnetic')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Spring physics for main dot (fast)
    const dotSpringConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const dotX = useSpring(mousePosition.x, dotSpringConfig);
    const dotY = useSpring(mousePosition.y, dotSpringConfig);

    // Spring physics for trailing circle (slow lag)
    const trailSpringConfig = { damping: 30, stiffness: 100, mass: 0.8 };
    const trailX = useSpring(mousePosition.x, trailSpringConfig);
    const trailY = useSpring(mousePosition.y, trailSpringConfig);

    useEffect(() => {
        dotX.set(mousePosition.x);
        dotY.set(mousePosition.y);
        trailX.set(mousePosition.x);
        trailY.set(mousePosition.y);
    }, [mousePosition, dotX, dotY, trailX, trailY]);

    // Don't render on mobile/touch devices (simple detection via screen width for now)
    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

    return (
        <>
            {/* Trailing Circle (Rastro) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-9998 mix-blend-difference"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                }}
            />
            
            {/* Main Leader Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-9999 mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 4 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                }}
            />
        </>
    );
};
