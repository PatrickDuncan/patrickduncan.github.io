import React from 'react';
import { shallow } from 'enzyme';

import Content from './../../components/Work/Content';

describe('<Content />', () => {
  it('renders without crashing', () => {
    shallow(<Content
      info={{
          company: 'Test Company',
          description: ['Test 1', 'Test 2'],
          position: 'Test Positiion',
          timeRange: '500 AD - 600 AD',
        }}
    />);
  });
});
