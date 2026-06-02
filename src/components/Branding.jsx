import React from 'react';
import './Branding.css';
import screenRecording from '../assets/branding-rec.mp4'; 
import brewRecording from '../assets/brew.mp4'; 

const Branding = () => {
  return (
    <section id="branding" className="brandingSection">
      <div className="brandingContainer">
        
        {/* Large Main Section Title */}
        <h2 className="brandingBgTitle">Branding</h2>
        
        {/* ==================== PROJECT 01: BOOKSHELFX ==================== */}
        <div className="projectItem">
          {/* Top Content Row: Subtitle & Description */}
          <div className="projectRow">
            <div className="projectNumber">01</div>
            <div className="projectDescription">
              <p>
                <strong>BookshelfX</strong> : A refined digital library hub for the modern reader. 
                This project prioritizes aesthetic design and intuitive functionality to transform 
                how users interact with their favorite books online.
              </p>
            </div>
          </div>

          {/* Bottom Content Row: Video Showcase */}
          <div className="videoWrapper">
            <video 
              src={screenRecording} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="showcaseVideo"
            />
          </div>
        </div>

        {/* ==================== PROJECT 02: BREWMASTER ==================== */}
        <div className="projectItem">
          {/* Top Content Row: Subtitle & Description */}
          <div className="projectRow">
            <div className="projectNumber">02</div>
            <div className="projectDescription">
              <p>
                <strong>BrewMaster</strong> : A modern coffee shop website crafted with clean visuals, smooth navigation, and responsive design to deliver an engaging and user-friendly café browsing experience.
              </p>
              {/* <p className="projectRepoLink">
                Project Repository: <a href="https://github.com" target="_blank" rel="noreferrer">BrewMaster GitHub Repository</a>
              </p> */}
            </div>
          </div>

          {/* Bottom Content Row: Video Showcase */}
          <div className="videoWrapper">
            <video 
              src={brewRecording} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="showcaseVideo"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Branding;