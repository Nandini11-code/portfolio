import React from 'react';
import './Experience.css';
import cakeLogo from '../assets/vcakes.png';  // Put your V_Cakes logo image here
import bookGraphic from '../assets/books.png'; // Put your book/star graphic asset here

const Experience = () => {
  return (
    <section id="experience" className="experienceSection">
      <div className="experienceContainer">
        
        {/* Left Column: Context Text Blocks */}
        <div className="experienceContent">
          <div className="textBlock">
            <h2 className="experienceTitle">Experience</h2>
            <p>I'm a beginner web and graphic designer passionate about creating clean and modern designs.</p>
            <p>I enjoy designing simple landing pages, user interfaces, and creative visuals while learning and growing through projects.</p>
          </div>

          <div className="textBlock creativeApproach">
            <h2 className="experienceTitle">Creative Approach</h2>
            <p>I like creating simple, clean, and user-friendly designs with a modern and minimal style.</p>
            <p>I enjoy learning new design ideas and improving my creativity through every project I build.</p>
          </div>
        </div>

        {/* Right Column: Graphic Showcases with Connecting Indicator */}
        <div className="experienceGraphics">
          
          {/* Top Logo Asset Container */}
          <div className="graphicBox topGraphic">
            <img src={cakeLogo} alt="V_Cakes Logo Design" className="portfolioAsset" />
          </div>

          {/* Decorative Connecting Line with Text Indicator */}
          <div className="connectingTrack">
            <span className="trackText">My first logo's</span>
            <div className="curvedLineSvg">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90,10 C30,20 20,80 80,90" stroke="#555555" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

          {/* Bottom Vector Asset Container */}
          <div className="graphicBox bottomGraphic">
            <img src={bookGraphic} alt="Minimalist Book Illustration" className="portfolioAsset" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;