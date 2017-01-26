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
        var domain = this.state.value;
        domain.toLowerCase();
        if (this.props.container.length == 30) {
            var modal = document.getElementById('myModalMax');
            modal.style.display = 'block';
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = 'none';
            }
            e.preventDefault();
            return;
        } else if (domain.includes("http") || domain.includes("https") || domain.includes("://") || domain.includes("//")) {
            var modal = document.getElementById('myModalHTTP');
            modal.style.display = 'block';
            var span = document.getElementsByClassName("close")[1];
            span.onclick = function() {
                modal.style.display = 'none';
            }
            var input = document.getElementById('input');
            input.value = "";
            e.preventDefault(); 
            return; 
        } else {
            e.preventDefault();
            this.props.addDomain(this.state.value);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit} id='form' >
                <input id='input' type='text' value={this.state.value} placeholder='e.g. facebook.com' autoComplete="off" onChange={this.handleChange} />
            </form>
        );
    }
}

module.exports = DomainNew;
