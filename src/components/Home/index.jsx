import React, { Component } from 'react';

import DiamondSvg from './DiamondSvg';
import ScrollDiamond from './ScrollDiamond';

class Home extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="Home">
        <ScrollDiamond />
        <DiamondSvg />
      </div>
    );
  }
}

export default Home;
