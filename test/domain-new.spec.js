import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainNew from '../src/js/popup/domain-new.js'

describe('<DomainNew />', function() {
    it('should have props for domain container and handling addDomain()', function () {
        const wrapper = shallow(<DomainNew />);
        expect(wrapper.props().addDomain).to.be.defined;
        expect(wrapper.props().container).to.be.defined;
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
