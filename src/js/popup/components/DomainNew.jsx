import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class DomainNew extends React.Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.saveDomain = this.saveDomain.bind(this);

    this.state = {
      value: '',
    };
  }

  /*
  *  Displays appropriate modal for container max and domain validation.
  *
  *  @param id: ID of modal (valid values: 'myModalMax' or 'myModalError').
  *  @param i:  Integer value for grabbing appropriate modal within span (valid values: 0 or 1).
  */
  static showModal(e, id, i) {
    const span = $('.close')[i];
    e.preventDefault();

    $(`#${id}`).css('display', 'block');
    span.onclick = () => {
      $(`#${id}`).css('display', 'none');
    };
    $('#input').val('');
  }

  static isDomainValid(domain) {
    if (!/^[a-z0-9]+\.[a-z0-9]+$/.test(domain)) return true;
    return false;
  }

  saveDomain(e) {
    const domain = this.state.value.toLowerCase();
    e.preventDefault();

    // Check domain container max
    if (this.props.container.length === 90) {
      DomainNew.showModal(e, 'myModalMax', 0);
      return;
    }

    // Check if domain is valid
    if (DomainNew.isDomainValid(domain)) {
      DomainNew.showModal(e, 'myModalError', 1);
    // Successfully add domain to be blocked 
    } else {
      this.props.addDomain(this.state.value);
      this.setState({ value: '' });
    }
  }

  inputChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form id="form" autoComplete="off" onSubmit={this.saveDomain}>
        <input
          id="input"
          type="text"
          placeholder="e.g. tomgrosset.com"
          autoComplete="off"
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

export default DomainNew;
