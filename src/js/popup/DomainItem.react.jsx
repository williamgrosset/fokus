import React from 'react';
import PropTypes from 'prop-types';

export default class DomainItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteDomain = this.deleteDomain.bind(this);

    this.state = {
      domain: this.props.domain || '',
    };
  }

  /*
  *  Handles onClick event and removes the domain with the corresponding id.
  *
  *  @param e: Event handler for domain deletion.
  */
  deleteDomain(e) {
    if (this.props.id == undefined) {
      return;
    }
    e.preventDefault();
    this.setState({ domain: '' });
    this.props.removeDomain(this.props.id);
  }

  render() {
    let validDomain = '';
    if (this.state.domain == undefined) {
      validDomain = 'An error has occured.';
    } else {
      validDomain = this.state.domain.replace('.*:\/\/\.*', '').replace('\/.*', '');
      // Add "..." to end of the domain if length is too large for popup window
      if (validDomain.length >= 19) {
        validDomain = validDomain.substring(0, 21).concat('...');
      }
    }

    return (
      <li id='domain-item'>
        <div style={{ float:'left' }} id='domain-name'>
          {validDomain}
        </div>
        <div>
          <input type='image' id='domain-delete' style={{ float:'right' }} src='/png/garbage_can_16.png' onClick={this.deleteDomain} />
        </div>
      </li>
    );
  }
}

DomainItem.defaultProps = {
  domain: undefined,
  id: undefined,
};

DomainItem.propTypes = {
  domain: PropTypes.string,
  id: PropTypes.string,
};
