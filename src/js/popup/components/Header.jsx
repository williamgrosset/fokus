import React from 'react';

const Header = () => (
  <div className='fokus-link'>
    <input
      type='image'
      src='/png/fokus_title_128.png'
      alt='fokus'
      style={{ outline: 'none' }}
      onClick={(e) => window.open('/src/html/home.html').focus()}
    />
  </div>
);

export default Header;
