import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';
import DomainItem from './domain-item.js';
import shortid from 'shortid';
import $ from 'jquery';

class Domains extends React.Component {
    constructor(props) {
        super(props);
 
        var container = []; // used for testing
        //localStorage.setItem('container', JSON.stringify(container)); // used for testing
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
    * addDomain(domain):
    * This method is passed down to the child component (DomainNew)
    * and is used when the user inputs a valid domain to be blocked.
    * The valid domain is added to the container array that contains
    * an object for each unique domain.
    */
    addDomain(domain) {
        console.log('addDomain (before adding) current container: ');
        console.log(this.state.container);
        domain = this.validDomain(domain);
        var idValue = shortid.generate();
        this.state.container.push({
            id: idValue,
            domain
        });
        console.log('addDomain current container: ' + this.state.container);
        this.setState({ container: this.state.container });
        this.storeDomain(idValue, domain, this.state.container);
    }

    /*
    * validDomain(domain):
    * TODO:
    * - Add pattern matching for showing invalid input
    */
    validDomain(domain) {
        var prefix = ".*:\/\/\.*";
        var suffix = "\/.*";
        var validDomain = prefix.concat(domain).concat(suffix);
        return validDomain;
    }

    /*
    * storeDomain(validDomain):
    */
    storeDomain(idValue, validDomain, container) {
        chrome.runtime.sendMessage({
            validDomain
        });
        var empty = []; // used for testing
        localStorage.setItem('container', JSON.stringify(container));
        /*
        chrome.runtime.sendMessage({
            container
        });
        */
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
        /*
        chrome.runtime.sendMessage({
            newContainer
        });
        */
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
