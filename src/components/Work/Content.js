import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Content from './../../Content';

const MOTION_PARAMS = {stiffness: 100, dampling: 30};

class WorkContent extends Component {
  render() {
    const { backgroundColor, changeSelected, selection } = this.props;
    const WORK = selection > -1 && Content.work[selection];

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
              ? <div className="text-center">
                  <div className="xlg-text underline">
                    { WORK.company }
                  </div>
                  <div className="lg-text padding-t-20">
                    { WORK.position }
                  </div>
                  <div className="sm-text padding-t-5">
                    { WORK.timeRange }
                  </div>
                  <div className="center">
                    <div className="sm-text padding-t-10 selection-content-container">
                      {WORK.description.map((item, i) => (
                        <div key={ i } style={{textAlign: "left"}}>
                          <div
                            className="p xsm-text"
                            style={{display: "inline-block", textAlign: "left"}}
                          >
                            <div className="pull-left selection-content-diamond">
                              ◆
                            </div>
                            <div className="pull-left selection-content-item">
                              { item }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              : null}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

WorkContent.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
  selection: PropTypes.number.isRequired
}

export default WorkContent;
