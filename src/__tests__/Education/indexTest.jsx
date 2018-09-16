import React from 'react';
import { mount } from 'enzyme';

import Education from './../../components/Education';

describe('<Education />', () => {
  it('renders without crashing', () => {
    mount(<Education
      backgroundColor="#000"
      panelColor="#000"
    />);
  });
});
