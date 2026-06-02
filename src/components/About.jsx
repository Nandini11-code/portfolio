import React from 'react';
import './About.css';
import aboutImg from '../assets/nandinipic.png'; // Make sure your photo is named exactly this inside src/assets

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        
        {/* Left Side Column: Text content */}
        <div className="aboutContent">
          <h2 className="aboutTitle">About me</h2>
          
          <div className="aboutText">
            <p>I’m a beginner web and graphic designer passionate about creating clean and modern designs.</p>
            <p>I enjoy building simple, user-friendly websites and exploring creative ideas through design. Currently,
               I’m learning web design and improving my skills by working on personal projects.</p>
            <p>I love creating minimal and aesthetic visuals that give a smooth user experience.</p>
            
          </div>

          {/* Sub-grid block for Skills and Tools items */}
          <div className="skillsToolsGrid">
            <div className="skillsBlock">
              <h2>Skills</h2>
              <ul>
                <li>Web Design</li>
                <li>UI Design</li>
                <li>Landing Page Design</li>
                <li>Responsive Design</li>
                <li>Graphic Design</li>
              
              </ul>
            </div>
            
            <div className="toolsBlock">
              <h2>Tools</h2>
              <ul>
                <li>Figma</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side Column: Profile Picture */}
        <div className="aboutImageWrapper">
          <img 
            src={aboutImg} 
            alt="Nandini Solanki Profile" 
            className="aboutProfilePic" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;