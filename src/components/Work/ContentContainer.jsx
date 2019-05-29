import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import ContentComponent from './Content';

import Content from '../../Content.json';

const MOTION_PARAMS = { stiffness: 100, dampling: 30 };

const ContentContainer = ({ backgroundColor, changeSelected, selection }) => {
  const info = selection > -1 && Content.work[selection];

  return (
    <Motion
      style={{
        opacity: spring(selection > -1 ? 1 : -1, MOTION_PARAMS),
        padding: spring(selection > -1 ? 30 : 0, MOTION_PARAMS),
      }}
    >
      {({ opacity, padding }) => (
        <div className="center padding-t-10" style={{ opacity }}>
          <div
            className="hand no-select"
            onClick={() => { changeSelected(-1); }}
            onKeyPress={() => {}}
            role="button"
            style={{
              diplay: 'absolute',
              float: 'right',
              fontSize: '14px',
              padding: '20px 25px 0px 0px',
            }}
          >
            ✕
          </div>
          <div
            className="paper"
            style={{ backgroundColor, padding: `${padding}px` }}
          >
            {selection > -1 ? <ContentComponent info={info} /> : null}
          </div>
        </div>
      )}
    </Motion>
  );
};

ContentContainer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
  selection: PropTypes.number.isRequired,
};

export default ContentContainer;
