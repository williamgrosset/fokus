import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';

const container = [{
    domain: 'reddit.com'
}];

class Domains extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            container
        };
        this.addDomain = this.addDomain.bind(this);
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
            domain
        });
        this.setState({ container: this.state.container });
    }

    render() {
        return (
            <div>
                <p className='domains-title'>Blocked Domains</p>
                <DomainNew addDomain={this.addDomain} />
                <DomainContainer container={this.state.container} />
            </div>
        );
    }
}

module.exports = Domains;
