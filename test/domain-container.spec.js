import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';

import DomainContainer from '../src/js/popup/domain-container.js'

describe('<DomainContainer /> (domain-container.js)', function() {
    it('should have props for container and handling removeDomain()', function () {
        const wrapper = mount(<DomainContainer container={[]}/>);
        expect(wrapper.props().container).to.be.defined;
    });
    describe('render()', function() {
        it('should render "No domains currently blocked."', function() {
            const wrapper = shallow(<DomainContainer container={[]} />);
            wrapper.setState({ container: [] });
            expect(wrapper.state('container')).to.deep.equal([]);
            //expect <ul id='domain-container'> to have <p>No domains currently blocked.</p>
        });
    });
    describe('render()', function() {
        it('should render domains as list items', function() {
            const wrapper = shallow(<DomainContainer container={[]} />);
            wrapper.setState({ container: ['testdomain.com', 'anotherone.com'] });
            expect(wrapper.state('container')).to.deep.equal(['testdomain.com', 'anotherone.com']);
            //expect <ul id='domain-container'> to have a list of <li>
        });
    });
});
