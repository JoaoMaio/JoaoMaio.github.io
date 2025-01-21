'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words }) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = 150; 
    const deletingSpeed = 200;

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer); // Clean up the timer on re-renders
  }, [currentText, charIndex, isDeleting, wordIndex, words]);

  return <h2 id="typewriter" className="text-3xl font-bold">{currentText}</h2>;
};

export default TypewriterEffect;
