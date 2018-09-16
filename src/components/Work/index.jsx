import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentContainer from './ContentContainer';
import Selection from './../common/Selection';

import Content from './../../Content.json';
import AiroImg from './../../assets/airo.png';
import BellImg from './../../assets/bell.png';
import IngleImg from './../../assets/ingle.png';

const SELECTED_COLOUR = Content.colors['100'].yellow;

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
            options={[
              { image: BellImg, timeRange: Content.work[0].timeRange },
              { image: AiroImg, timeRange: Content.work[1].timeRange },
              { image: IngleImg, timeRange: Content.work[2].timeRange },
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

Work.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Work;
