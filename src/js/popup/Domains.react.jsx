import React from 'react';
import DomainNew from './DomainNew.react.jsx';
import DomainContainer from './DomainContainer.react.jsx';
import DomainItem from './DomainItem.react.jsx';
import shortid from 'shortid';

export default class Domains extends React.Component {
  constructor(props) {
    super(props);
    const container = JSON.parse(localStorage.getItem('container')) || [];
    this.state = {
      container
    };
    console.log(this.state.container);
    this.addDomain = this.addDomain.bind(this);
    this.storeDomain = this.storeDomain.bind(this);
    this.removeDomain = this.removeDomain.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  /*
  *  Adds valid domain from form input into the domain container.
  *
  *  @param domain: Domain from form input value.
  */
  addDomain(domain) {
    domain = ".*:\/\/\.*".concat(domain).concat("\/.*");
    const idValue = shortid.generate();
    this.state.container.push({
      id: idValue,
      domain,
    });
    this.setState({ container: this.state.container });
    /*
    const container = this.state.container;
    this.setState({ container: 
      container.push({
        id: idValue,
        domain,
      })
    });
    */
    this.storeDomain(domain, this.state.container);
    console.log(this.state.container);
  }

  /*
  *  Send validDomain to the background script to be added to the collection of blocked domains and store the domains 
  *  container in HTML localStorage.
  *
  *  @param validDomain: Domain with prefix and suffix for proper URL blocking.
  *  @param container:   Container with all of our domains.
  */
  storeDomain(validDomain, container) {
    chrome.runtime.sendMessage({
      validDomain
    });
    localStorage.setItem('container', JSON.stringify(container));
  }

  /*
  *  Retrieve index value of domain to delete.
  *
  *  @param value:  Unique id to match.
  *  @param key:    Attribute of object.
  *  @return index: Index of domain to delete.
  */
  getIndex(value, key) {
    for (var i = 0; i < this.state.container.length; i++) {
      if (this.state.container[i][key] === value) {
        return i;
      }
    }
    return -1;
  }

  /*
  *  Search for index and filter matched item out of container and send index to background script for domain to 
  *  be removed.
  *
  *  @param id: Unique id for domain to delete.
  */
  removeDomain(id) {
    const index = this.getIndex(id, 'id');
    if (index == -1) {
      return;
    }

    chrome.runtime.sendMessage({
      index
    });
    // BELOW NEEDS FIXING
    var newContainer = this.state.container.filter((_, ind) => ind !== index);
    this.state.container = newContainer;

    this.setState({ container: newContainer });
    localStorage.setItem('container', JSON.stringify(this.state.container));
  }

  render() {
    return (
      <div>
        <p className='domains-title'>Blocked Domains</p>
        <DomainNew container={this.state.container} addDomain={this.addDomain} />
        <DomainContainer container={this.state.container} removeDomain={this.removeDomain} />
      </div>
    );
  }
}
