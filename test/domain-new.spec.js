import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainNew from '../src/js/popup/domain-new.js'
import Domains from '../src/js/popup/domains.js'

/*
*  Tests for DomainNew component in src/js/popup/domain-new.js.
*/
describe('<DomainNew />', function() {
    it('domainValidation(e) successfully adds domain to container', function() {
        /*
        const wrapper = mount(<Domains container={["firstdomain.com"]} />);
        wrapper.setState({ value: "openproblems.world" });
        expect(wrapper.state('value')).equals("openproblems.world");
        //const wrapper = shallow(<DomainNew container={["testdomain.com", "anotherone.com"]}/>);
        //expect(wrapper.state('domain')).to.deep.equal("testdomain.com");
        wrapper.find('#form').simulate('submit', {
            preventDefault: () => {}
        });
        wrapper.setState({ value: "" });
        */
    });

    it('domanValidation(e) shows modal for domain container max', function() {
        // check for rendered myModalMax
        assert(true);
    });

    it('domainValidation(e) shows modal for invalid domain', function() {
        // check for rendered myModalError
        assert(true);
    });

    it('renders form input with placeholder', function() {
        assert(true);
    });
});
