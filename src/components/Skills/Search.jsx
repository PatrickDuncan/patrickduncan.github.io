import React, { Component } from 'react';

import Content from './../../Content.json';

const backgroundColor = Content.colors['300'].cyan;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  getSkillsMatch = query => Content.skills.searchData.filter(skill => (
    this.checkMatch(query, skill)
  ))

  checkMatch = (query, skill) => (
    skill.toLowerCase().search(query.toLowerCase()) > -1 && query !== ''
  )

  changeQuery = e => {
    const ERROR_CHARS = /\\|\/|\||\{|\}|\[|\]|\(|\)|\+|\?|\.|\^|\*/g;
    this.setState({ query: e.target.value.replace(ERROR_CHARS, '') });
  }

  render() {
    const { query } = this.state;
    const SKILLS_MATCH = this.getSkillsMatch(query);
    const SKILLS_MATCH_LENGTH = SKILLS_MATCH.length;

    return (
      <div>
        <div className="center">
          <input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            id="search-input"
            onChange={this.changeQuery}
            placeholder="Query"
            spellCheck="false"
            type="text"
            value={query}
          />
        </div>
        <div className="padding-t-10 center" style={{ maxWidth: '500px' }}>
          <div className="center">
            {SKILLS_MATCH.map((language, i) => (
              <div
                key={language}
                className="language-search-box-container"
                style={i < SKILLS_MATCH_LENGTH - 1 ? { paddingRight: '5px' } : {}}
              >
                <div
                  className="language-search-box"
                  style={{ backgroundColor }}
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
