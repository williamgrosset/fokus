import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';
import DomainItem from './domain-item.js';
import shortid from 'shortid';

const container = [{
    id: 0,
    domain: 'reddit.com'
}];

class Domains extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            container
        };

        this.addDomain = this.addDomain.bind(this);
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
        this.state.container.push({
            id: shortid.generate(),
            domain
        });
        this.setState({ container: this.state.container });
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
        console.log('removeDomain index: ' + index);
        this.setState({ container: this.state.container.filter((_, ind) => ind !== index) });
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
