import React from 'react';
import EmailLogo from 'react-icons/lib/md/email';
import GitLogo from 'react-icons/lib/fa/github';
import LinkedinLogo from 'react-icons/lib/fa/linkedin';
import MusicLogo from 'react-icons/lib/ti/notes';
import TwitterLogo from 'react-icons/lib/ti/social-twitter';

import Content from './../../Content.json';

const LOGOS = [
  <TwitterLogo className="logo-svg-twitter" />,
  <MusicLogo className="logo-svg-music" />,
  <LinkedinLogo className="logo-svg-linkedin" />,
  <GitLogo className="logo-svg-git" />,
  <EmailLogo className="logo-svg-email" />,
];
const LINKS = Content.Navbar.links;
const COLORS = Content.colors;

const Desktop = () => (
  <div id="desktop-navbar" className="nav-height inline-block">
    {LINKS.map((data, i) => (
      <div
        className="nav-height padding-l-10 pull-right hvr-float"
        key={data.link}
      >
        <a
          className="height-100 pull-right padding-l-10 padding-r-10"
          href={data.link}
          style={{
            backgroundColor: COLORS[data.light][data.color],
            color: COLORS['50'].grey,
          }}
          target="__blank"
          rel="noreferrer noopener"
        >
          <svg height="32px" width="32px" style={{ paddingTop: '5px' }}>
            <circle
              cx="16"
              cy="16"
              r="16"
              fill={COLORS[data.dark][data.color]}
            />
          </svg>
          { LOGOS[i] }
        </a>
      </div>
    ))}
  </div>
);

export default Desktop;
