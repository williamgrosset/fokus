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
            const wrapper = shallow(<Domains />);
            wrapper.instance().addDomain("testdomain.com");
            var shortid = wrapper.state('container')[0].id;
            expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
            wrapper.setState({ container: []});
            expect(wrapper.state('container')).to.deep.equal([]);
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
        it('should successfully retrieve and return index of domain in container', function() {
            const wrapper = shallow(<Domains />);
            wrapper.setState({ container: []});
            wrapper.instance().addDomain("testdomain.com");
            var shortid = wrapper.state('container')[0].id;
            expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
            expect(wrapper.instance().getIndex(shortid, 'id')).equals(0);
        });
    });

    describe('getIndex(value, key)', function() {
        it('should fail to retrieve index of domain in container and return -1', function() {
            const wrapper = shallow(<Domains />);
            wrapper.setState({ container: []});
            wrapper.instance().addDomain("testdomain.com");
            var shortid = wrapper.state('container')[0].id;
            expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
            expect(wrapper.instance().getIndex(12345, 'id')).equals(-1);
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
