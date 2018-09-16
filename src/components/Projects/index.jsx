import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from './../common/Selection';
import SoulImg from './../../assets/soul.png';
import WtdImg from './../../assets/wtd.png';
import RomeImg from './../../assets/roman-fury.png';

import Content from './../../Content.json';

const SELECTED_COLOUR = Content.colors['100'].yellow;

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
    const selectionChange = selection === newSelection ? -1 : newSelection;

    this.setState({ selection: selectionChange });
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
            options={[
              { image: SoulImg, timeRange: Content.projects[0].timeRange },
              { image: WtdImg, timeRange: Content.projects[1].timeRange },
              { image: RomeImg, timeRange: Content.projects[2].timeRange },
            ]}
            selectedColor={SELECTED_COLOUR}
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
