import React from 'react';
import PropTypes from 'prop-types';

const DomainItem = ({ id, validDomain, removeDomain }) => {
  const deleteDomain = (e) => {
    e.preventDefault();
    removeDomain(id);
  };

  const getUiDomain = (domain) => {
    let uiDomain = domain.replace('.*://.*', '').replace('/.*', '');
    // Add "..." to end of the domain if length is too large
    return uiDomain.length >= 19 ? uiDomain.substring(0, 21).concat('...') : uiDomain;
  };

  return (
    <li id="domain-item">
      <div
        id="domain-name"
        className="domain-name"
      >
        {getUiDomain(validDomain)}
      </div>
      <div>
        <input
          type="image"
          id="domain-delete"
          className="garbage-can"
          alt="Delete"
          src="/png/garbage_can_16.png"
          onClick={deleteDomain}
        />
      </div>
    </li>
  );
};

DomainItem.propTypes = {
  id: PropTypes.string.isRequired,
  validDomain: PropTypes.string.isRequired,
  removeDomain: PropTypes.func.isRequired,
};

export default DomainItem;
