import React, { Component } from 'react';

import './css/App.css';
import './css/hover.css';
import Header from './components/common/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';
import Content from './Content';

const COLORS = Content.colors["200"];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navIndex: 0
    }
  }

  updateNav(navIndex) {
    this.setState({ navIndex });
  }

  render() {
    const { navIndex } = this.state;

    return (
      <div>
        <Navbar index={ navIndex } />
        <Home />
        <div style={{position: "absolute", marginTop: "-45px" }}>
          <div id="Content" />
        </div>
        <Header text="Work" color={ COLORS.cyan } />
        <Work
          backgroundColor={ COLORS.cyan }
          canUpdateNav={ navIndex !== 1 }
          canResetNav={ navIndex !== 0 }
          resetNav={ this.updateNav.bind(this, 0) }
          updateNav={ this.updateNav.bind(this, 1) }
        />
        <Header text="Projects" color={ COLORS.green } />
        <Projects
          backgroundColor={ COLORS.green }
          canUpdateNav={ navIndex !== 2 }
          updateNav={ this.updateNav.bind(this, 2) }
        />
        <Header text="Skills" color={ COLORS.orange } />
        <Skills
          backgroundColor={ COLORS.orange }
          canUpdateNav={ navIndex !== 3 }
          updateNav={ this.updateNav.bind(this, 3) }
        />
        <Header text="Education" color={ COLORS.blue } />
        <Education
          backgroundColor={ COLORS.blue }
          canUpdateNav={ navIndex !== 4 }
          updateNav={ this.updateNav.bind(this, 4) }
        />
        <Header text="About" color={ COLORS.lime } />
        <About
          backgroundColor={ COLORS.lime }
          canUpdateNav={ navIndex !== 5 }
          updateNav={ this.updateNav.bind(this, 5) }
        />
      </div>
    );
  }
}

export default App;
