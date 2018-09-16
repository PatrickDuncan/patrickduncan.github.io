import React from 'react';
import PropTypes from 'prop-types';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Navbar = ({ backgroundColor }) => (
  <div className="nav-height" id="Navbar" style={{ backgroundColor }}>
    <div className="center section-width">
      <Desktop />
      <Mobile backgroundColor={backgroundColor} />
    </div>
  </div>
);

Navbar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default Navbar;
