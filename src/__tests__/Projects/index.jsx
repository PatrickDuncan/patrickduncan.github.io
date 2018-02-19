import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Projects from './../../components/Projects';
import ContentContainer from './../../components/Projects/ContentContainer';

const getDefaultWrapper = () => mount(<Projects backgroundColor="#000" canUpdateNav updateNav={() => {}} />);

describe('<Projects />', () => {
  it('renders without crashing', () => {
    getDefaultWrapper();
  });

  it("renders the project's content container", () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(ContentContainer)).to.have.length(1);
  });
});
