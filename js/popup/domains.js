import React from 'react';
import DomainNew from './domain-new.js';
import DomainContainer from './domain-container.js';

const container = [{
    domain: 'www.reddit.com'
}];

class Domains extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            container
        };
        this.addDomain = this.addDomain.bind(this);
    }

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
                <DomainNew addDomain={this.addDomain}/>
                <DomainContainer container={this.state.container} />
            </div>
        );
    }
}

module.exports = Domains;
