import React from 'react';
import DomainContainer from '../src/js/popup/components/DomainContainer.react.jsx';
import DomainItem from '../src/js/popup/components/DomainItem.react.jsx';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/*
*  Tests for DomainContainer component in src/js/popup/domain-container.js.
*/
describe('<DomainContainer />', function() {
  it('renders "No domains currently blocked." with zero domains', function() {
    const wrapper = shallow(<DomainContainer container={[]} />);
    expect(wrapper.contains(
      <ul id='domain-container'>
        <p>No domains currently blocked.</p>
      </ul>
    )).to.be.true;
  });

  it('renders two <DomainItem /> components as list items', function() {
    const wrapper = mount(<DomainContainer container={[
      {
        'id': 'fa9123nan', 
        'domain': 'testdomain.com'
      },
      {
        'id': '1imnb3as', 
        'domain': 'another1.com'
      }
    ]} />);
    expect(wrapper.find('#domain-item')).to.have.length(2);
    expect(wrapper.find(DomainItem)).to.have.length(2);
  });
});
