import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Navbar from './../components/Navbar';

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    mount(<Navbar index={0} />);
  });
});
