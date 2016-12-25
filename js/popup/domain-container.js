import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    renderContainer() {
        const extra = this.props; // passing down too many things
        //console.log(extra);
        const test = this.props.container.map((domain) => <DomainItem {...domain} key={domain.id} {...extra} /> );
        console.log(test);
        return test;
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
