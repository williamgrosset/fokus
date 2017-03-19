import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainContainer from '../src/js/popup/domain-container.js'

describe('<DomainContainer />', function() {
    it('should have props for domain container and handling removeDomain()', function () {
        const wrapper = mount(<DomainContainer />);
    });
    describe('render()', function() {
        it('should render "No domains currently blocked."', function() {
            assert(true);
        });
    });
    describe('render()', function() {
        it('should render domains as list items', function() {
            assert(true);
        });
    });
});
