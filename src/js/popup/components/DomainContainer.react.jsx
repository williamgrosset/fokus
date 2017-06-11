import React from 'react';
import PropTypes from 'prop-types';
import DomainItem from './DomainItem.react.jsx';

export default class DomainContainer extends React.Component {
  render() {
    // fix this...
    const removeDomain = this.props;
    if (this.props.container.length !== 0) {
      return (
        <ul id='domain-container'>
          {this.props.container.map(validDomain => <DomainItem {...removeDomain} {...validDomain} key={validDomain.id} />)}
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

/*
const DomainContainer = ({ container, removeDomain }) => (
  <ul id='domain-container'>
    {container.map(domain => <DomainItem {...removeDomain} {...domain} key={domain.id} />)}
  </ul>
);
*/

DomainContainer.propTypes = {
  container: PropTypes.arrayOf(PropTypes.object).isRequired,
};
