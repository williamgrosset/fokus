import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
