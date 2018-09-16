import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';
import Search from './Search';

const Skills = ({ backgroundColor, panelColor }) => (
  <div style={{ backgroundColor }}>
    <div className="section section-width">
      <div className="center">
        <div className="paper" style={{ backgroundColor: panelColor }}>
          <div className="padding-l-30 move-graph-up">
            <Graph />
          </div>
          <div className="width-100 padding-t-20">
            <Search backgroundColor={backgroundColor} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Skills.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Skills;
