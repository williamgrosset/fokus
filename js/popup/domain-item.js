import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('handleClick id: ' + this.props.id);
        this.props.removeDomain(this.props.id);
    }

    render() {
        return (
            <div>
                <li id='domain-element'>{this.props.domain}</li><input id='domain-delete' type='image' src='../../png/garbage_can_16.png' onClick={this.handleClick} />
            </div>
        );
    }
}

module.exports = DomainItem;
