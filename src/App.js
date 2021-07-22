import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Hero from './components/Hero';

import './App.css';

function App() {

  const [isHero, setHero] = useState(true);
  const [isAboutMe, setAboutMe] = useState(false);
  const [isProject, setProject] = useState(false);
  const [isResume, setResume] = useState(false);
  const [isContact, setContact] = useState(false);

  return (
      <div className="MainDiv">

        <Header
        isHero={isHero}
        setHero={setHero}
        isAboutMe={isAboutMe}
        setAboutMe={setAboutMe}
        isProject={isProject}
        setProject={setProject}
        isResume={isResume}
        setResume={setResume}
        isContact={isContact}
        setContact={setContact} />

        <main>
        {isHero && 
        <Hero 
        isHero={isHero}
        setHero={setHero}
        isProject={isProject}
        setProject={setProject}/>}

        {isAboutMe &&  <AboutMe></AboutMe>}
        {isContact &&  <Contact />}
        {isProject && <Project />}
        {isResume && <Resume />}
        </main>

        <Footer />

      </div>
  );
}

export default App;