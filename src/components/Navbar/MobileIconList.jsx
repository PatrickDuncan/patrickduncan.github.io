import React from 'react';
import PropTypes from 'prop-types';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TiNotes } from 'react-icons/ti';

import Content from '../../data/content.json';

const LOGOS = [
  <TiNotes className="logo-svg-music" />,
  <FaLinkedinIn className="logo-svg-linkedin" />,
  <FaGithub className="logo-svg-git" />,
  <MdEmail className="logo-svg-email" />,
];
const LINKS = Content.Navbar.links;
const COLORS = Content.colors;

const MobileIconList = ({ backgroundColor, height }) => {
  const ZERO_HEIGHT = height < 1;

  return (
    <div style={{ paddingTop: '45px' }}>
      <div
        style={{
          backgroundColor,
          borderBottom: ZERO_HEIGHT ? '' : 'solid 1px',
          borderLeft: ZERO_HEIGHT ? '' : 'solid 1px',
          borderRight: ZERO_HEIGHT ? '' : 'solid 1px',
          height: `${height}px`,
          display: 'block',
          overflow: 'hidden',
        }}
      >
        {[2, 3, 1, 0].map(num => {
          const dark = COLORS[LINKS[num].dark][LINKS[num].color];
          const light = COLORS[LINKS[num].light][LINKS[num].color];

          return (
            <a
              className="pull-left"
              href={LINKS[num].link}
              key={num}
              style={{
                backgroundColor: light,
                height: '44px',
                overflow: 'hidden',
                width: '50%',
              }}
              target="__blank"
              rel="noreferrer noopener"
            >
              <div
                className="center padding-l-10 padding-r-10"
                style={{
                  backgroundColor: light,
                  color: COLORS['50'].grey,
                }}
              >
                <svg
                  height="32px"
                  width="32px"
                  style={{ paddingTop: '5px' }}
                >
                  <circle cx="16" cy="16" r="16" fill={dark} />
                </svg>
                { LOGOS[num] }
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

MobileIconList.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default MobileIconList;
