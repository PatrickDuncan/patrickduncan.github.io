import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Header from './../../components/common/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    mount(<Header color="#000" text="Test" />);
  });
});
