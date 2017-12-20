import React from 'react';
import PropTypes from 'prop-types';

const DomainItem = ({ id, validDomain, removeDomain }) => {
  const deleteDomain = (e) => {
    e.preventDefault();
    removeDomain(id);
  };

  let uiDomain = validDomain;
  uiDomain = uiDomain.replace('.*://.*', '').replace('/.*', '');
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
