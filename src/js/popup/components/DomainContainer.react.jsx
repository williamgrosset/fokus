import React from 'react';
import PropTypes from 'prop-types';
import DomainItem from './DomainItem.react.jsx';

export default class DomainContainer extends React.Component {
  render() {
    const removeDomain = this.props;
    if (this.props.container.length !== 0) {
      return (
        <ul id='domain-container'>
          {this.props.container.map(domain => <DomainItem {...removeDomain} {...domain} key={domain.id} />)}
        </ul>
      );
    }
    return (
      <ul id='domain-container'>
        <p>No domains currently blocked.</p>
      </ul>
    );
  }
}

DomainContainer.propTypes = {
  container: PropTypes.arrayOf(PropTypes.string).isRequired,
};
