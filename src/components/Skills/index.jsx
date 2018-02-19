import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import Graph from './Graph';
import Search from './Search';

import Content from './../../Content.json';

const BG_COLOUR = Content.colors['50'].orange;

let thisElement;

class Skills extends Component {
  componentDidMount() {
    this.scrollEvent(); // for initial page load
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.canUpdateNav !== nextProps.canUpdateNav
        || !isEqual(this.state, nextState);
  }

  scrollEvent = () => {
    const TOP = thisElement.getBoundingClientRect().top;
    if (TOP < 350 && TOP > 300 && this.props.canUpdateNav) {
      this.props.updateNav();
    }
  }

  updateElementRef = ele => {
    thisElement = ele;
  }

  render() {
    const { backgroundColor } = this.props;

    return (
      <div style={{ backgroundColor }} ref={this.updateElementRef}>
        <div className="section section-width">
          <div className="center">
            <div className="paper" style={{ backgroundColor: BG_COLOUR }}>
              <div className="padding-l-30 move-graph-up">
                <Graph />
              </div>
              <div className="width-100 padding-t-20">
                <Search backgroundColor={backgroundColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  canUpdateNav: PropTypes.bool.isRequired,
  updateNav: PropTypes.func.isRequired,
};

export default Skills;
