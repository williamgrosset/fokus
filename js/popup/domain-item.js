import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteDomain() {
        console.log('hey, we clicked delete');
    }

    render() {
        return (
            <div>
                <li>{this.props.domain}</li><button>Delete</button>
            </div>
        );
    }
}

module.exports = DomainItem;
