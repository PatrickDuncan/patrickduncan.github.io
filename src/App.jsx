import React from 'react';

import Header from './components/common/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Education from './components/Education';
import About from './components/About';

import './css/normalize.css';
import './css/hover.css';
import './css/App.css';
import Content from './Content.json';

const COLORS_50 = Content.colors['50'];
const COLORS_100 = Content.colors['100'];
const COLORS_300 = Content.colors['300'];

const App = () => (
  <div>
    <Navbar backgroundColor={COLORS_300.cyan} />
    <Home />
    <div style={{ position: 'absolute', marginTop: '-45px' }}>
      <div id="Content" />
    </div>

    <Header text="Work" color={COLORS_100.yellow} />
    <Work
      backgroundColor={COLORS_50.cyan}
      panelColor={COLORS_50.yellow}
    />

    <Header text="Projects" color={COLORS_100.orange} />
    <Projects
      backgroundColor={COLORS_50.cyan}
      panelColor={COLORS_50.yellow}
    />

    <Header text="Technologies" color={COLORS_100.orange} />
    <Technologies
      backgroundColor={COLORS_50.cyan}
      panelColor={COLORS_50.yellow}
    />

    <Header text="Education" color={COLORS_100.orange} />
    <Education
      backgroundColor={COLORS_50.cyan}
      panelColor={COLORS_50.yellow}
    />

    <Header text="About" color={COLORS_100.orange} />
    <About
      backgroundColor={COLORS_50.cyan}
      panelColor={COLORS_50.yellow}
    />
  </div>
);

export default App;
