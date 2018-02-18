import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './../components/common/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header color="#000" text="Test" />);
  });
});
