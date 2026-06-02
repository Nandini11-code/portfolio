import React from 'react';
import './Contact.css';
import contactImg from '../assets/girl2.png'; // Loads your asset directly from your workspace

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="contactContainer">
        
        {/* Left Column: Call to Action Details */}
        <div className="contactContent">
          <h2 className="contactMainTitle">Let's start a new chapter.</h2>
          
          <div className="contactSubText">
            <p>Let's build it. Reach out and let's make something beautiful.</p>
            <p className="highlightParagraph">i'd love to hear your projects!!</p>
          </div>

          {/* Styled Action Link Button */}
          <a href="mailto:your.email@example.com" className="getInTouchBtn">
            Get in Touch
          </a>
        </div>

        {/* Right Column: Graphic Character Illustration Frame */}
        <div className="contactImageWrapper">
          <img src={contactImg} alt="Character Illustration" className="contactGraphic" />
        </div>

      </div>
    </section>
  );
};

export default Contact;