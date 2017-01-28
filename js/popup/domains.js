import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';
import DomainItem from './domain-item.js';
import shortid from 'shortid';

class Domains extends React.Component {
    constructor(props) {
        super(props);
        var container = JSON.parse(localStorage.getItem('container')) || [];

        this.state = {
            container
        };

        this.addDomain = this.addDomain.bind(this);
        this.validDomain = this.validDomain.bind(this);
        this.storeDomain = this.storeDomain.bind(this);
        this.removeDomain = this.removeDomain.bind(this);
        this.getIndex = this.getIndex.bind(this);
    }

    /*
    *  Domain from form user input is added to our container. Our
    *  validDomain function validates our domain to be blocked and 
    *  then we call our storeDomain function to store our container
    *  in localStorage.
    *
    *  @param domain: Domain from event.target.value.
    */
    addDomain(domain) {
        domain = this.validDomain(domain);
        var idValue = shortid.generate();
        this.state.container.push({
            id: idValue,
            domain
        });
        this.setState({ container: this.state.container });
        this.storeDomain(domain, this.state.container);
    }

    /*
    *  Adds prefix and suffix to our domain to be properly blocked.
    *
    *  @param domain: Domain from event.target.value.
    *  @return validDomain: Domain with added prefix and suffix.
    */
    validDomain(domain) {
        var prefix = ".*:\/\/\.*";
        var suffix = "\/.*";
        return prefix.concat(domain).concat(suffix);
    }

    /*
    *  Send our validDomain to our background script to be added
    *  to our collection of our blocked domains to be enabled and 
    *  disabled. Then, we store our domains container to local
    *  storage to keep our data persistent.
    *
    *  @param validDomain: Domain with prefix and suffix for
    *  proper URL blocking.
    *  @param container: Container with all of our domains.
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
    *  @param value: Unique id to match.
    *  @param key: Attribute of object.
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
    *  Seach for index and filter matched item out of container. 
    *  Send index to background script for domain to be removed from
    *  domain blocker container.
    *
    *  @param id: Unique id for domain to delete.
    */
    removeDomain(id) {
        var index = this.getIndex(id, 'id');
        if (index == -1) {
            return;
        }
        chrome.runtime.sendMessage({
            index
        });
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

module.exports = Domains;
