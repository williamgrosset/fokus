import React from 'react';
import PropTypes from 'prop-types';

class DomainItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteDomain = this.deleteDomain.bind(this);

    this.state = {
      validDomain: this.props.validDomain || '',
    };
  }

  deleteDomain(e) {
    e.preventDefault();

    const { id, removeDomain } = this.props;
    this.setState({ validDomain: '' });
    removeDomain(id);
  }

  render() {
    const { validDomain } = this.state;
    let uiDomain = validDomain.replace('.*://.*', '').replace('/.*', '');

    // Add "..." to end of the domain if length is too large
    if (uiDomain.length >= 19) {
      uiDomain = uiDomain.substring(0, 21).concat('...');
    }

    return (
      <li id="domain-item">
        <div
          id="domain-name"
          className="domain-name"
        >
          {uiDomain}
        </div>
        <div>
          <input
            type="image"
            id="domain-delete"
            className="garbage-can"
            alt="Delete"
            src="/png/garbage_can_16.png"
            onClick={this.deleteDomain}
          />
        </div>
      </li>
    );
  }
}

DomainItem.propTypes = {
  id: PropTypes.string.isRequired,
  validDomain: PropTypes.string.isRequired,
  removeDomain: PropTypes.func.isRequired,
};

export default DomainItem;
