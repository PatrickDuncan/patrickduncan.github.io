import React, { Component } from 'react';

import Polygon from './Polygon';
import RotatingDiamonds from './RotatingDiamonds';

import Content from '../../Content.json';

const SIZE1 = 750;
const SIZE2 = 850;
const DIFF = (SIZE1 - SIZE2) / 2;
const TEXT_STYLE = { fontSize: 80, fontWeight: '600' };

let reanimating = false;

class DiamondSvg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reanimate: true,
    };
  }

  componentDidMount() {
    reanimating = false;
  }

  shouldComponentUpdate() {
    return reanimating;
  }

  reAnimate = () => {
    reanimating = true;

    this.setState({ reanimate: !this.state.reanimate });
  }

  render() {
    return (
      <div className="table-cell">
        <svg
          id="diamond-svg"
          width={`${SIZE1}px`}
          height={`${SIZE1}px`}
          viewBox={`${DIFF} ${DIFF} ${SIZE2} ${SIZE2}`}
          className="no-select"
        >
          {Content.diamondSvg.points.map(points => (
            <Polygon
              key={points}
              points={points}
              reAnimate={this.reAnimate}
            />
          ))}
          <text
            className="hand"
            fill="#000"
            onClick={this.reAnimate}
            style={TEXT_STYLE}
            x="218"
            y="329"
          >
            PATRICK
          </text>
          <text
            className="hand"
            fill="#000"
            onClick={this.reAnimate}
            style={TEXT_STYLE}
            x="197"
            y="429"
          >
            DIAMOND
          </text>
          <text
            className="hand"
            fill="#000"
            onClick={this.reAnimate}
            style={TEXT_STYLE}
            x="214"
            y="529"
          >
            DUNCAN
          </text>
          <RotatingDiamonds reAnimate={this.reAnimate} />
        </svg>
      </div>
    );
  }
}

export default DiamondSvg;
