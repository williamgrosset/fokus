import React from 'react';

class DomainNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        console.log('we submitted something :)');
        console.log(this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} placeholder='www.facebook.com' onChange={this.handleChange} />
            </form>
        );
    }
}

module.exports = DomainNew;
