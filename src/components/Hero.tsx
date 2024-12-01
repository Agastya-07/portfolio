import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(''); // Holds the current typed text
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current character index
  const [currentStringIndex, setCurrentStringIndex] = useState(0); // Tracks the current string index
  const [isDeleting, setIsDeleting] = useState(false); // Controls typing/deleting mode
  const strings = [
    "Hi, I'm Agastya Sharma",
    "I'm a Full Stack Developer",
    "I love building innovative solutions",
  ]; // Strings for the typing animation
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const pauseTime = 1500; // Pause time before switching strings

  // Typing animation logic
  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentStringIndex];
      if (!isDeleting) {
        // Typing logic
        setDisplayedText((prev) => currentString.slice(0, prev.length + 1));
        if (displayedText === currentString) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
        }
      } else {
        // Deleting logic
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length); // Move to the next string
        }
      }
    };

    const interval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearInterval(interval); // Cleanup on unmount
  }, [displayedText, isDeleting, currentStringIndex, strings]);

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                {displayedText}
                <span className="animate-blink">|</span> {/* Blinking cursor */}
              </span>
            </h1>
            <div className="bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 p-[1px] rounded-lg mb-8">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-xl text-gray-300">
                  Full Stack Developer passionate about building innovative solutions
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Agastya-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Github size={24} />
              </a>
              <a
                href="https://leetcode.com/u/saneopede07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <img
                  src="leetcode.png"
                  alt="LeetCode"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://linkedin.com/in/agastya-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sagastya18@gmail.com"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 max-w-sm relative">
  {/* Glowing effect wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-75"></div>
            
            {/* Profile image */}
            <img
              src="/profile.jpg"
              alt="Agastya's Profile"
              className="relative rounded-full w-64 h-64 object-cover mx-auto border-2 border-white/20 shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
