import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Skills from './../../components/Skills';
import Graph from './../../components/Skills/Graph';
import Search from './../../components/Skills/Search';

describe('<Skills />', () => {
  it('renders without crashing', () => {
    mount(<Skills backgroundColor="#000" canUpdateNav updateNav={() => {}} />);
  });

  it('renders a skill graph', () => {
    const wrapper = mount(<Skills backgroundColor="#000" canUpdateNav updateNav={() => {}} />);
    expect(wrapper.find(Graph)).to.have.length(1);
  });

  it('renders a search component', () => {
    const wrapper = mount(<Skills backgroundColor="#000" canUpdateNav updateNav={() => {}} />);
    expect(wrapper.find(Search)).to.have.length(1);
  });
});
