import React, { useEffect, useRef } from 'react';

/**
 * BirdsCanvas.tsx
 *
 * Renders a flock of birds using HTML5 Canvas.
 * Performance optimized:
 *  - Throttled to 30fps (halves GPU/CPU cost vs 60fps)
 *  - Paused via Page Visibility API when tab is hidden
 *  - No shadowBlur (one of the most expensive canvas ops)
 */

const BirdsCanvas: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    interface Bird {
      x: number;
      y: number;
      z: number;
      speed: number;
      wingSpan: number;
      flapSpeed: number;
      flapOffset: number;
      color: string;
    }

    const birds: Bird[] = [];
    const birdCount = 5;
    const colors = ['#22d3ee', '#06b6d4', '#0891b2', '#ffffff'];

    const initBirds = () => {
      birds.length = 0;
      for (let i = 0; i < birdCount; i++) {
        const z = Math.random() * 0.8 + 0.5;
        birds.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.6),
          z,
          speed: (Math.random() * 1.5 + 1.0) * z,
          wingSpan: (Math.random() * 10 + 15) * z,
          flapSpeed: Math.random() * 0.06 + 0.08,
          flapOffset: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initBirds();

    let animationFrameId: number;
    let time = 0;
    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30; // Target 30fps
    let isPageVisible = true;

    const render = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Pause when tab is hidden — zero CPU cost
      if (!isPageVisible) return;

      // Throttle to 30fps
      const elapsed = timestamp - lastFrameTime;
      if (elapsed < FRAME_INTERVAL) return;
      lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);

      time += 0.1;
      ctx.clearRect(0, 0, width, height);

      birds.forEach((bird) => {
        bird.x += bird.speed;

        if (bird.x > width + 50) {
          bird.x = -50;
          bird.y = Math.random() * (height * 0.6);
        }

        const glide = Math.sin(time * 0.05 + bird.flapOffset);
        const renderX = bird.x;
        const renderY = bird.y + glide * 5;
        const scale = bird.z * 1.5;
        const s = (val: number) => val * scale;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // shadowBlur intentionally removed — it's the most expensive canvas op

        const gradient = ctx.createLinearGradient(
          renderX - 20 * scale, renderY,
          renderX + 20 * scale, renderY
        );
        gradient.addColorStop(0, bird.color);
        gradient.addColorStop(1, '#ffffff');

        const drawWing = (isNear: boolean) => {
          const phaseLag = isNear ? 0 : 0.15;
          const localCycle = Math.sin(time * bird.flapSpeed + bird.flapOffset + phaseLag);
          const side = isNear ? 1 : -1;
          const iAng = localCycle * 0.45 * side;
          const oAng = (localCycle * 0.75 + (localCycle < 0 ? 0.3 : -0.15)) * side;

          const sx = renderX + s(5);
          const sy = renderY - s(2);
          const humerusLen = s(16);
          const ex = sx - Math.cos(Math.PI / 3) * humerusLen;
          const ey = sy - Math.sin(iAng) * humerusLen + (isNear ? 0 : s(-4));
          const radiusLen = s(28);
          const tx = ex - Math.cos(Math.PI / 6) * radiusLen;
          const ty = ey - Math.sin(oAng) * radiusLen;

          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.quadraticCurveTo((sx + ex) / 2, (sy + ey) / 2 - s(2), ex, ey);
          ctx.quadraticCurveTo((ex + tx) / 2, (ey + ty) / 2 - s(2), tx, ty);
          ctx.quadraticCurveTo(ex + s(5), ey + s(8), sx - s(5), sy + s(4));
          ctx.closePath();

          ctx.fillStyle = bird.color;
          ctx.globalAlpha = isNear ? 0.9 : 0.45;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        };

        // 1. Far wing (dimmer — depth cue)
        drawWing(false);

        // 2. Body
        ctx.beginPath();
        ctx.moveTo(renderX + s(20), renderY);
        ctx.quadraticCurveTo(renderX + s(10), renderY - s(6), renderX, renderY - s(4));
        ctx.lineTo(renderX - s(15), renderY - s(2));
        ctx.lineTo(renderX - s(25), renderY - s(4));
        ctx.lineTo(renderX - s(30), renderY);
        ctx.lineTo(renderX - s(25), renderY + s(4));
        ctx.quadraticCurveTo(renderX - s(5), renderY + s(8), renderX + s(10), renderY + s(4));
        ctx.lineTo(renderX + s(20), renderY);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Eye
        ctx.beginPath();
        ctx.arc(renderX + s(12), renderY - s(1), s(1.5), 0, Math.PI * 2);
        ctx.fillStyle = '#111';
        ctx.fill();

        // 3. Near wing (brighter — closer)
        drawWing(true);
      });
    };

    animationFrameId = requestAnimationFrame(render);

    const handleVisibility = () => {
      isPageVisible = document.visibilityState === 'visible';
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default BirdsCanvas;
