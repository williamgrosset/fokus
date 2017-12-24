import React from 'react';
import shortid from 'shortid';
import DomainNew from './DomainNew';
import DomainContainer from './DomainContainer';

class Domains extends React.Component {
  constructor(props) {
    super(props);
    this.getDomainIndex = this.getDomainIndex.bind(this);
    this.removeDomain = this.removeDomain.bind(this);
    this.addDomain = this.addDomain.bind(this);

    this.state = {
      container: JSON.parse(localStorage.getItem('container')) || [],
    };
  }

  static storeContainer(container) {
    chrome.runtime.sendMessage({
      container,
    });
    localStorage.setItem('container', JSON.stringify(container));
  }

  getDomainIndex(id) {
    const { container } = this.state;
    return container.findIndex(domain => domain.id === id);
  }

  removeDomain(id) {
    const index = this.getDomainIndex(id);

    if (index !== -1) {
      this.setState(
        prevState => ({ container: prevState.container.filter((_, ind) => ind !== index) }),
        () => {
          const { container } = this.state;
          Domains.storeContainer(container);
        },
      );
    }
  }

  addDomain(domain) {
    const newDomain = {
      id: shortid.generate(),
      validDomain: '.*://.*'.concat(domain).concat('/.*'),
    };

    this.setState(
      prevState => ({ container: prevState.container.concat(newDomain) }),
      () => {
        const { container } = this.state;
        Domains.storeContainer(container);
      },
    );
  }

  render() {
    const { container } = this.state;

    return (
      <div className="domains">
        <p className="domains-title">Blocked Domains</p>
        <DomainNew container={container} addDomain={this.addDomain} />
        <DomainContainer container={container} removeDomain={this.removeDomain} />
      </div>
    );
  }
}

export default Domains;
