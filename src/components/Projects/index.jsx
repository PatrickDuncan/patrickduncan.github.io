import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from '../common/Selection';

import Content from '../../data/content.json';
import Bash from '../../assets/banners/bash.png';
import Cleansio from '../../assets/banners/cleansio.png';
import RomanFury from '../../assets/banners/roman-fury.png';
import Shunc from '../../assets/banners/shunc.png';
import SoulEmission from '../../assets/banners/soul-emission.png';
import WhatToDo from '../../assets/banners/what-to-do.png';

const IMAGES = {
  bash: Bash,
  cleansio: Cleansio,
  romanFury: RomanFury,
  soulEmission: SoulEmission,
  shunc: Shunc,
  whatToDo: WhatToDo,
};

const SELECTED_COLOR = Content.colors['100'].yellow;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: -1,
      selection: -1,
    };
  }

  changeHover = hover => {
    this.setState({ hover });
  }

  changeSelected = newSelection => {
    const { selection } = this.state;
    const SLEEP_DUR = selection === -1 ? 0 : 400;
    const selectionChange = selection === newSelection ? -1 : newSelection;
    /* Set it to nothing to clear the state. Prevents the previous state to be
       mixed in with the new state when loading */
    this.setState({ selection: -1 });
    setTimeout(() => {
      this.setState({ selection: selectionChange });
    }, SLEEP_DUR);
  }

  render() {
    const { backgroundColor, panelColor } = this.props;
    const { hover, selection } = this.state;

    return (
      <div style={{ backgroundColor }}>
        <div className="section section-width">
          <Selection
            backgroundColor={panelColor}
            changeHover={this.changeHover}
            changeSelected={this.changeSelected}
            height="62px"
            hover={hover}
            options={Content.projects.map(project => ({
              image: IMAGES[project.image],
              timeRange: project.timeRange,
            }))}
            selectedColor={SELECTED_COLOR}
            selection={selection}
          />
          <ContentContainer
            backgroundColor={panelColor}
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
  panelColor: PropTypes.string.isRequired,
};

export default Projects;
