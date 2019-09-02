import React from 'react';
import { shallow } from 'enzyme';

import TechnologyList from '../../components/Technologies/TechnologyList';

describe('<TechnologyList />', () => {
  it('renders without crashing', () => {
    shallow(<TechnologyList displayTech={{ Expert: ['Java', 'JS'] }} />);
  });
});
