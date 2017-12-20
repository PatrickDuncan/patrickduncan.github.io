import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Content from './../../Content';
import GooglePlayImg from './../../assets/google-play-badge.png';
import SoulGameplayImg from './../../assets/soul-pic.png';
import RomanGameplayImg from './../../assets/roman.png';
import WtdScreenImg from './../../assets/wtd-screen.png';

const MOTION_PARAMS = {stiffness: 100, dampling: 30};

class ProjectContent extends Component {
  getImage(image) {
    switch (image) {
      case "soul-pic":
        return SoulGameplayImg;
      case "wtd-screen":
        return WtdScreenImg;
      case "roman":
        return RomanGameplayImg;
      default:
        return null;
    }
  }

  render() {
    const { backgroundColor, changeSelected, selection } = this.props;
    const PROJECTS = selection > -1 && Content.projects[selection];

    return (
      <Motion
        style={{
          opacity: spring(selection > -1 ? 1 : -1, MOTION_PARAMS),
          padding: spring(selection > -1 ? 30 : 0, MOTION_PARAMS)
        }}
      >
        {({opacity, padding}) => (
          <div className="center padding-t-10" style={{ opacity }}>
            <div
              className="hand no-select"
              onClick={() => {changeSelected(-1)}}
              style={{
                diplay: "absolute",
                float: "right",
                fontSize: "14px",
                padding: "20px 25px 0px 0px"
              }}
            >
              ✕
            </div>
            <div
              className="paper"
              style={{ backgroundColor, padding: padding + "px" }}
            >
              { selection > -1
              ? <div className="text-center selection-content-container">
                  <div className="xlg-text underline">
                    { PROJECTS.name }
                  </div>
                  <div className="lg-text padding-t-20">
                    { PROJECTS.blurb }
                  </div>
                  <div className="sm-text padding-t-5">
                    { PROJECTS.timeRange }
                  </div>
                  <div className="text-left xsm-text padding-t-12">
                    { PROJECTS.description }
                  </div>
                  <div className="xsm-text padding-t-10">
                    <span className="bold">Languages: </span>
                    { PROJECTS.languages }
                  </div>
                  <div className="xsm-text">
                    <span className="bold">Tools: </span>
                    { PROJECTS.tools }
                  </div>
                  <div className="center sm-text padding-t-10">
                    {PROJECTS.links.map((link, i) => (
                      <a
                        className="bold"
                        href={ link.link }
                        key={ i }
                        target="_blank"
                      >
                        { link.text === "Google Play"
                        ? <img
                            className="padding-t-5"
                            height="34px"
                            src={ GooglePlayImg } alt="google-play"
                          />
                        : <div className="padding-t-5">
                            { link.text }
                          </div>}
                      </a>
                    ))}
                  </div>
                  <img
                    alt="project"
                    className="padding-t-20 selection-content-container-image"
                    src={ this.getImage(PROJECTS.image) }
                  />
                </div>
              : null}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

ProjectContent.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
  selection: PropTypes.number.isRequired
}

export default ProjectContent;
