import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainItem from '../src/js/popup/domain-item.js'
import Domains from '../src/js/popup/domains.js'

/*
*  Tests for DomainItem component in src/js/popup/domain-item.js.
*/
describe('<DomainItem />', function() {
    it('should have props for the domain, domain container, handling removeDomain()', function () {
        const wrapper = shallow(<DomainItem domain={""}/>);
        expect(wrapper.props().container).to.be.defined;
        expect(wrapper.props().domain).to.be.defined;
        expect(wrapper.props().removeDomain).to.be.defined;
    });
    describe('deleteDomain(e) triggered on click', function() {
        it('should successfully call removeDomain', function() {
            const wrapper = mount(<Domains />);
            wrapper.setState({ container: [{
                id: 20,
                domain: "testDomain.com"
            }]});
            //const wrapper = shallow(<DomainItem domain={"testDomain.com"}/>);
            console.log(wrapper.debug());
            wrapper.find('#domain-delete').simulate('click', {
                preventDefault: () => {}
            });
            expect(wrapper.state('domain')).to.deep.equal("");
        });
    });
    describe('render() with regular domain length', function() {
        it('should show domain without "..." appended', function() {
            const wrapper = shallow(<DomainItem domain={"testDomain.com"}/>);
            expect(wrapper.state('domain')).to.deep.equal("testDomain.com");
            expect(wrapper.contains(
                    "testDomain.com"
            )).to.be.true;
        });
    });
    describe('render() with long domain length', function() {
        it('should show domain with "..." appended', function() {
            const wrapper = shallow(<DomainItem domain={"testDomainWithVeryLongLength.organization"}/>);
            expect(wrapper.state('domain')).to.deep.equal("testDomainWithVeryLongLength.organization");
            expect(wrapper.contains(
                    "testDomainWithVeryLon..."
            )).to.be.true;
        });
    });
});
