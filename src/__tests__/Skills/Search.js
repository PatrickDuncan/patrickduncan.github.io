import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Search from './../../components/Skills';

describe('<Search />', () => {
  it('renders without crashing', () => {
    mount(<Search backgroundColor="#000" />);
  });

  it('accepts user input properly', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    const text = "Java";
    wrapper.find('input').simulate('change', {target: {value: text}});
    expect(wrapper.find('input').get(0).props.value).to.equal(text);
  });

  it('does not crash when inputting { or } and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '{'}});
    wrapper.find('input').simulate('change', {target: {value: '}'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting \ or / and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '\\'}});
    wrapper.find('input').simulate('change', {target: {value: '/'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting [ or ] and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '['}});
    wrapper.find('input').simulate('change', {target: {value: ']'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting ( or ) and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '('}});
    wrapper.find('input').simulate('change', {target: {value: ')'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting | and strips it away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '|'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting ? or . and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '|'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting +, ^, or * and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    wrapper.find('input').simulate('change', {target: {value: '|'}});
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });
});
