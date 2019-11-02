import React from 'react';
import PropTypes from 'prop-types';

import Content from '../../data/content.json';

// i -> tier, j -> tech
const getTechStyle = (i, length) => {
  const style = {};
  if (i < length) style.paddingRight = '10px';
  return style;
};

const TechnologyList = ({ displayTech }) => (
  <div>
    {Object.keys(displayTech).map(tier => (
      <div
        key={tier}
        className="padding-b-30"
      >
        <div className="lg-text padding-b-15">
          {tier}
        </div>
        {displayTech[tier].sort().map((tech, j) => (
          <div
            key={tech}
            className="inline-block"
            style={getTechStyle(j, displayTech[tier].length)}
          >
            <div
              className="tech-list-item"
              style={{ backgroundColor: Content.colors['50'].cyan }}
            >
              { tech }
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

TechnologyList.propTypes = {
  displayTech: PropTypes.object.isRequired,
};

export default TechnologyList;
