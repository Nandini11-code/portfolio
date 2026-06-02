import React, { useRef } from 'react';
import './Hero.css';
import heroImg from '../assets/girll.png';

// Import GSAP and its official React hook wrapper
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the hook plugin safely
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(); // Create a reference to anchor our animations securely

  useGSAP(() => {
    // 1. Clean entrance for the giant background watermark title
    gsap.from('.bgTitle', {
      opacity: 0,
      scale: 0.9,
      duration: 1.4,
      ease: 'power3.out',
    });

    // 2. Left content column slides in elegantly from the left edge
    gsap.from('.leftCol', {
      opacity: 0,
      x: -60,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3,
    });

    // 3. Right content column slides in elegantly from the right edge
    gsap.from('.rightCol', {
      opacity: 0,
      x: 60,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3,
    });

    // 4. Center sketch illustration rises up with a premium elastic dynamic feel
    gsap.from('.heroImage', {
      opacity: 0,
      y: 100,
      scale: 0.95,
      duration: 1.5,
      ease: 'back.out(1.4)', // Creates a beautiful high-end bounce finish
      delay: 0.5,
    });
  }, { scope: container }); // Scoping keeps animations local and lightning-fast

  return (
    <section id="hero" className="heroContainer" ref={container}>
      {/* Massive Background Title Watermark */}
      <h1 className="bgTitle">Portfolio</h1>

      <div className="mainGrid">
        {/* Left Column: Name & Description */}
        <div className="leftCol">
          <h2 className="name">Nandini Solanki</h2>
          <p className="description">
            Beginner web designer creating clean, user-friendly, and modern digital experiences.
          </p>
        </div>

        {/* Center Column: Sketch Illustration */}
        <div className="centerCol">
          <img 
            src={heroImg} 
            alt="Nandini Solanki Illustration" 
            className="heroImage" 
          />
        </div>

        {/* Right Column: Role & Year */}
        <div className="rightCol">
          <h2 className="role">Web designer</h2>
          <span className="year">2026</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;