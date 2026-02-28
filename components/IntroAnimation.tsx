import React, { useEffect, useState, useRef } from 'react';
import './IntroAnimation.css';

/**
 * Cinematic intro splash — "Saracura Dev" typewriter + split-door reveal.
 *
 * Timeline:
 *  0ms      → render (both doors closed, black screen)
 *  900ms    → typewriter starts
 *  ~2500ms  → text complete, tagline + divider fade in
 *  3500ms   → doors slide apart
 *  4900ms   → component unmounts
 */

const FULL_TEXT = 'Saracura Dev';
const TYPING_SPEED_MS = 100;
const TYPING_START_DELAY = 900;
const DOOR_OPEN_DELAY = 5500;
const UNMOUNT_DELAY   = 7000;

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Phase 1: Start typewriter
    timerRef.current = setTimeout(() => {
      setShowCursor(true);

      const type = () => {
        if (indexRef.current < FULL_TEXT.length) {
          setDisplayedText(FULL_TEXT.slice(0, indexRef.current + 1));
          indexRef.current += 1;
          timerRef.current = setTimeout(type, TYPING_SPEED_MS);
        } else {
          // Phase 2: Text done → show tagline, start cursor blink
          setTimeout(() => {
            setShowDetails(true);
            setCursorBlink(true);
          }, 250);
        }
      };

      type();
    }, TYPING_START_DELAY);

    // Phase 3: Open doors
    const doorTimer = setTimeout(() => setDoorsOpen(true), DOOR_OPEN_DELAY);

    // Phase 4: Done
    const doneTimer = setTimeout(() => onComplete(), UNMOUNT_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(doorTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className="intro-root">
      {/* Left door panel */}
      <div
        className="intro-door intro-door-left"
        data-open={doorsOpen ? 'true' : 'false'}
      >
        <div className="intro-door-edge" />
      </div>

      {/* Right door panel */}
      <div
        className="intro-door intro-door-right"
        data-open={doorsOpen ? 'true' : 'false'}
      >
        <div className="intro-door-edge" />
      </div>

      {/* Central content */}
      <div
        className="intro-content"
        data-hidden={doorsOpen ? 'true' : 'false'}
      >
        <div className="intro-glow" />

        <h1 className="intro-headline">
          <span>{displayedText}</span>
          {showCursor && (
            <span
              className="intro-cursor"
              data-blink={cursorBlink ? 'true' : 'false'}
            />
          )}
        </h1>

        <p
          className="intro-tagline"
          data-visible={showDetails ? 'true' : 'false'}
        >
          Engenharia de Software sem Concessões
        </p>

        <div
          className="intro-divider"
          data-visible={showDetails ? 'true' : 'false'}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
