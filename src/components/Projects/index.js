import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import Content from './../../Content';
import ProjectContent from './Content';
import Selection from './../common/Selection';
import SoulImg from './../../assets/soul.png';
import WtdImg from './../../assets/wtd.png';
import RomeImg from './../../assets/roman-fury.png';

const BG_COLOUR = Content.colors["50"].green;
const SELECTED_COLOUR = Content.colors["100"].green;

let thisElement;

class Projects extends Component {
  state = {
    hover: -1,
    selection: -1
  }

  changeHover(hover) {
    this.setState({ hover });
  }

  changeSelected(selection) {
    this.setState({ selection });
  }

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
    const { hover, selection } = this.state;

    return (
      <div style={{ backgroundColor }}>
        <div className="section section-width" ref={ele => thisElement = ele}>
          <Selection
            backgroundColor={ BG_COLOUR }
            changeHover={ this.changeHover.bind(this) }
            changeSelected={ this.changeSelected.bind(this) }
            height="62px"
            hover={ hover }
            options={[
              {image: SoulImg, timeRange: Content.projects[0].timeRange},
              {image: WtdImg, timeRange: Content.projects[1].timeRange},
              {image: RomeImg, timeRange: Content.projects[2].timeRange}
            ]}
            selectedColor={ SELECTED_COLOUR }
            selection={ selection }
          />
          <ProjectContent
            backgroundColor={ BG_COLOUR }
            changeSelected={ this.changeSelected.bind(this) }
            selection={ selection }
          />
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default Projects;
