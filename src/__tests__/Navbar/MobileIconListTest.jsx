import React from 'react';
import { shallow } from 'enzyme';

import MobileIconList from '../../components/Navbar/MobileIconList';

describe('<MobileIconList />', () => {
  it('renders without crashing', () => {
    shallow(<MobileIconList backgroundColor="#000" height={0} />);
  });
});
