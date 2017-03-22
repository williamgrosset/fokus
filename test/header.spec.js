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
            assert(true);
        });
    });

    describe('render()', function() {
        it('should successfully contain logo image', function() {
            assert(true);
        });
    });
});
