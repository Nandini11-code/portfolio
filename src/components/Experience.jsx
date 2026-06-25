import React from 'react';
import './Experience.css';
import cakeLogo from '../assets/vcakes.png';  
import bookGraphic from '../assets/books.png'; 
import poppiVideo from '../assets/The.mp4'; 

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

        {/* Right Column: Graphic Showcases */}
        <div className="experienceGraphics">
          
          {/* Top Logo Asset Container */}
          <div className="graphicBox topGraphic">
            <img src={cakeLogo} alt="V_Cakes Logo Design" className="portfolioAsset" />
          </div>

          {/* Center Video Asset Container (Poppi Soda) */}
          <div className="graphicBox centerGraphic">
            <video 
              src={poppiVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="portfolioVideoAsset"
            />
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