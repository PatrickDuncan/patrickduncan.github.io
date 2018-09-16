import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import Content from './../../Content.json';
import McMasterImg from './../../assets/mac.png';

let thisElement;

const BG_COLOUR = Content.colors['50'].blue;
const EDUCATION = Content.education;

class Education extends Component {
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
            <div style={{ backgroundColor: BG_COLOUR }} className="paper">
              <div className="xlg-text padding-b-20 text-center line-height-30">
                { EDUCATION.degree }
              </div>
              <div className="padding-b-10 text-center no-select">
                <img src={McMasterImg} height={80} alt="mac" />
              </div>
              <div className="md-text padding-b-10 text-center">
                { EDUCATION.award }
              </div>
              <div className="md-text padding-b-20 text-center">
                { EDUCATION.gpa }
              </div>
              {EDUCATION.teachingPositions.map(position => (
                <div className="sm-text text-center">
                  { position[0] } ◆ { position[1] } ◆ { position[2] }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  canUpdateNav: PropTypes.bool.isRequired,
  updateNav: PropTypes.func.isRequired,
};

export default Education;
