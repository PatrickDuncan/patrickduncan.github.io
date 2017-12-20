import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import ProfileImg from './../../assets/profile.jpg';
import Content from './../../Content';

const BG_COLOR = Content.colors["50"].lime;

class About extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.canUpdateNav !== nextProps.canUpdateNav
        || !isEqual(this.state, nextState);
  }

  render() {
    const { backgroundColor } = this.props;

    return (
      <div style={{ backgroundColor }}>
        <div className="section section-width">
          <div className="center no-select" style={{marginBottom: "-25px"}}>
            <img
              alt="profile"
              className="circle"
              src={ ProfileImg }
              width="90px"
            />
          </div>
          <div
            className="xsm-text center about-paragraph"
            style={{backgroundColor: BG_COLOR}}
          >
            <div className="paper">
              "{ Content.about }"
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default About;
