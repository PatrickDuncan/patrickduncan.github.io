import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Search from './../../components/Skills';

const inputText = (wrapper, text) => {
  wrapper.find('input').simulate('change', {target: {value: text}});
}

describe('<Search />', () => {
  it('renders without crashing', () => {
    mount(<Search backgroundColor="#000" />);
  });

  it('accepts user input properly', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    const text = "Java";
    inputText(wrapper, text);
    expect(wrapper.find('input').get(0).props.value).to.equal(text);
  });

  it('does not crash when inputting { or } and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '{');
    inputText(wrapper, '}');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting / or \\ and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '/');
    inputText(wrapper, '\\');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting [ or ] and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '[');
    inputText(wrapper, ']');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting ( or ) and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '(');
    inputText(wrapper, ')');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting | and strips it away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '|');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting ? or . and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '?');
    inputText(wrapper, '.');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });

  it('does not crash when inputting +, ^, or * and strips them away', () => {
    const wrapper = mount(<Search backgroundColor="#000" />);
    inputText(wrapper, '+');
    inputText(wrapper, '^');
    inputText(wrapper, '*');
    expect(wrapper.find('input').get(0).props.value).to.equal("");
  });
});
