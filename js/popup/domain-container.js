import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    renderContainer() {
        return this.props.container.map((domain, index) => <DomainItem key={index} {...domain} />);
    }

    // if we did not use '()', the function would never be called
    render() {
        return (
            <ul id='domain-container'>
                {this.renderContainer()}
            </ul>
        );
    }
}

module.exports = DomainContainer;
