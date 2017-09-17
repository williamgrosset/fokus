import React from 'react';
import PropTypes from 'prop-types';
import DomainItem from './DomainItem';

const DomainContainer = props => (
  props.container.length !== 0 ?
    <ul id='domain-container'>
      {props.container.map((validDomain, id) => (
        <DomainItem
          {...validDomain}
          {...props}
          key={id}
        />),
      )}
    </ul>
    :
    <ul id='domain-container'>
      <p>No domains currently blocked.</p>
    </ul>
);

DomainContainer.propTypes = {
  container: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DomainContainer;
