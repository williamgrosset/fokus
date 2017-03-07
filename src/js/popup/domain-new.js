import React from 'react';

class DomainNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    
        this.inputChange = this.inputChange.bind(this);
        this.domainValidation = this.domainValidation.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    /*
    *  Keeps track of the user input and update state.
    *
    *  @param e: Event handler for form input value.
    */
    inputChange(e) {
        this.setState({value: e.target.value});
    }

    /*
    *  Add valid domain to domain container.
    *
    *  @param e: Submitted form input value.
    *  @param e: Event handler for form input value.
    */
    domainValidation(e) {
        var domain = this.state.value;
        domain.toLowerCase();
        e.preventDefault();

        // Show modal for domain container max
        if (this.props.container.length == 30) {
            this.showModal(e, 'myModalMax', 0);
            return;
        // Show modal for invalid domain
        } else if (domain.includes("http") || domain.includes("https") 
                      || domain.includes(":") || domain.includes("/") 
                      || domain === "" || !domain.includes(".") 
                      || domain.includes(" ")) {
            this.showModal(e, 'myModalError', 1);
            return; 
        // Successfully add domain to domain blocker container
        } else {
            this.props.addDomain(this.state.value);
            this.setState({value: ''});
        }
    }

    /*
    *  Displays appropriate modal for max container and domain validation.
    *
    *  @param e: Submitted form input value.
    *  @param id: ID of modal (valid values: "myModalMax" or "myModalError").
    *  @param i: Integer value for grabbing appropriate modal within span 
    *  (valid values: 0 or 1).
    */
    showModal(e, id, i) {
        var modal = document.getElementById(id);
        modal.style.display = 'block';
        var span = document.getElementsByClassName("close")[i];
        span.onclick = function() {
            modal.style.display = 'none';
        }

        var input = document.getElementById('input');
        input.value = "";
        e.preventDefault(); 
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.domainValidation} id='form' >
                <input id='input' type='text' value={this.state.value} placeholder='e.g. facebook.com' autoComplete="off" onChange={this.inputChange} />
            </form>
        );
    }
}

module.exports = DomainNew;
