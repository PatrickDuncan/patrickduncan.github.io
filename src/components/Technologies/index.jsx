import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TechnolgyList from './TechnologyList';
import Search from './Search';

import technologies from '../../data/technologies.json';

const Technologies = ({ backgroundColor, panelColor }) => {
  const [displayTech, setDisplayTech] = useState(technologies);

  return (
    <div style={{ backgroundColor }}>
      <div className="section section-width">
        <div className="center desktop-width-60 full-mobile-width">
          <div className="paper" style={{ backgroundColor: panelColor }}>
            <TechnolgyList
              displayTech={displayTech}
            />
            <Search
              backgroundColor={backgroundColor}
              setDisplayTech={setDisplayTech}
              technologies={technologies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Technologies.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Technologies;
