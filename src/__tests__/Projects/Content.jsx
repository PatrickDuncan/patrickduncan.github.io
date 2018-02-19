import React from 'react';
import { shallow } from 'enzyme';

import Content from './../../components/Projects/Content';

describe('<Content />', () => {
  it('renders without crashing', () => {
    shallow(<Content
      info={{
          name: 'Test Project',
          blurb: 'A test Project',
          timeRange: 'May 2000 - June 2001',
          description: 'A test project about tests',
          languages: 'Python, Ruby',
          links: [{
            link: 'https://github.com/PatrickDuncan/',
            text: 'Github',
          }],
          tools: 'Chrome',
        }}
    />);
  });
});
