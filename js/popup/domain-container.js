import _ from 'lodash';
import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    renderContainer() {
        const props = _.omit(this.props, 'container');
        
        return _.map(this.props.container, (contain, index) => <DomainItem key={index} {...contain} {...props} />);
    }

    render() {
        return (
            <ul id='domain-container'>
                {this.renderContainer()}
            </ul>
        );
    }
}

module.exports = DomainContainer;
