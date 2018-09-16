import React from 'react';

import Desktop from './Desktop';
import Mobile from './Mobile';

import Content from './../../Content.json';

const backgroundColor = Content.colors['200'].cyan;

const Navbar = () => (
  <div className="nav-height" id="Navbar" style={{ backgroundColor }}>
    <div className="center section-width">
      <Desktop />
      <Mobile backgroundColor={backgroundColor} />
    </div>
  </div>
);

export default Navbar;
