import React from 'react';
import { shallow } from 'enzyme';

import RotatingDiamonds from './../../components/Home/RotatingDiamonds';

describe('<RotatingDiamonds />', () => {
  it('renders without crashing', () => {
    shallow(<RotatingDiamonds reAnimate={() => {}} />);
  });
});
