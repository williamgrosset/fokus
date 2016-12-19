import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {container: []};
    }

    render() {
        return (
            <ul id='domain-container'>
            </ul>
        );
    }
}

module.exports = DomainContainer;
