import React from 'react';
import { shallow } from 'enzyme';

import Polygon from './../../components/Home/Polygon';

describe('<Polygon />', () => {
  it('renders without crashing', () => {
    shallow(<Polygon points="10,10 0,20 10,20 20,0" reAnimate={() => {}} />);
  });
});
