import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from './../common/Selection';
import SoulImg from './../../assets/soul.png';
import WtdImg from './../../assets/wtd.png';
import RomeImg from './../../assets/roman-fury.png';

import Content from './../../Content.json';

const BG_COLOUR = Content.colors['50'].green;
const SELECTED_COLOUR = Content.colors['100'].green;

let thisElement;

class Projects extends Component {
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
           || !isEqual(this.state, nextState);
  }

  scrollEvent = () => {
    const TOP = thisElement.getBoundingClientRect().top;
    if (TOP < 350 && TOP > 300 && this.props.canUpdateNav) {
      this.props.updateNav();
    }
  }

  changeHover = hover => {
    this.setState({ hover });
  }

  changeSelected = selection => {
    this.setState({ selection });
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
            height="62px"
            hover={hover}
            options={[
              { image: SoulImg, timeRange: Content.projects[0].timeRange },
              { image: WtdImg, timeRange: Content.projects[1].timeRange },
              { image: RomeImg, timeRange: Content.projects[2].timeRange },
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

Projects.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  canUpdateNav: PropTypes.bool.isRequired,
  updateNav: PropTypes.func.isRequired,
};

export default Projects;
