import React from 'react';

class DomainNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    
        this.inputChange = this.inputChange.bind(this);
        this.addDomain = this.addDomain.bind(this);
    }

    /*
    *  Keeps track of the user input and constantly updates the state
    *  (yes, this is obviously not the most optimized solution).
    *
    *  @param e: Changed form input value.
    */
    inputChange(e) {
        this.setState({value: e.target.value});
    }

    /*
    *  Displays appropriate modal for max container and domain validation.
    *  If domain is valid, add form input value to domain container.
    *
    *  @param e: Submitted form input value.
    */
    addDomain(e) {
        var domain = this.state.value;
        domain.toLowerCase();
        e.preventDefault();
        if (this.props.container.length == 30) {
            var modal = document.getElementById('myModalMax');
            modal.style.display = 'block';
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = 'none';
            }

            var input = document.getElementById('input');
            input.value = "";
            e.preventDefault(); 
            return;
        } else if (domain.includes("http") || domain.includes("https") 
                      || domain.includes("://") || domain.includes("//") 
                      || domain === "") {
            var modal = document.getElementById('myModalError');
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
            this.props.addDomain(this.state.value);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.addDomain} id='form' >
                <input id='input' type='text' value={this.state.value} placeholder='e.g. facebook.com' autoComplete="off" onChange={this.inputChange} />
            </form>
        );
    }
}

module.exports = DomainNew;
