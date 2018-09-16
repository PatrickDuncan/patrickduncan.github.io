import React from 'react';
import PropTypes from 'prop-types';

import Content from './../../Content.json';
import McMasterImg from './../../assets/mac.png';

const EDUCATION = Content.education;

const Education = ({ backgroundColor, panelColor }) => (
  <div style={{ backgroundColor }}>
    <div className="section section-width">
      <div className="center">
        <div style={{ backgroundColor: panelColor }} className="paper">
          <div className="xlg-text padding-b-20 text-center line-height-30">
            { EDUCATION.degree }
          </div>
          <div className="padding-b-10 text-center no-select">
            <img src={McMasterImg} height={80} alt="mac" />
          </div>
          <div className="md-text padding-b-10 text-center">
            { EDUCATION.award }
          </div>
          <div className="md-text padding-b-20 text-center">
            { EDUCATION.gpa }
          </div>
          <div className="md-text padding-b-5 text-center underline">
            { EDUCATION.teachingTitle }
          </div>
          {EDUCATION.teachingPositions.map(position => (
            <div className="sm-text text-center" key={position[0]}>
              { position[0] } ◆ { position[1] }
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

Education.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Education;
