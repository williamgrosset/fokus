import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Headers from '../src/js/popup/header.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Headers />', function() {
    it('fokusTab() successfully handles click event', function() {
        const wrapper = shallow(<Headers />);
        wrapper.find('.fokus-link').simulate('click');
    });

    it('renders logo image', function() {
        const wrapper = shallow(<Headers />);
        expect(wrapper.find('img').length).to.equal(1);
    });
});
