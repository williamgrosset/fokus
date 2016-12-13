import React from 'react';
import DomainContainer from './domain-container.js';

class Domains extends React.Component {
    render() {
        return (
            <div>
                <p className='domains-title'>Blocked Domains</p>
                <DomainContainer />
            </div>
        );
    }
}

module.exports = Domains;
