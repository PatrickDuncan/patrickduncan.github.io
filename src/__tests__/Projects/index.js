import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Projects from './../../components/Projects';
import ProjectContent from './../../components/Projects/Content';

describe('<Projects />', () => {
  it('renders without crashing', () => {
    mount(<Projects backgroundColor="#000" />);
  });

  it("renders the project's content", () => {
    const wrapper = mount(<Projects backgroundColor="#000" />);
    expect(wrapper.find(ProjectContent)).to.have.length(1);
  });
});
