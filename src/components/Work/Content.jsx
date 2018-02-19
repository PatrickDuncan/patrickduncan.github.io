import React from 'react';
import PropTypes from 'prop-types';

const WorkContent = ({ info }) => (
  <div className="text-center">
    <div className="xlg-text underline">
      { info.company }
    </div>
    <div className="lg-text padding-t-20">
      { info.position }
    </div>
    <div className="sm-text padding-t-5">
      { info.timeRange }
    </div>
    <div className="center">
      <div className="sm-text padding-t-10 selection-content-container">
        {info.description.map(item => (
          <div key={item} style={{ textAlign: 'left' }}>
            <div
              className="p xsm-text"
              style={{ display: 'inline-block', textAlign: 'left' }}
            >
              <div className="pull-left selection-content-diamond">
                ◆
              </div>
              <div className="pull-left selection-content-item">
                { item }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

WorkContent.propTypes = {
  info: PropTypes.shape({
    company: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    position: PropTypes.string.isRequired,
    timeRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkContent;
