import React from 'react';
import DomainContainer from './domain-container.js';
import DomainNew from './domain-new.js';

class Domains extends React.Component {
    render() {
        return (
            <div>
                <p className='domains-title'>Blocked Domains</p>
                <DomainNew />
                <DomainContainer />
            </div>
        );
    }
}

module.exports = Domains;
