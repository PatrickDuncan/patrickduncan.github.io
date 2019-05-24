import React from 'react';
import { shallow } from 'enzyme';

import ScrollDiamond from '../../components/Home/ScrollDiamond';

describe('<ScrollDiamond />', () => {
  it('renders without crashing', () => {
    shallow(<ScrollDiamond />);
  });
});
