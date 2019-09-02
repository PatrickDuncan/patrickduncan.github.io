import React, { useState } from 'react';
import PropTypes from 'prop-types';

const checkMatch = (query, tech) => (
  query === '' || tech.toLowerCase().search(query.toLowerCase()) > -1
);

const getQueryMatch = (query, technologies) => {
  const matches = {};
  Object.keys(technologies).forEach(key => {
    const tier = technologies[key].filter(tech => checkMatch(query, tech));
    if (tier.length > 0) {
      matches[key] = tier;
    }
  });
  return matches;
};

const filterChangeQuery = (changeQuery, setDisplayTech, technologies) => e => {
  const ERROR_CHARS = /\\|\/|\||\{|\}|\[|\]|\(|\)|\+|\?|\.|\^|\*/g;
  const QUERY = e.target.value.replace(ERROR_CHARS, '');
  changeQuery(QUERY);
  setDisplayTech(getQueryMatch(QUERY, technologies));
};

const Search = ({ setDisplayTech, technologies }) => {
  const [query, changeQuery] = useState('');

  return (
    <div className="center">
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        id="search-input"
        onChange={filterChangeQuery(changeQuery, setDisplayTech, technologies)}
        placeholder="Query"
        spellCheck="false"
        type="text"
        value={query}
      />
    </div>
  );
};

Search.propTypes = {
  setDisplayTech: PropTypes.func.isRequired,
  technologies: PropTypes.object.isRequired,
};

export default Search;
