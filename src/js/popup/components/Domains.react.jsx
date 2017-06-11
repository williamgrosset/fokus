import React from 'react';
import shortid from 'shortid';
import DomainNew from './DomainNew.react.jsx';
import DomainContainer from './DomainContainer.react.jsx';

export default class Domains extends React.Component {

  /*
  *  Send validDomain to the background script to be added to the collection of blocked domains and store the domains
  *  container in HTML localStorage.
  *
  *  @param validDomain: Domain with prefix and suffix for proper URL blocking.
  *  @param container:   Container with all of our domains.
  */
  static storeDomain(validDomain, container) {
    chrome.runtime.sendMessage({
      validDomain,
    });
    localStorage.setItem('container', JSON.stringify(container));
  }

  constructor(props) {
    super(props);
    this.getIndex = this.getIndex.bind(this);
    this.removeDomain = this.removeDomain.bind(this);
    this.addDomain = this.addDomain.bind(this);

    const container = JSON.parse(localStorage.getItem('container')) || [];
    this.state = {
      container,
    };
  }

  /*
  *  Retrieve index value of domain to delete.
  *
  *  @param value:  Unique id to match.
  *  @param key:    Attribute of object.
  *  @return index: Index of domain to delete.
  */
  getIndex(value, key) {
    for (let i = 0; i < this.state.container.length; i++) {
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
    if (index === -1) return;

    chrome.runtime.sendMessage({
      index,
    });
    this.setState(prevState => ({ container: prevState.container.filter((_, ind) => ind !== index) }), () => {
      localStorage.setItem('container', JSON.stringify(this.state.container));
    });
  }

  /*
  *  Adds valid domain from form input into the domain container.
  *
  *  @param domain: Domain from form input value.
  */
  addDomain(domain) {
    const validDomain = '.*://.*'.concat(domain).concat('/.*');
    const newDomain = {
      id: shortid.generate(),
      validDomain,
    };

    this.setState(prevState => ({ container: prevState.container.concat(newDomain) }), () => {
      Domains.storeDomain(domain, this.state.container);
    });
  }

  render() {
    return (
      <div className='domains'>
        <p className='domains-title'>Blocked Domains</p>
        <DomainNew container={this.state.container} addDomain={this.addDomain} />
        <DomainContainer container={this.state.container} removeDomain={this.removeDomain} />
      </div>
    );
  }
}
