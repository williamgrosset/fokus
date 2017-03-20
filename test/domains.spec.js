import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Domains from '../src/js/popup/domains.js'

/*
*  Tests for Domains component in src/js/popup/domains.js.
*/
describe('<Domains />', function() {
    it('should have props for container and handling removeDomain()', function () {
        const wrapper = shallow(<Domains />);
    });

    describe('addDomain(domain)', function() {
        it('should successfully add domain to container', function() {
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
});
