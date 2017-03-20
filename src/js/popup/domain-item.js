import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: this.props.domain,
            id: this.props.id
        }
        this.deleteDomain = this.deleteDomain.bind(this);
    }

    /*
    *  Handles onClick event and removes the domain with the
    *  corresponding id.
    *
    *  @param e: Event handler for domain deletion.
    */
    deleteDomain(e) {
        e.preventDefault();
        this.setState({ domain: '' });
        this.props.removeDomain(this.props.id);
    }

    render() {
        var validDomain = this.state.domain;
        validDomain = validDomain.replace(".*:\/\/\.*", '');
        validDomain = validDomain.replace("\/.*", '');

        // Add "..." to end of the domain if length is too large for popup window
        if (validDomain.length >= 19)
            validDomain = validDomain.substring(0, 21).concat("...");

        return (
            <div>
                <li>
                    <div style={{float:'left'}} id='domain-item'>{validDomain}</div>
                    <div><input type='image' id='domain-delete' style={{float:'right'}} src='/png/garbage_can_16.png' onClick={this.deleteDomain} /></div>
                </li>
            </div>
        );
    }
}

module.exports = DomainItem;
