import React from 'react';

class DomainNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    * handleChange(e):
    * Keeps track of the user input and constantly updates the state.
    * Yes, this is obviously not the most optimized and will be fixed
    * by using the 'ref' attribute.
    */
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    /*
    * handleSubmit(e):
    * Adds the user input value to the domain collection and resets
    * the value in the input box to an empty string.
    */
    handleSubmit(e) {
        e.preventDefault();
        this.props.addDomain(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} placeholder='e.g. www.facebook.com' onChange={this.handleChange} />
            </form>
        );
    }
}

module.exports = DomainNew;
