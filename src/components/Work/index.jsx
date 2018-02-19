import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from './../common/Selection';

import Content from './../../Content.json';
import AiroImg from './../../assets/airo.png';
import BellImg from './../../assets/bell.png';
import IngleImg from './../../assets/ingle.png';

const BG_COLOUR = Content.colors['50'].cyan;
const SELECTED_COLOUR = Content.colors['100'].cyan;

let thisElement;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: -1,
      selection: -1,
    };
  }

  componentDidMount() {
    this.scrollEvent(); // for initial page load
    window.addEventListener('scroll', this.scrollEvent);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.canUpdateNav !== nextProps.canUpdateNav
        || this.props.canResetNav !== nextProps.canResetNav
        || !isEqual(this.state, nextState);
  }

  changeHover = hover => {
    this.setState({ hover });
  }

  changeSelected = selection => {
    this.setState({ selection });
  }

  scrollEvent = () => {
    const TOP = thisElement.getBoundingClientRect().top;
    if (TOP < 350 && TOP > 300 && this.props.canUpdateNav) {
      this.props.updateNav();
    } else if (TOP >= 350 && this.props.resetNav) {
      this.props.resetNav();
    }
  }

  updateElementRef = ele => {
    thisElement = ele;
  }

  render() {
    const { backgroundColor } = this.props;
    const { hover, selection } = this.state;

    return (
      <div style={{ backgroundColor }}>
        <div className="section section-width" ref={this.updateElementRef}>
          <Selection
            backgroundColor={BG_COLOUR}
            changeHover={this.changeHover}
            changeSelected={this.changeSelected}
            height="34px"
            hover={hover}
            options={[
              { image: BellImg, timeRange: Content.work[0].timeRange },
              { image: AiroImg, timeRange: Content.work[1].timeRange },
              { image: IngleImg, timeRange: Content.work[2].timeRange },
            ]}
            selectedColor={SELECTED_COLOUR}
            selection={selection}
          />
          <ContentContainer
            backgroundColor={BG_COLOUR}
            changeSelected={this.changeSelected}
            selection={selection}
          />
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  canUpdateNav: PropTypes.bool.isRequired,
  canResetNav: PropTypes.bool.isRequired,
  updateNav: PropTypes.func.isRequired,
  resetNav: PropTypes.func.isRequired,
};

export default Work;
