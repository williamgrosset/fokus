import React from 'react';

class DomainItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'initial'};

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        console.log('we submitted something :)');
        e.preventDefault();
        this.setState({value: 'hey'});
        console.log(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type='text' placeholder='www.facebook.com' />
            </form>
        );
    }
}

module.exports = DomainItem;
