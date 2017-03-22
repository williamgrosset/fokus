import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Headers from '../src/js/popup/header.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Headers />', function() {
    it('should have fokusTab() binded', function () {
        const wrapper = shallow(<Headers />);
        expect(wrapper.props().fokusTab).to.be.defined;
    });

    describe('fokusTab()', function() {
        it('should successfully redirect user on header click', function() {
            const wrapper = shallow(<Headers />);
            wrapper.find('.fokus-link').simulate('click');
        });
    });

    describe('render()', function() {
        it('should successfully contain logo image', function() {
            const wrapper = shallow(<Headers />);
            expect(wrapper.find('.fokus-link').length).to.equal(1);
        });
    });
});
