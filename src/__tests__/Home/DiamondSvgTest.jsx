import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DiamondSvg from '../../components/Home/DiamondSvg';
import RotatingDiamonds from '../../components/Home/RotatingDiamonds';

describe('<DiamondSvg />', () => {
  it('renders without crashing', () => {
    shallow(<DiamondSvg />);
  });

  it('renders the RotatingDiamonds', () => {
    const wrapper = shallow(<DiamondSvg />);
    expect(wrapper.find(RotatingDiamonds)).to.have.length(1);
  });
});
