import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import EmailLogo from 'react-icons/lib/md/email';
import GitLogo from 'react-icons/lib/fa/github';
import LinkedinLogo from 'react-icons/lib/fa/linkedin';
import MusicLogo from 'react-icons/lib/ti/notes';
import TwitterLogo from 'react-icons/lib/ti/social-twitter';
import BarsLogo from 'react-icons/lib/md/dehaze';

import Content from './../../Content';

const LOGOS = [
  <TwitterLogo className="logo-svg-twitter" />,
  <MusicLogo className="logo-svg-music" />,
  <LinkedinLogo className="logo-svg-linkedin" />,
  <GitLogo className="logo-svg-git" />,
  <EmailLogo className="logo-svg-email" />
];
const MOTION_PARAMS = {stiffness: 170, dampling: 0};
const LINKS = Content.Navbar.links;
const HEIGHT = 44;
const MOBILE_HEIGHT = HEIGHT * 3;
const COLORS = Content.colors;
const COLOR_MAP = [
  "deep_orange", "cyan", "green", "orange", "blue", "lime"
]

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showIcons: false
    }
  }

  render() {
    const { index } = this.props;
    const { showIcons } = this.state;
    const backgroundColor = COLORS["300"][COLOR_MAP[index]];

    return (
      <div className="nav-height" id="Navbar" style={{ backgroundColor }}>
        <div className="center section-width">
          <div id="desktop-navbar" className="nav-height inline-block">
            {LINKS.map((data, i) => (
              <div
                className="nav-height padding-l-10 pull-right hvr-float"
                key={ i }
              >
                <a
                  className="height-100 pull-right padding-l-10 padding-r-10"
                  href={ data.link }
                  style={{
                    backgroundColor: COLORS[data.light][data.color],
                    color: COLORS["50"].grey
                  }}
                  target="__blank"
                >
                  <svg height="32px" width="32px" style={{paddingTop: "5px"}}>
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      fill={ COLORS[data.dark][data.color] }
                    />
                  </svg>
                  { LOGOS[i] }
                </a>
              </div>
            ))}
          </div>

          <div id="mobile-navbar">
            <div
              className="hand pull-right"
              onClick={() => {this.setState({showIcons: !showIcons})}}
              style={{fontSize: "26px", paddingTop: "7px"}}
            >
              <BarsLogo />
            </div>
            <Motion
              style={{
                height: spring(showIcons ? MOBILE_HEIGHT : 0, MOTION_PARAMS)
              }}
            >
              {({height}) => {
                const ZERO_HEIGHT = height < 1;

                return (
                  <div style={{paddingTop: "45px"}}>
                    <div
                      style={{
                        backgroundColor,
                        borderBottom: ZERO_HEIGHT ? "" : "solid 1px",
                        borderLeft: ZERO_HEIGHT ? "" : "solid 1px",
                        borderRight: ZERO_HEIGHT ? "" : "solid 1px",
                        height: height + "px",
                        display: "block",
                        overflow: "hidden"
                      }}
                    >
                      {[3, 4, 2, 1, 0].map((data, i) => (
                        <a
                          className="pull-left"
                          href={ LINKS[data].link }
                          key={ i }
                          style={{
                            backgroundColor: COLORS[LINKS[data].light][LINKS[data].color],
                            height: "44px",
                            overflow: "hidden",
                            width: i === 0 ? "100%" : "50%"
                          }}
                          target="__blank"
                        >
                          <div
                            className="center padding-l-10 padding-r-10"
                            style={{
                              backgroundColor: COLORS[LINKS[data].light][LINKS[data].color],
                              color: COLORS["50"].grey
                            }}
                          >
                            <svg
                              height="32px"
                              width="32px"
                              style={{paddingTop: "5px"}}
                            >
                              <circle
                                cx="16"
                                cy="16"
                                r="16"
                                fill={ COLORS[LINKS[data].dark][LINKS[data].color] }
                              />
                            </svg>
                            { LOGOS[data] }
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }}
            </Motion>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  index: PropTypes.number.isRequired
}

export default Navbar;
