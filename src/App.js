import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Hero from './components/Hero';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="MainDiv">

        <Header />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;