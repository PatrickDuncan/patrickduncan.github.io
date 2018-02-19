import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './../../components/Home';
import ScrollDiamond from './../../components/Home/ScrollDiamond';
import DiamondSvg from './../../components/Home/DiamondSvg';

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('renders the ScrollDiamond', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(ScrollDiamond)).to.have.length(1);
  });

  it('renders the DiamondSvg', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(DiamondSvg)).to.have.length(1);
  });
});
