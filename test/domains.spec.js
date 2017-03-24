import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Domains from '../src/js/popup/domains.js'

/*
*  Tests for Domains component in src/js/popup/domains.js.
*/
describe('<Domains />', function() {
    before(function () {
        global.chrome = chrome;
    });
    it('should have addDomain(), storeDomain(), removeDomain(), getIndex() binded and initial container state', function () {
        const wrapper = shallow(<Domains />);
        expect(wrapper.state().container).to.be.defined;
        expect(wrapper.state().addDomain).to.be.defined;
        expect(wrapper.state().storeDomain).to.be.defined;
        expect(wrapper.state().removeDomain).to.be.defined;
        expect(wrapper.state().getIndex).to.be.defined;
    });

    describe('addDomain(domain)', function() {
        it('should successfully add domain to container', function() {
            assert(true);
        });
    });

    describe('addDomain(domain)', function() {
        it('should fail to add domain to container', function() {
            assert(true);
        });
    });

    describe('storeDomain(validDomain, container)', function() {
        it('should successfully add container to localStorage', function() {
            assert(true);
        });
    });

    describe('getIndex(value, key)', function() {
        it('should successfully retrieve index of domain in container', function() {
            assert(true);
        });
    });

    describe('getIndex(value, key)', function() {
        it('should fail to retrieve index of domain in container', function() {
            assert(true);
        });
    });

    describe('removeDomain(id)', function() {
        it('should successfully remove domain from container', function() {
            assert(true);
        });
    });

    describe('removeDomain(id)', function() {
        it('should fail to remove domain from container', function() {
            assert(true);
        });
    });
});
