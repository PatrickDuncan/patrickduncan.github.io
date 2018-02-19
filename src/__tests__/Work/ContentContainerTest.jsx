import React from 'react';
import { shallow } from 'enzyme';

import ContentContainer from './../../components/Work/ContentContainer';

describe('<ContentContainer />', () => {
  it('renders without crashing', () => {
    shallow(<ContentContainer
      backgroundColor="#000"
      changeSelected={() => {}}
      selection={0}
    />);
  });
});
