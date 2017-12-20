import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { color, text} = this.props;
    
    return (
      <div className="header no-select default-pointer">
        <h1 className="center" style={{ color }}>
          <div className="hvr-grow">
            { text }
          </div>
        </h1>
      </div>
    );
  }
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Header;
