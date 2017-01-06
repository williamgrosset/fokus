import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';
import DomainItem from './domain-item.js';
import shortid from 'shortid';

class Domains extends React.Component {
    constructor(props) {
        super(props);
 
        var container = []; //used for testing
        var container = JSON.parse(localStorage.getItem('container')) || [];

        this.state = {
            container
        };

        console.log('Domains: ');
        console.log(container);

        this.addDomain = this.addDomain.bind(this);
        this.validDomain = this.validDomain.bind(this);
        this.storeDomain = this.storeDomain.bind(this);
        this.removeDomain = this.removeDomain.bind(this);
        this.getIndex = this.getIndex.bind(this);
    }

    // Using cookies, show example way to add a valid domain
    
    /*
    * addDomain(domain):
    * This method is passed down to the child component (DomainNew)
    * and is used when the user inputs a valid domain to be blocked.
    * The valid domain is added to the container array that contains
    * an object for each unique domain.
    */
    addDomain(domain) {
        console.log('addDomain (before adding) current container: ');
        console.log(this.state.container);
        var validDomain = this.validDomain(domain);
        var idValue = shortid.generate();
        this.state.container.push({
            id: idValue,
            domain
        });
        console.log('addDomain current container: ' + this.state.container);
        this.setState({ container: this.state.container });
        this.storeDomain(idValue, validDomain, this.state.container);
    }

    /*
    * validDomain(domain):
    * TODO:
    * - Add pattern matching for showing invalid input
    * - Add prefix and suffix for else case (DONE)
    */
    validDomain(domain) {
        var prefix = "*://*.";
        var suffix = "/*";
        var validDomain = prefix.concat(domain).concat(suffix);
        return validDomain;
    }

    /*
    * storeDomain(validDomain):
    * TODO: Needs storing:
    * - background page array
    * - chrome.storage.local
    * - viusally on UI (DONE)
    */
    storeDomain(idValue, validDomain, container) {
        chrome.runtime.sendMessage({
            validDomain
        });
        var empty = []; // used for testing
        localStorage.setItem('container', JSON.stringify(container));
    }

    /*
    * getIndex(value, prop):
    */
    getIndex(value, prop) {
        for (var i = 0; i < this.state.container.length; i++) {
            if (this.state.container[i][prop] === value) {
                return i;
            }
        }
        return -1;
    }

    /*
    * removeDomain(e):
    * TODO: Needs deleting from: 
    * - background page array
    * - chrome.storage.local
    * - visually on UI (DONE)
    */
    removeDomain(id) {
        var index = this.getIndex(id, 'id');
        console.log('index: ' + index);
        if (index == -1) {
            console.log('removeDomain: could not find index :(');
            return;
        }
        chrome.runtime.sendMessage({
            index
        });
        var newContainer = this.state.container.filter((_, ind) => ind !== index);
        this.state.container = newContainer;
        console.log('newContainer: ');
        console.log(newContainer);
        localStorage.setItem('container', JSON.stringify(this.state.container));
        this.setState({ container: newContainer });
        console.log('checking container from localStorage: ');
        console.log(JSON.parse(localStorage.getItem('container')));
        console.log('removeDomain current container: ');
        console.log(this.state.container);
    }

    render() {
        return (
            <div>
                <p className='domains-title'>Blocked Domains</p>
                <DomainNew addDomain={this.addDomain} />
                <DomainContainer container={this.state.container} removeDomain={this.removeDomain} />
            </div>
        );
    }
}

module.exports = Domains;
