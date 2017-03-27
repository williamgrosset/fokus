import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainNew from '../src/js/popup/domain-new.js'

/*
*  Tests for DomainNew component in src/js/popup/domain-new.js.
*/
describe('<DomainNew />', function() {
    // define addDomain function as a prop
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

    it('domanValidation(e) shows modal for domain container max', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        wrapper.setProps({
            addDomain: () => {}
        });
        wrapper.setState({ value: "openproblems.world" });
        expect(wrapper.state('value')).equals("openproblems.world");
        wrapper.find('#form').simulate('submit', {
            preventDefault: () => {}
        });
        // check for rendered myModalMax
    });

    it('domainValidation(e) shows modal for invalid domain', function() {
        // check for rendered myModalError
        assert(true);
    });

    it('renders form input with placeholder', function() {
        const wrapper = shallow(<DomainNew container={["firstdomain.com"]} />);
        expect(wrapper.find('input')).to.have.length(1);
    });
});
