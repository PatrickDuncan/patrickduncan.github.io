import React from 'react';
import PropTypes from 'prop-types';

import Content from './../../Content.json';

const ANIMATION_DURATION = '12s';
const SPINNING_COLOR = Content.colors['200'].cyan;

const RotatingDiamonds = ({ reAnimate }) => (
  <svg>
    <polygon
      className="hand"
      fill={SPINNING_COLOR}
      onClick={reAnimate}
      points="585,95 620,138 585,181 550,138"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 585 138"
        to="360 585 138"
        dur={ANIMATION_DURATION}
        repeatCount="indefinite"
      />
    </polygon>
    <polygon
      className="hand"
      fill={SPINNING_COLOR}
      onClick={reAnimate}
      points="165,95 200,138 165,181 130,138"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="90 165 138"
        to="450 165 138"
        dur={ANIMATION_DURATION}
        repeatCount="indefinite"
      />
    </polygon>
    <polygon
      className="hand"
      fill={SPINNING_COLOR}
      onClick={reAnimate}
      points="165,611 200,654 165,697 130,654"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="180 165 654"
        to="540 165 654"
        dur={ANIMATION_DURATION}
        repeatCount="indefinite"
      />
    </polygon>
    <polygon
      className="hand"
      fill={SPINNING_COLOR}
      onClick={reAnimate}
      points="585,611 620,654 585,697 550,654"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="270 585 654"
        to="630 585 654"
        dur={ANIMATION_DURATION}
        repeatCount="indefinite"
      />
    </polygon>
  </svg>
);

RotatingDiamonds.propTypes = {
  reAnimate: PropTypes.func.isRequired,
};

export default RotatingDiamonds;
