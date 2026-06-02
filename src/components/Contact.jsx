import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../assets/girl2.png'; // Loads your asset directly from your workspace

const Contact = () => {
  // State to manage showing your contact details
  const [showDetails, setShowDetails] = useState(false);

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

          {/* Conditional Rendering: Show button OR social info grid */}
          {!showDetails ? (
            <button 
              onClick={() => setShowDetails(true)} 
              className="getInTouchBtn"
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Get in Touch
            </button>
          ) : (
            <div className="contactLinksGrid animateFadeIn">
              <div className="contactGridItem">
                <span className="gridLabel">Email</span>
                <a href="mailto:nandinisolanki1011@gmail.com" className="gridLink">
                  nandinisolanki1011@gmail.com
                </a>
              </div>

              <div className="contactGridItem">
                <span className="gridLabel">Phone</span>
                <a href="tel:+918956275895" className="gridLink">
                  +91 89562 75895
                </a>
              </div>

              <div className="contactGridItem">
                <span className="gridLabel">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/nandini-solanki-5bb727366/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gridLink"
                >
                  nandini-solanki-5bb727366
                </a>
              </div>

              <div className="contactGridItem">
                <span className="gridLabel">GitHub</span>
                <a 
                  href="https://github.com/Nandini11-code" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gridLink"
                >
                  Nandini11-code
                </a>
              </div>
            </div>
          )}
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