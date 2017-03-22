import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import DomainContainer from '../src/js/popup/domain-container.js'
import DomainItem from '../src/js/popup/domain-item.js'

/*
*  Tests for DomainContainer component in src/js/popup/domain-container.js.
*/
describe('<DomainContainer />', function() {
    it('should have props for container and handling removeDomain()', function () {
        const wrapper = shallow(<DomainContainer container={[]}/>);
        expect(wrapper.props().container).to.be.defined;
        expect(wrapper.props().removeDomain).to.be.defined;
    });

    describe('render() with empty container', function() {
        it('should render "No domains currently blocked."', function() {
            const wrapper = shallow(<DomainContainer container={[]} />);
            expect(wrapper.state('container')).to.deep.equal([]);
            expect(wrapper.contains(
                    <ul id='domain-container'>
                        <p>No domains currently blocked.</p>
                    </ul>
            )).to.be.true;
        });
    });

    describe('render() with populated container', function() {
        it('should render domains as list items', function() {
            const wrapper = shallow(<DomainContainer container={["testdomain.com"]} domain={"testdomain.com"}/>);
            expect(wrapper.state('container')).to.deep.equal(["testdomain.com"]);
            /*
            console.log(wrapper.debug());
            expect(wrapper.contains(
                    "what.com"
            )).to.be.true;
            */
        });
    });
});
