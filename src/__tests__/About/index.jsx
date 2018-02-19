import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import About from './../../components/About';

describe('<About />', () => {
  it('renders without crashing', () => {
    shallow(<About backgroundColor="#000" canUpdateNav />);
  });

  it('renders my profile photo', () => {
    const wrapper = shallow(<About backgroundColor="#000" canUpdateNav />);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
