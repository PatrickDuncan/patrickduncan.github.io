import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Work from './../../components/Work';
import ProjectContent from './../../components/Work/Content';

describe('<Work />', () => {
  it('renders without crashing', () => {
    mount(<Work backgroundColor="#000" />);
  });

  it("renders the work experience's content", () => {
    const wrapper = mount(<Work backgroundColor="#000" />);
    expect(wrapper.find(ProjectContent)).to.have.length(1);
  });
});
