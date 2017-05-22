import React from 'react';
import Header from '../src/js/popup/components/Header.react.jsx';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/*
*  Tests for Header component in src/js/popup/header.js.
*/
describe('<Header />', function() {
  it('fokusTab() successfully handles click event', function() {
    const wrapper = shallow(<Header />);
    wrapper.find('.fokus-link').simulate('click');
  });

  it('renders logo image', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).to.equal(1);
  });
});
