import React from 'react';
import { shallow } from 'enzyme';

import Graph from './../../components/Skills/Graph';

describe('<Graph />', () => {
  it('renders without crashing', () => {
    shallow(<Graph />);
  });
});
