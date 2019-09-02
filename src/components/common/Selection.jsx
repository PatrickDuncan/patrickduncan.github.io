import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

const MOTION_PARAMS = { stiffness: 120, dampling: 0 };
const TOP = 22;

const Selection = ({
  backgroundColor,
  changeHover,
  changeSelected,
  height,
  hover,
  options,
  selection,
  selectedColor,
}) => (
  <Motion style={{ top: spring(selection > -1 ? 0 : TOP, MOTION_PARAMS) }}>
    {({ top }) => (
      <div className="full-inline-block">
        <div
          className="selection-container center hand box-shadow"
          style={{ backgroundColor, top }}
        >
          <div className="selection-scroll">
            <div style={{ width: `${170 * options.length}px` }}>
              {options.map((option, i) => (
                <div
                  className={
                    `selection-option pull-left text-center ${
                      i < options.length - 1 ? 'border-right' : ''}`
                  }
                  key={option.timeRange}
                  onClick={() => { changeSelected(i); }}
                  onKeyPress={() => {}}
                  onMouseEnter={() => { changeHover(i); }}
                  onMouseLeave={() => { changeHover(-1); }}
                  role="button"
                  style={
                    selection === i || hover === i
                      ? { backgroundColor: selectedColor }
                      : {}}
                >
                  <img src={option.image} alt="logo" style={{ height }} />
                  <div className="padding-t-5 selection-date-text">
                    { option.timeRange }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </Motion>
);

Selection.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  changeHover: PropTypes.func.isRequired,
  changeSelected: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  hover: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  selection: PropTypes.number.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default Selection;
