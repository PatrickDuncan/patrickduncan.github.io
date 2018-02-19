import React from 'react';
import PropTypes from 'prop-types';

import Desktop from './Desktop';
import Mobile from './Mobile';

import Content from './../../Content.json';

const COLORS = Content.colors;
const COLOR_MAP = [
  'deep_orange', 'cyan', 'green', 'orange', 'blue', 'lime',
];

const Navbar = ({ index }) => {
  const backgroundColor = COLORS['300'][COLOR_MAP[index]];

  return (
    <div className="nav-height" id="Navbar" style={{ backgroundColor }}>
      <div className="center section-width">
        <Desktop />
        <Mobile backgroundColor={backgroundColor} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Navbar;
