import React from 'react';
import PropTypes from 'prop-types';

export default class DomainItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteDomain = this.deleteDomain.bind(this);

    console.log(this.props);
    this.state = {
      validDomain: this.props.validDomain || '',
    };
  }

  /*
  *  Handles onClick event and removes the domain with the corresponding id.
  *
  *  @param e: Event handler for domain deletion.
  */
  deleteDomain(e) {
    e.preventDefault();
    this.setState({ validDomain: '' });
    this.props.removeDomain(this.props.id);
  }

  render() {
    let uiDomain = this.state.validDomain;
    uiDomain = uiDomain.replace('.*://.*', '').replace('/.*', '');
    // Add "..." to end of the domain if length is too large for popup window
    if (uiDomain.length >= 19) {
      uiDomain = uiDomain.substring(0, 21).concat('...');
    }

    return (
      <li id='domain-item'>
        <div style={{ float: 'left' }} id='domain-name'>
          {uiDomain}
        </div>
        <div>
          <input
            type='image'
            id='domain-delete'
            alt='Delete'
            src='/png/garbage_can_16.png'
            style={{ float: 'right' }}
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
