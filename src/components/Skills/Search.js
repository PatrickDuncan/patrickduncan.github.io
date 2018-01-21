import React, { Component } from 'react';

import Content from './../../Content';

const LANGUAGE_BG_COLOR = Content.colors["900"].orange;

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  changeQuery(e) {
    const ERROR_CHARS = /\\|\/|\||\{|\}|\[|\]|\(|\)|\+|\?|\.|\^|\*/g
    this.setState({query: e.target.value.replace(ERROR_CHARS, "")});
  }

  checkMatch(query, skill) {
    return skill.toLowerCase().search(query.toLowerCase()) > -1 && query !== ""
  }

  getSkillsMatch(result) {
    const { query } = this.state;
    return Content.skills.searchData.filter(skill => (
      this.checkMatch(query, skill)
    ));
  }

  render() {
    const { query } = this.state;
    const SKILLS_MATCH = this.getSkillsMatch();
    const SKILLS_MATCH_LENGTH = SKILLS_MATCH.length;

    return (
      <div>
        <div className="center">
          <input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            id="search-input"
            onChange={this.changeQuery.bind(this)}
            placeholder="Query"
            spellCheck="false"
            type="text"
            value={ query }
          />
        </div>
        <div className="padding-t-10 center" style={{maxWidth: "500px"}}>
          <div className="center">
            {SKILLS_MATCH.map((language, i) => (
              <div
                key={ language }
                className="language-search-box-container"
                style={i < SKILLS_MATCH_LENGTH - 1 ? {paddingRight: "5px"} : {}}
              >
                <div
                  className="language-search-box"
                  style={{backgroundColor: LANGUAGE_BG_COLOR}}
                >
                  { language }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
