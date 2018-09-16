import React from 'react';
import Scrollchor from 'react-scrollchor';

import Content from './../../Content.json';

const HEIGHT = 26;
const WIDTH = 40;

const ScrollDiamond = () => (
  <div id="scroll-nav" className="width-100 text-center">
    <Scrollchor to="#Content">
      <svg
        className="no-select"
        fill={Content.colors['200'].cyan}
        height={`${HEIGHT}px`}
        width={`${WIDTH}px`}
      >
        <polygon
          className="hand"
          points={`${WIDTH / 2},0 ${WIDTH},0 ${WIDTH / 2},${HEIGHT} 0,0`}
        />
      </svg>
    </Scrollchor>
  </div>
);

export default ScrollDiamond;
