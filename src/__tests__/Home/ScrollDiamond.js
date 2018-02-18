import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ScrollDiamond from './../../components/Home/ScrollDiamond';

describe('<ScrollDiamond />', () => {
  it('renders without crashing', () => {
    shallow(<ScrollDiamond />);
  });
});
