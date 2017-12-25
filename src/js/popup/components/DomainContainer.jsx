import React from 'react';
import PropTypes from 'prop-types';
import DomainItem from './DomainItem';

const DomainContainer = props =>
  props.container.length ? (
    <ul className="container">
      {props.container.map(domain => <DomainItem {...domain} {...props} key={domain.id} />)}
    </ul>
  ) : (
    <ul className="container">
      <p>No domains currently blocked.</p>
    </ul>
  );

DomainContainer.propTypes = {
  container: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DomainContainer;
