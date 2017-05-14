import React from 'react';
import DomainItem from './DomainItem.react.jsx'
import PropTypes from 'prop-types';

export default class DomainContainer extends React.Component {
  render() {
    const extra = this.props;

    if (this.props.container.length != 0) {
      return (
        <ul id='domain-container'>
          {this.props.container.map((domain) => <DomainItem {...domain} key={domain.id} {...extra} /> )}
        </ul>
      );
    } else {
      return (
        <ul id='domain-container'>
          <p>No domains currently blocked.</p>
        </ul>
      );
    }
  }
}

DomainContainer.propTypes = {
  container: PropTypes.array.isRequired,
};
