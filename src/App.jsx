import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Experience from './components/experience';
import Branding from './components/Branding';
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Branding />
      <Contact />
    </div>
  );
}

export default App;