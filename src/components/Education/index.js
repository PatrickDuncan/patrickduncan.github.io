import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import Content from './../../Content';
import McMasterImg from "./../../assets/mac.png";

let thisElement;

const BG_COLOUR = Content.colors["50"].blue;
const EDUCATION = Content.education;

class Education extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.canUpdateNav !== nextProps.canUpdateNav
        || !isEqual(this.state, nextState);
  }

  scrollEvent() {
    const TOP = thisElement.getBoundingClientRect().top;
    if (TOP < 350 && TOP > 300 && this.props.canUpdateNav) {
      this.props.updateNav();
    }
  }

  componentDidMount() {
    this.scrollEvent.bind(this)();  // for page load
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  }

  render() {
    const { backgroundColor } = this.props;

    return (
      <div style={{ backgroundColor }} ref={ele => thisElement = ele}>
        <div className="section section-width">
          <div className="center">
            <div style={{backgroundColor: BG_COLOUR}} className="paper">
              <div className="xlg-text padding-b-20 text-center">
                { EDUCATION.degree }
              </div>
              <div className="padding-b-10 text-center no-select">
                <img src={ McMasterImg } height={ 80 } alt="mac" />
              </div>
              <div className="md-text padding-b-10 text-center">
                { EDUCATION.award }
              </div>
              <div className="md-text text-center">
                { EDUCATION.gpa }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default Education;
