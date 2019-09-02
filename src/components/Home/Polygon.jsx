import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Content from '../../data/content.json';

const COLORS = Object.keys(Content.colors['200']).map(key => (
  Content.colors['200'][key]
));
const COLORS_LENGTH = COLORS.length;

class Polygon extends Component {
  constructor(props) {
    super(props);
    this.fill = COLORS[Math.floor(Math.random() * COLORS_LENGTH)];
    this.opened = false;
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { open } = this.state;

    setTimeout(() => { this.setState({ open: !open }); }, 1200);
  }

  componentDidUpdate() {
    const { open } = this.state;

    if (this.opened) {
      this.opened = false;
      if (open) { // Change color
        this.fill = COLORS[Math.floor(Math.random() * COLORS_LENGTH)];
      }
      this.setState({ open: !open });
    } else {
      this.opened = true;
    }
  }

  positions() {
    const { points } = this.props;

    const VAL_X = Number(points.substring(0, 3));
    const VAL_Y = Number(points.substring(4, 7));
    const POS_X = VAL_X >= 350
      ? (Math.random() * 320) - 250
      : (Math.random() * 280) - 110;
    const POS_Y = VAL_Y >= 350
      ? (-Math.random() * 300) - 10
      : (Math.random() * 300) - 10;

    return { POS_X, POS_Y };
  }

  render() {
    const { points, reAnimate } = this.props;
    const { open } = this.state;
    const { POS_X, POS_Y } = this.positions();

    return (
      <Motion
        style={{
          x: spring(open ? 0 : POS_X, { stiffness: 100, dampling: 30 }),
          y: spring(open ? 0 : POS_Y, { stiffness: 100, dampling: 30 }),
        }}
      >
        {({ x, y }) => (
          <polygon
            className="hand"
            fill={this.fill}
            onClick={reAnimate}
            points={points}
            transform={`translate(${x} ${y})`}
          />
        )
        }
      </Motion>
    );
  }
}

Polygon.propTypes = {
  points: PropTypes.string.isRequired,
  reAnimate: PropTypes.func.isRequired,
};

export default Polygon;
