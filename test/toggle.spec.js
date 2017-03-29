import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import Toggle from '../src/js/popup/toggle.js'
import Domains from '../src/js/popup/Domains.js'

/*
*  Tests for Toggle component in src/js/popup/toggle.js.
*/
describe('<Toggle />', function() {
    before(function () {
        global.chrome = chrome;
    });

    it('enableFokus() successfully set boolean in localStorage', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'disable');
        wrapper.instance().enableFokus();
        expect(localStorage.getItem('fokus-toggle')).equals('enable');
    });

    it('disableFokus() successfully set boolean in localStorage', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'disable');
        wrapper.instance().disableFokus();
        expect(localStorage.getItem('fokus-toggle')).equals('disable');
    });

    it('onloadEnable() returns "Enable" html for button text with disabled mode on', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'disable');
        expect(wrapper.instance().onloadEnable()).to.deep.equal({ __html: 'Enable' });
    });

    it('onloadEnable() returns "Enabled" html for button text with enabled mode on', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'enable');
        expect(wrapper.instance().onloadEnable()).to.deep.equal({ __html: 'Enabled' });
    });

    it('onloadDisable() returns "Disabled" html for button text with disabled mode on', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'disable');
        expect(wrapper.instance().onloadDisable()).to.deep.equal({ __html: 'Disabled' });
    });

    it('onloadDisable() returns "Disable" html for button text with enabled mode on', function() {
        const wrapper = shallow(<Toggle />);
        localStorage.setItem('fokus-toggle', 'enable');
        expect(wrapper.instance().onloadDisable()).to.deep.equal({ __html: 'Disable' });
    });
    
    it('renders two buttons for enabled/disabled modes', function() {
        const wrapper = shallow(<Toggle />);
        expect(wrapper.find("#enable")).to.have.length(1);
        expect(wrapper.find("#disable")).to.have.length(1);
    });
});
