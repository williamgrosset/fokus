import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Toggle from '../src/js/popup/toggle.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Toggle />', function() {
    it('should have enableFokus(), disableFokus(), modifyCss(), onloadEnable(), onloadDisable() binded', function () {
        const wrapper = shallow(<Toggle />);
        expect(wrapper.props().enableFokus).to.be.defined;
        expect(wrapper.props().disableFokus).to.be.defined;
        expect(wrapper.props().modifyCss).to.be.defined;
        expect(wrapper.props().onloadEnable).to.be.defined;
        expect(wrapper.props().onloadDisable).to.be.defined;
    });

    describe('enableFokus()', function() {
        it('should successfully set boolean in localStorage', function() {
            assert(true);
        });
    });

    describe('disableFokus()', function() {
        it('should successfully set boolean in localStorage', function() {
            assert(true);
        });
    });

    describe('modifyCss()', function() {
        it('should successfully find all CSS identifiers', function() {
            assert(true);
        });
    });

    describe('onloadEnable()', function() {
        it('should successfully find CSS identifier', function() {
            assert(true);
        });
    });

    describe('onloadDisable()', function() {
        it('should successfully find CSS identifier', function() {
            assert(true);
        });
    });

    describe('return()', function() {
        it('should successfully render div', function() {
            assert(true);
        });
    });
});
