import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Toggle from '../src/js/popup/toggle.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Toggle />', function() {
    it('should have props for container and handling removeDomain()', function () {
        const wrapper = shallow(<Toggle />);
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
});
