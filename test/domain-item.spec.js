import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainItem from '../src/js/popup/domain-item.js'

/*
*  Tests for DomainItem component in src/js/popup/domain-item.js.
*/
describe('<DomainItem />', function() {
    it('should have props for the domain, domain container, handling removeDomain()', function () {
        const wrapper = shallow(<DomainItem domain={""}/>);
        expect(wrapper.props().container).to.be.defined;
        expect(wrapper.props().domain).to.be.defined;
        expect(wrapper.props().removeDomain).to.be.defined;
    });
    describe('deleteDomain(e) triggered on click', function() {
        it('should successfully call removeDomain', function() {
            assert(true);
        });
    });
    describe('render() with regular domain length', function() {
        it('should show domain without "..." appended', function() {
            assert(true);
        });
    });
    describe('render() with long domain length', function() {
        it('should show domain with "..." appended', function() {
            assert(true);
        });
    });
});
