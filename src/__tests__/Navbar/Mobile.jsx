import React from 'react';
import { shallow } from 'enzyme';

import Mobile from './../../components/Navbar/Mobile';

describe('<Mobile />', () => {
  it('renders without crashing', () => {
    shallow(<Mobile backgroundColor="#000" />);
  });
});
