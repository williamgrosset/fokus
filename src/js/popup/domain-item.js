import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteDomain = this.deleteDomain.bind(this);
    }

    /*
    *  Handles onClick event and removes the domain with the
    *  corresponding id.
    */
    deleteDomain(e) {
        e.preventDefault();
        this.props.removeDomain(this.props.id);
    }

    render() {
        var prefix = ".*:\/\/\.*";
        var suffix = "\/.*";
        var validDomain = this.props.domain;

        validDomain = validDomain.replace(prefix, '');
        validDomain = validDomain.replace(suffix, '');
        if (validDomain.length >= 20)
            validDomain = validDomain.substring(0, 21).concat("...");

        return (
            <div>
                <li>
                    <div style={{float:'left'}} id='domain-item'>{validDomain}</div>
                    <div><input type='image' id='domain-delete' style={{float:'right'}} src='../../../png/garbage_can_16.png' onClick={this.deleteDomain} /></div>
                </li>
            </div>
        );
    }
}

module.exports = DomainItem;
