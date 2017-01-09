import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.removeDomain(this.props.id);
        console.log(this.props.id);
    }

    render() {
        var validDomain = this.props.domain;
        var prefix = ".*:\/\/\.*";
        var suffix = "\/.*";
        validDomain = validDomain.replace(prefix, '');
        validDomain = validDomain.replace(suffix, '');
        return (
            <div>
                <li id='domain-element'>{validDomain}</li><input id='domain-delete' type='image' src='../../png/garbage_can_16.png' onClick={this.handleClick} />
            </div>
        );
    }
}

module.exports = DomainItem;
