import React from 'react';
import PropTypes from 'prop-types';

import GooglePlayImg from './../../assets/google-play-badge.png';
import SoulGameplayImg from './../../assets/soul-pic.png';
import RomanGameplayImg from './../../assets/roman.png';
import WtdScreenImg from './../../assets/wtd-screen.png';

const GooglePlayLink = () => (
  <img
    className="padding-t-5"
    height="34px"
    src={GooglePlayImg}
    alt="google-play"
  />
);

const LinkText = ({ text }) => (
  <div className="padding-t-5">
    { text }
  </div>
);

const getImage = image => {
  switch (image) {
    case 'soul-pic':
      return SoulGameplayImg;
    case 'wtd-screen':
      return WtdScreenImg;
    case 'roman':
      return RomanGameplayImg;
    default:
      return null;
  }
};

const getLinkArray = info => (
  info.links.map(link => (
    <a
      className="bold"
      href={link.link}
      key={link.text}
      target="_blank"
      rel="noreferrer noopener"
    >
      { link.text === 'Google Play'
      ? <GooglePlayLink />
      : <LinkText text={link.text} /> }
    </a>
  ))
);

const ProjectContent = ({ info }) => (
  <div className="text-center selection-content-container">
    <div className="xlg-text underline">
      { info.name }
    </div>
    { info.blub ?
      <div className="lg-text padding-t-20">
        { info.blurb }
      </div>
    : null }
    <div className="sm-text padding-t-5">
      { info.timeRange }
    </div>
    <div className="text-left xsm-text padding-t-12">
      { info.description }
    </div>
    <div className="xsm-text padding-t-10">
      <span className="bold">Languages: </span>
      { info.languages }
    </div>
    { info.tools ?
      <div className="xsm-text">
        <span className="bold">Tools: </span>
        { info.tools }
      </div>
    : null }
    <div className="center sm-text padding-t-10">
      { getLinkArray(info) }
    </div>
    { info.image ?
      <img
        alt="project"
        className="padding-t-20 selection-content-container-image"
        src={getImage(info.image)}
      />
    : null}
  </div>
);

ProjectContent.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    timeRange: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    tools: PropTypes.string.isRequired,
  }).isRequired,
};

LinkText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectContent;
