import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from './../common/Selection';

import Content from './../../Content.json';
import Airo from './../../assets/banners/airo.png';
import Bell from './../../assets/banners/bell.png';
import Ingle from './../../assets/banners/ingle.png';

const IMAGES = {
  airo: Airo,
  bell: Bell,
  ingle: Ingle,
};
const SELECTED_COLOR = Content.colors['100'].yellow;

class Work extends Component {
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
            height="34px"
            hover={hover}
            options={Content.work.map(work => ({
              image: IMAGES[work.image],
              timeRange: work.timeRange,
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

Work.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Work;
