import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            container: this.props.container
        };
    }

    render() {
        const extra = this.props;
        if (this.props.container.length != 0) {
            return (
                <ul id='domain-container'>
                    {this.props.container.map((domain) => <DomainItem {...domain} key={domain.id} {...extra} /> )}
                </ul>
            );
        } else {
            return (
                <ul id='domain-container'>
                    <p>No domains currently blocked.</p>
                </ul>
            );
        }
    }
}

module.exports = DomainContainer;