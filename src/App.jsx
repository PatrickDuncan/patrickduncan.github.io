import React from 'react';

import Header from './components/common/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';

import './css/App.css';
import './css/hover.css';
import Content from './Content.json';

const BG_COLORS = Content.colors['50'];
const HEADER_COLORS = Content.colors['100'];

const App = () => (
  <div>
    <Navbar />
    <Home />
    <div style={{ position: 'absolute', marginTop: '-45px' }}>
      <div id="Content" />
    </div>

    <Header text="Work" color={HEADER_COLORS.yellow} />
    <Work backgroundColor={BG_COLORS.cyan} />

    <Header text="Projects" color={HEADER_COLORS.orange} />
    <Projects backgroundColor={BG_COLORS.cyan} />

    <Header text="Skills" color={HEADER_COLORS.orange} />
    <Skills backgroundColor={BG_COLORS.cyan} />

    <Header text="Education" color={HEADER_COLORS.orange} />
    <Education backgroundColor={BG_COLORS.cyan} />

    <Header text="About" color={HEADER_COLORS.orange} />
    <About backgroundColor={BG_COLORS.cyan} />
  </div>
);

export default App;
