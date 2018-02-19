import React from 'react';
import { shallow } from 'enzyme';

import Desktop from './../../components/Navbar/Desktop';

describe('<Desktop />', () => {
  it('renders without crashing', () => {
    shallow(<Desktop />);
  });
});
