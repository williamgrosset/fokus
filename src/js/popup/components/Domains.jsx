import React from 'react';
import shortid from 'shortid';
import DomainNew from './DomainNew';
import DomainContainer from './DomainContainer';

export default class Domains extends React.Component {
  constructor(props) {
    super(props);
    this.removeDomain = this.removeDomain.bind(this);
    this.addDomain = this.addDomain.bind(this);

    this.state = {
      container: JSON.parse(localStorage.getItem('container')) || [],
    };
  }

  /*
  *  Send validDomain to the background script to be added to the collection of blocked domains and store the domains
  *  container in HTML localStorage.
  *
  *  @param validDomain: Domain with prefix and suffix for proper URL blocking.
  *  @param container:   Container with all of our domains.
  */
  static storeDomain(container) {
    chrome.runtime.sendMessage({
      container,
    });
    localStorage.setItem('container', JSON.stringify(container));
  }

  /*
  *  Search for index and filter matched item out of container and send index to background script for domain to
  *  be removed.
  *
  *  @param id: Unique id for domain to delete.
  */
  removeDomain(id) {
    const index = this.state.container.findIndex(domain => domain.id === id);
    if (index !== -1) {
      this.setState(prevState => ({ container: prevState.container.filter((_, ind) => ind !== index) }), () => {
        Domains.storeDomain(this.state.container);
      });
    }
  }

  /*
  *  Adds valid domain from form input into the domain container.
  *
  *  @param domain: Domain from form input value.
  */
  addDomain(domain) {
    const newDomain = {
      id: shortid.generate(),
      validDomain: '.*://.*'.concat(domain).concat('/.*'),
    };
    this.setState(prevState => ({ container: prevState.container.concat(newDomain) }), () => {
      Domains.storeDomain(this.state.container);
    });
  }

  render() {
    return (
      <div className="domains">
        <p className="domains-title">Blocked Domains</p>
        <DomainNew container={this.state.container} addDomain={this.addDomain} />
        <DomainContainer container={this.state.container} removeDomain={this.removeDomain} />
      </div>
    );
  }
}
