import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Education from './../components/Education';

describe('<Education />', () => {
  it('renders without crashing', () => {
    mount(<Education backgroundColor="#000" />);
  });
});
