import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Navbar from '../../components/Navbar';
import Desktop from '../../components/Navbar/Desktop';
import Mobile from '../../components/Navbar/Mobile';

const getDefaultWrapper = () => mount(<Navbar backgroundColor="#000" />);

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    getDefaultWrapper();
  });

  it('renders the desktop view', () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(Desktop)).to.have.length(1);
  });

  it('renders the mobile view', () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(Mobile)).to.have.length(1);
  });
});
