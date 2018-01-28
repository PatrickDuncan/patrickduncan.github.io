import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from './../App';
import Header from './../components/common/Header';
import Navbar from './../components/Navbar';
import Home from './../components/Home';
import Work from './../components/Work';
import Projects from './../components/Projects';
import Skills from './../components/Skills';
import Education from './../components/Education';
import About from './../components/About';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the home section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home)).to.have.length(1);
  });

  it('renders the work section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Work)).to.have.length(1);
  });

  it('renders the projects section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Projects)).to.have.length(1);
  });

  it('renders the skills section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Skills)).to.have.length(1);
  });

  it('renders the education section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Education)).to.have.length(1);
  });

  it('renders the about section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(About)).to.have.length(1);
  });

  it('renders the navbar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar)).to.have.length(1);
  });

  it('renders a header between each section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(5);
  });
});
