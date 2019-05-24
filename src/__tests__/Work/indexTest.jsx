import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Work from '../../components/Work';
import ProjectContent from '../../components/Work/ContentContainer';

const getDefaultWrapper = () => mount(<Work
  backgroundColor="#000"
  panelColor="#000"
/>);

describe('<Work />', () => {
  it('renders without crashing', () => {
    getDefaultWrapper();
  });

  it("renders the work experience's content", () => {
    const wrapper = getDefaultWrapper();
    expect(wrapper.find(ProjectContent)).to.have.length(1);
  });
});
