import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RotatingDiamonds from './../../components/Home/RotatingDiamonds';

describe('<RotatingDiamonds />', () => {
  it('renders without crashing', () => {
    shallow(<RotatingDiamonds reAnimate={() => {}} />);
  });
});
