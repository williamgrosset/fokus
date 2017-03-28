import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainNew from '../src/js/popup/domain-new.js'

/*
*  Tests for DomainNew component in src/js/popup/domain-new.js.
*/
describe('<DomainNew />', function() {
    it('domainValidation(e) successfully adds domain to container', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        wrapper.setProps({
            addDomain: () => {}
        });
        wrapper.setState({ value: "openproblems.world" });
        expect(wrapper.state('value')).equals("openproblems.world");
        wrapper.find('#form').simulate('submit', {
            preventDefault: () => {}
        });
        wrapper.setState({ value: "" });
    });

    it('errorCheck(domain) returns false on domain: "<empty string>"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck(" ")).to.equal(false);
    });

    it('errorCheck(domain) returns false on domain: "test"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("test")).to.equal(false);
    });

    it('errorCheck(domain) returns false on domain: "te st.com"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("te st.com")).to.equal(false);
    });

    it('errorCheck(domain) returns false on domain: "test.com/"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("test.com/")).to.equal(false);
    });

    it('errorCheck(domain) returns false on domain: "http://www.test.com"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("http://www.test.com")).to.equal(false);
    });

    it('errorCheck(domain) returns true on domain: "www.test.com"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("www.test.com")).to.equal(true);
    });

    it('errorCheck(domain) returns true on domain: "test.com"', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.instance().errorCheck("test.com")).to.equal(true);
    });

    it('renders form input', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.find('input')).to.have.length(1);
    });
});
