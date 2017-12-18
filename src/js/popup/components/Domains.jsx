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

  static storeDomain(container) {
    chrome.runtime.sendMessage({
      container,
    });
    localStorage.setItem('container', JSON.stringify(container));
  }

  removeDomain(id) {
    const index = this.state.container.findIndex(domain => domain.id === id);
    if (index !== -1) {
      this.setState(prevState => ({ container: prevState.container.filter((_, ind) => ind !== index) }), () => {
        Domains.storeDomain(this.state.container);
      });
    }
  }

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
