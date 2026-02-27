import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MagneticProps {
    children: React.ReactElement;
    strength?: number;
}

export const Magnetic = ({ children, strength = 0.5 }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener("mousemove", handleMouse);
        element.addEventListener("mouseleave", reset);

        return () => {
            element.removeEventListener("mousemove", handleMouse);
            element.removeEventListener("mouseleave", reset);
        };
    }, []);

    // Spring animations for a snappy return
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const x = useSpring(position.x, springConfig);
    const y = useSpring(position.y, springConfig);

    return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        style: { x, y, ...children.props.style },
        className: `magnetic ${children.props.className || ''}`
    });
};
