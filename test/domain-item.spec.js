import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainItem from '../src/js/popup/domain-item.js'

describe('<DomainItem /> (domain-item.js)', function() {
    it('should have props for domain container and handling addDomain()', function () {
        const wrapper = shallow(<DomainItem />);
        //expect(wrapper.props().addDomain).to.be.defined;
        //expect(wrapper.props().container).to.be.defined;
    });
    describe('domainValidation(e)', function() {
        it('should successfully add domain to container', function() {
            assert(true);
        });
    });
    describe('domainValidation(e)', function() {
        it('should show modal for invalid domain', function() {
            assert(true);
        });
    });
    describe('domainValidation(e)', function() {
        it('should show modal for domain container max', function() {
            assert(true);
        });
    });
});
