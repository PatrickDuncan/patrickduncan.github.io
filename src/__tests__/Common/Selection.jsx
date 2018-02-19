import React from 'react';
import { shallow } from 'enzyme';

import Selection from './../../components/common/Selection';

describe('<Selection />', () => {
  it('renders without crashing', () => {
    shallow(<Selection
      backgroundColor="#000"
      changeHover={() => {}}
      changeSelected={() => {}}
      height="100"
      hover={0}
      options={[]}
      selection={0}
      selectedColor="#000"
    />);
  });
});
