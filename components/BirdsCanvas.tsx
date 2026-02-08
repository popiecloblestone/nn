import React, { useEffect, useRef } from 'react';

/**
 * BirdsCanvas.tsx
 * 
 * Renders a flock of elaborated "Professional Tech" birds flying from LEFT to RIGHT using HTML5 Canvas.
 * Performance optimized: uses a single requestAnimationFrame loop.
 * Style: Filled polygons with gradients and articulated wings.
 */

const BirdsCanvas: React.FC<{ className?: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        let height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

        // --- Bird Logic ---
        interface Bird {
            x: number;
            y: number;
            z: number; // Depth factor for parallax/scale (0.5 to 1.5)
            speed: number;
            wingSpan: number;
            flapSpeed: number;
            flapOffset: number;
            color: string;
        }

        const birds: Bird[] = [];
        const birdCount = 3;
        const colors = ['#22d3ee', '#06b6d4', '#0891b2', '#ffffff']; // Cyan tones + White

        const initBirds = () => {
            birds.length = 0;
            for (let i = 0; i < birdCount; i++) {
                const z = Math.random() * 0.8 + 0.5; // 0.5 to 1.3
                birds.push({
                    x: Math.random() * width,
                    y: Math.random() * (height * 0.6), // Fly mostly in top 60%
                    z: z,
                    speed: (Math.random() * 1.5 + 1.0) * z, // Faster if closer (parallax)
                    wingSpan: (Math.random() * 10 + 15) * z,
                    flapSpeed: (Math.random() * 0.1 + 0.1),
                    flapOffset: Math.random() * Math.PI * 2,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
        };

        initBirds();

        let animationFrameId: number;
        let time = 0;

        const render = () => {
            time += 0.1;
            ctx.clearRect(0, 0, width, height);

            birds.forEach((bird) => {
                // Update Position
                bird.x += bird.speed;

                // Reset if off-screen (right)
                if (bird.x > width + 50) {
                    bird.x = -50;
                    bird.y = Math.random() * (height * 0.6);
                }

                // Vertical Oscillation (Glide)
                const glide = Math.sin(time * 0.05 + bird.flapOffset);
                const yOffset = glide * 5;

                const renderX = bird.x;
                const renderY = bird.y + yOffset;
                const scale = bird.z * 1.5; // Scale up a bit for visibility

                // --- Advanced Vector Bird Drawing ---
                // Setup Context
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                // We will use a gradient for the body to make it look "metallic/tech"
                const gradient = ctx.createLinearGradient(renderX - 20 * scale, renderY, renderX + 20 * scale, renderY);
                gradient.addColorStop(0, bird.color); // Head color
                gradient.addColorStop(1, '#ffffff');  // Tail fade

                // Wing Animation State
                const cycle = Math.sin(time * bird.flapSpeed + bird.flapOffset); // -1 to 1
                const wingUp = cycle < 0;

                // Wing Angles
                const innerAngle = cycle * 0.5;
                const outerAngle = cycle * 0.9 + (wingUp ? 0.3 : -0.2); // Drag effect

                // Scale Helper
                const s = (val: number) => val * scale;

                // --- DRAW FUNCTION ---
                // We draw the Far Wing first, then Body, then Near Wing.

                // Wing Geometry Helper
                const drawWing = (isNear: boolean) => {
                    const side = isNear ? 1 : -1;
                    const phaseLag = isNear ? 0 : 0.2; // slight delay for far wing

                    const localCycle = Math.sin(time * bird.flapSpeed + bird.flapOffset + phaseLag);
                    const iAng = localCycle * 0.6 * side;
                    const oAng = (localCycle * 1.0 + (localCycle < 0 ? 0.4 : -0.2)) * side;

                    // Shoulder (Fixed on body)
                    const sx = renderX + s(5);
                    const sy = renderY - s(2);

                    // Elbow
                    const humerusLen = s(16);
                    const ex = sx - Math.cos(Math.PI / 3) * humerusLen; // swept back
                    const ey = sy - Math.sin(iAng) * humerusLen + (isNear ? 0 : s(-4)); // lifted/lowered

                    // Tip
                    const radiusLen = s(28);
                    const tx = ex - Math.cos(Math.PI / 6) * radiusLen; // swept back
                    const ty = ey - Math.sin(oAng) * radiusLen;

                    ctx.beginPath();
                    ctx.moveTo(sx, sy);

                    // Leading Edge (Curved)
                    ctx.quadraticCurveTo((sx + ex) / 2, (sy + ey) / 2 - s(2), ex, ey);
                    ctx.quadraticCurveTo((ex + tx) / 2, (ey + ty) / 2 - s(2), tx, ty);

                    // Trailing Edge (Scalloped/Feathered Look)
                    // Curve back to elbow area
                    ctx.quadraticCurveTo(ex + s(5), ey + s(8), sx - s(5), sy + s(4));
                    ctx.closePath();

                    // Fill
                    if (isNear) {
                        ctx.fillStyle = bird.color;
                        ctx.globalAlpha = 0.9;
                    } else {
                        ctx.fillStyle = bird.color; // Same color but...
                        ctx.globalAlpha = 0.5; // Darker/Occluded
                    }
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                };

                // 1. Far Wing
                drawWing(false);

                // 2. Body (Modern Silhouette)
                ctx.beginPath();

                // Beak Tip
                const noseX = renderX + s(20);
                const noseY = renderY;

                ctx.moveTo(noseX, noseY);
                // Head Top
                ctx.quadraticCurveTo(renderX + s(10), renderY - s(6), renderX + s(0), renderY - s(4));
                // Back
                ctx.lineTo(renderX - s(15), renderY - s(2));
                // Tail Top
                ctx.lineTo(renderX - s(25), renderY - s(4));
                // Tail End
                ctx.lineTo(renderX - s(30), renderY + s(0));
                // Tail Bottom
                ctx.lineTo(renderX - s(25), renderY + s(4));
                // Belly
                ctx.quadraticCurveTo(renderX - s(5), renderY + s(8), renderX + s(10), renderY + s(4));
                // Neck/Throat
                ctx.lineTo(noseX, noseY);

                ctx.fillStyle = gradient;
                ctx.fill();

                // Eye
                ctx.beginPath();
                ctx.arc(renderX + s(12), renderY - s(1), s(1.5), 0, Math.PI * 2);
                ctx.fillStyle = '#111'; // Dark pupil
                ctx.fill();

                // 3. Near Wing
                drawWing(true);

                // Optional: Glow
                if (bird.z > 0.8) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = bird.color;
                } else {
                    ctx.shadowBlur = 0;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            // Re-distribute birds occasionally? Or let them fly off.
            // Let's keep them instances but just updating width lets them reset correctly.
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={className} />;
};

export default BirdsCanvas;
