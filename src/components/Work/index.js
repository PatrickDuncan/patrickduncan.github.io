import React, { Component } from 'react';
import { isEqual } from 'underscore';
import PropTypes from 'prop-types';

import Content from './../../Content';
import WorkContent from './Content';
import Selection from './../common/Selection';
import AiroImg from './../../assets/airo.png';
import BellImg from './../../assets/bell.png';
import IngleImg from './../../assets/ingle.png';

const BG_COLOUR = Content.colors["50"].cyan;
const SELECTED_COLOUR = Content.colors["100"].cyan;

let thisElement;

class Work extends Component {
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
        || this.props.canResetNav !== nextProps.canResetNav
        || !isEqual(this.state, nextState);
  }

  scrollEvent() {
    const TOP = thisElement.getBoundingClientRect().top;
    if (TOP < 350 && TOP > 300 && this.props.canUpdateNav) {
      this.props.updateNav();
    } else if (TOP >= 350 && this.props.resetNav) {
      this.props.resetNav();
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
            height="34px"
            hover={ hover }
            options={[
              {image: BellImg, timeRange: Content.work[0].timeRange},
              {image: AiroImg, timeRange: Content.work[1].timeRange},
              {image: IngleImg, timeRange: Content.work[2].timeRange}
            ]}
            selectedColor={ SELECTED_COLOUR }
            selection={ selection }
          />
          <WorkContent
            backgroundColor={ BG_COLOUR }
            changeSelected={ this.changeSelected.bind(this) }
            selection={ selection }
          />
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default Work;
