import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';
import Search from './Search';

import Content from './../../Content.json';

const BG_COLOUR = Content.colors['50'].yellow;

const Skills = ({ backgroundColor }) => (
  <div style={{ backgroundColor }}>
    <div className="section section-width">
      <div className="center">
        <div className="paper" style={{ backgroundColor: BG_COLOUR }}>
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
};

export default Skills;
