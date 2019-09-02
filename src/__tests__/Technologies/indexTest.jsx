import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Technologies from '../../components/Technologies';
import TechnologyList from '../../components/Technologies/TechnologyList';
import Search from '../../components/Technologies/Search';

const getDefaultWrapper = () => mount((
  <Technologies
    backgroundColor="#000"
    panelColor="#000"
  />
));

describe('<Technologies />', () => {
  it('renders without crashing', () => {
    getDefaultWrapper();
  });

  it('renders a skill graph', () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(TechnologyList)).to.have.length(1);
  });

  it('renders a search component', () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(Search)).to.have.length(1);
  });
});
