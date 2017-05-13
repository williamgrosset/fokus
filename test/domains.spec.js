import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Domains from '../src/js/popup/domains.js'
import DomainContainer from '../src/js/popup/domain-container.js'
import DomainNew from '../src/js/popup/domain-new.js'

/*
*  Tests for Domains component in src/js/popup/domains.js.
*/
describe('<Domains />', function() {
  before(function () {
    global.chrome = chrome;
  });
  it('addDomain(domain) successfully adds domain to container with unique id', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
  });

  it('storeDomain(validDomain, container) successfully adds container to localStorage', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
    expect(localStorage.getItem('container')).equals('[{"id":"' + shortid + '","domain":".*://.*testdomain.com/.*"}]');
  });

  it('getIndex(value, key) successfully retrieves and returns index of domain in container', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
    expect(wrapper.instance().getIndex(shortid, 'id')).equals(0);
  });

  it('getIndex(value, key) returns -1 when domain cannot be found in container', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
    expect(wrapper.instance().getIndex(12345, 'id')).equals(-1);
  });

  it('removeDomain(id) successfully removes domain from the container', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
    wrapper.instance().removeDomain(shortid);    
    expect(localStorage.getItem('container')).equals('[]');
  });

  it('removeDomain(id) with wrong "id" does not affect domain container', function() {
    const wrapper = shallow(<Domains />);
    wrapper.setState({ container: []});
    wrapper.instance().addDomain("testdomain.com");
    const shortid = wrapper.state('container')[0].id;
    expect(wrapper.state('container')).to.deep.equal([ { id: shortid, domain: '.*://.*testdomain.com/.*' } ]);
    wrapper.instance().removeDomain(12345);
    expect(localStorage.getItem('container')).equals('[{"id":"' + shortid + '","domain":".*://.*testdomain.com/.*"}]');
  });

  it('renders "Blocked Domains" title, <DomainNew /> component, and <DomainContainer /> component', function() {
    const wrapper = shallow(<Domains />);
    expect(wrapper.find(".domains-title")).to.have.length(1);
    expect(wrapper.find(DomainNew)).to.have.length(1);
    expect(wrapper.find(DomainContainer)).to.have.length(1);
  });
});
