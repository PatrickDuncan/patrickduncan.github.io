import React from 'react';
import PropTypes from 'prop-types';

import Content from './../../Content.json';
import ProfileImg from './../../assets/profile.jpg';

const BG_COLOR = Content.colors['50'].yellow;

const About = ({ backgroundColor }) => (
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
        style={{ backgroundColor: BG_COLOR }}
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
};

export default About;
