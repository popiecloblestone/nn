import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    splitBy?: 'words' | 'characters' | 'lines';
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
    children, 
    className = "", 
    delay = 0,
    splitBy = 'words' 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    // Function to split text based on the choice
    const getSplitText = () => {
        if (splitBy === 'characters') {
            return children.split('');
        } else if (splitBy === 'words') {
            return children.split(' ');
        }
        return [children]; // Lines would need more complex parsing or passing arrays, sticking to words/chars for simplicity
    };

    const elements = getSplitText();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: 0.03, // Small stagger for typical Awwwards feel
            }
        }
    };

    const childVariants = {
        hidden: {
            y: "120%",
            rotateZ: 5,
            opacity: 0
        },
        visible: {
            y: "0%",
            rotateZ: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    return (
        <React.Fragment> {/* Use fragment to not disrupt surrounding flex/block layouts too much, though a wrapper is needed for the ref */}
            <span ref={ref} className={`inline-block ${className}`}>
                <motion.span
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-flex flex-wrap"
                >
                    {elements.map((element, index) => (
                        <span key={index} className={`overflow-hidden inline-flex ${splitBy === 'words' ? 'mr-1' : ''}`}>
                           <motion.span variants={childVariants} className="inline-block origin-bottom-left">
                                {element === ' ' ? '\u00A0' : element} {/* Handle spaces natively if character split is ever used with string containing spaces */}
                           </motion.span>
                        </span>
                    ))}
                </motion.span>
            </span>
        </React.Fragment>
    );
};
