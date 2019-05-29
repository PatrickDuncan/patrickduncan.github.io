import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/common/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    mount(<Header color="#000" text="Test" />);
  });
});
