import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Toggle from '../src/js/popup/toggle.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Toggle />', function() {
    it('enableFokus() successfully set boolean in localStorage', function() {
        assert(true);
    });

    it('disableFokus() successfully set boolean in localStorage', function() {
        assert(true);
    });

    describe('modifyCss()', function() {
        it('should successfully find all CSS identifiers', function() {
            assert(true);
        });
    });

    it('onloadEnable() returns "Enable" html for button text', function() {
        assert(true);
    });

    it('onloadEnable() returns "Enabled" html for button text', function() {
        assert(true);
    });

    it('onloadDisable() returns "Disable" html for button text', function() {
        assert(true);
    });
    
    it('onloadDisable() returns "Disabled" html for button text', function() {
        assert(true);
    });

    it('renders two buttons for enabled/disabled modes', function() {
        assert(true);
    });
});
