import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiNotes } from 'react-icons/ti';

import Content from '../../Content.json';

const LOGOS = [
  <TiNotes className="logo-svg-music" />,
  <FaLinkedinIn className="logo-svg-linkedin" />,
  <FaGithub className="logo-svg-git" />,
  <MdEmail className="logo-svg-email" />,
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
