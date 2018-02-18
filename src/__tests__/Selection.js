import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Selection from './../components/common/Selection';

describe('<Selection />', () => {
  it('renders without crashing', () => {
    shallow(
      <Selection
        backgroundColor="#000"
        changeHover={() => {}}
        changeSelected={() => {}}
        height="100"
        hover={true}
        options={{}}
        selection={0}
        selectedColor="#000"
      />
    );
  });
});
