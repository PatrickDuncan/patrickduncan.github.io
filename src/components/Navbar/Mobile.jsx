import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BarsLogo from 'react-icons/lib/md/dehaze';

import MobileIconList from './MobileIconList';

const MOTION_PARAMS = { stiffness: 170, dampling: 0 };
const HEIGHT = 29;
const MOBILE_HEIGHT = HEIGHT * 3;

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
    };
  }

  render() {
    const { backgroundColor } = this.props;
    const { showIcons } = this.state;

    return (
      <div id="mobile-navbar">
        <div
          className="hand pull-right hamburger"
          onClick={() => { this.setState({ showIcons: !showIcons }); }}
          onKeyPress={() => {}}
          role="button"
          style={{ fontSize: '26px' }}
        >
          <BarsLogo />
        </div>
        <Motion
          style={{
            height: spring(showIcons ? MOBILE_HEIGHT : 0, MOTION_PARAMS),
          }}
        >
          {({ height }) => (
            <MobileIconList backgroundColor={backgroundColor} height={height} />
          )}
        </Motion>
      </div>
    );
  }
}

Mobile.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default Mobile;
