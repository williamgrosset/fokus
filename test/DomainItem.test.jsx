import React from 'react';
import DomainItem from '../src/js/popup/components/DomainItem.react.jsx';
import Domains from '../src/js/popup/components/Domains.react.jsx';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import chrome from 'sinon-chrome';

/*
*  Tests for DomainItem component in src/js/popup/domain-item.js.
*/
describe('<DomainItem />', function() {
  before(function () {
      global.chrome = chrome;
  });
  it('removeDomain(e) successfully handles click event and deletes domain', function() {
    const wrapper = mount(<Domains />);
    wrapper.setState({ container: [{
      id: 'f1ad20ce',
      domain: 'testDomain.com'
    }]});
    wrapper.find('#domain-delete').simulate('click', {
      preventDefault: () => {}
    });
    expect(wrapper.state('container')).to.deep.equal([]);
  });

  it('renders domain without "..." appended (general case)', function() {
    const wrapper = shallow(<DomainItem domain={'testdomain.com'}/>);
    expect(wrapper.state('domain')).to.deep.equal('testdomain.com');
    expect(wrapper.contains(
      'testdomain.com'
    )).to.be.true;
  });

  it('renders domain with "..." appended when length is too long', function() {
    const wrapper = shallow(<DomainItem domain={'testdomainwithverylonglength.organization'}/>);
    expect(wrapper.state('domain')).to.deep.equal('testdomainwithverylonglength.organization');
    expect(wrapper.contains(
      'testdomainwithverylon...'
    )).to.be.true;
  });
});
