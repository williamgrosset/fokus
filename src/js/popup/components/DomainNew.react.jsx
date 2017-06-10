import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class DomainNew extends React.Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.domainValidation = this.domainValidation.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.showModal = this.showModal.bind(this);

    this.state = {
      value: '',
    };
  }

  /*
  *  Keeps track of the user input and updates state.
  *
  *  @param e: Event handler for form input value.
  */
  inputChange(e) {
    this.setState({ value: e.target.value });
  }

  /*
  *  Add valid domain to domain container or show appropriate modal if an error exists.
  *
  *  @param e: Event handler for form input value.
  */
  domainValidation(e) {
    const domain = this.state.value.toLowerCase();
    e.preventDefault();

    // Show modal for domain container max
    if (this.props.container.length === 30) {
      this.showModal(e, 'myModalMax', 0);
      return;
    }
    // Show modal for invalid domain
    if (!this.errorCheck(domain)) {
      this.showModal(e, 'myModalError', 1);
    // Successfully add domain to domain blocker container
    } else {
      this.props.addDomain(this.state.value);
      this.setState({ value: '' });
    }
  }

  /*
  *  Checks if domain is valid before being added into parent container.
  *
  *  @param domain:    Domain from form input value.
  *  @returns boolean: False if domain is invalid, otherwise true.
  */
  errorCheck(domain) {
    if (domain.includes('http') || domain.includes(':') || domain.includes('/') || domain === ''
        || !domain.includes('.') || domain.includes(' ')) {
      return false;
    }
    return true;
  }

  /*
  *  Displays appropriate modal for max container and domain validation.
  *
  *  @param e:  Submitted form input value.
  *  @param id: ID of modal (valid values: 'myModalMax' or 'myModalError').
  *  @param i:  Integer value for grabbing appropriate modal within span (valid values: 0 or 1).
  */
  showModal(e, id, i) {
    const span = $('.close')[i];
    e.preventDefault();

    $(`#${id}`).css('display', 'block');
    span.onclick = () => {
      $(`#${id}`).css('display', 'none');
    };
    $('#input').val('');
  }

  render() {
    return (
      <form id='form' autoComplete='off' onSubmit={this.domainValidation}>
        <input
          id='input'
          type='text'
          placeholder='e.g. tomgrosset.com'
          autoComplete='off'
          value={this.state.value}
          onChange={this.inputChange}
        />
      </form>
    );
  }
}

DomainNew.propTypes = {
  container: PropTypes.arrayOf(PropTypes.object).isRequired,
  addDomain: PropTypes.func.isRequired,
};
