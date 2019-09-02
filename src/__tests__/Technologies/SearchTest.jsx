import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Search from '../../components/Technologies';

const inputText = (wrapper, text) => {
  wrapper.find('input').simulate('change', { target: { value: text } });
};

const getDefaultWrapper = () => mount((
  <Search
    setDisplayTech={null}
    technologies={{ Expert: ['Java', 'JS'] }}
    backgroundColor="#000"
    panelColor="#000"
  />
));

describe('<Search />', () => {
  it('renders without crashing', () => {
    getDefaultWrapper();
  });

  it('accepts user input properly', () => {
    const wrapper = getDefaultWrapper();
    const text = 'Java';
    inputText(wrapper, text);
    expect(wrapper.find('input').get(0).props.value).to.equal(text);
  });

  it('does not crash when inputting { or } and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '{');
    inputText(wrapper, '}');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting / or \\ and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '/');
    inputText(wrapper, '\\');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting [ or ] and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '[');
    inputText(wrapper, ']');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting ( or ) and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '(');
    inputText(wrapper, ')');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting | and strips it away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '|');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting ? or . and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '?');
    inputText(wrapper, '.');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });

  it('does not crash when inputting +, ^, or * and strips them away', () => {
    const wrapper = getDefaultWrapper();
    inputText(wrapper, '+');
    inputText(wrapper, '^');
    inputText(wrapper, '*');
    expect(wrapper.find('input').get(0).props.value).to.equal('');
  });
});
