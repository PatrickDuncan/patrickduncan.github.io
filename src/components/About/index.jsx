import React from 'react';
import PropTypes from 'prop-types';

import Content from './../../Content.json';
import ProfileImg from './../../assets/misc/profile.jpg';

const About = ({ backgroundColor, panelColor }) => (
  <div style={{ backgroundColor }}>
    <div className="section section-width">
      <div className="center no-select" style={{ marginBottom: '-25px' }}>
        <img
          alt="profile"
          className="circle"
          src={ProfileImg}
          width="90px"
        />
      </div>
      <div
        className="xsm-text center about-paragraph"
        style={{ backgroundColor: panelColor }}
      >
        <div className="paper">
          {`"${Content.about}"`}
        </div>
      </div>
    </div>
  </div>
);

About.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default About;
