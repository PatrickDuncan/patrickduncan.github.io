import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Content from './../../components/Projects/Content';

describe('<Content />', () => {
  it('renders without crashing', () => {
    shallow(
      <Content
        backgroundColor="#000"
        changeSelected={() => {}}
        selection={0}
      />
    );
  });
});
