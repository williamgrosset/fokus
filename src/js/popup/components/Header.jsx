import React from 'react';

export default class Header extends React.Component {

  /*
  *  Handle onClick event with header image. The current window will be changed to the fokus home page.
  */
  static fokusTab() {
    window.open('/src/html/home.html').focus();
  }

  render() {
    return (
      <div className='fokus-link'>
        <input
          type='image'
          src='/png/fokus_title_128.png'
          alt='fokus'
          style={{ outline: 'none' }}
          onClick={Header.fokusTab}
        />
      </div>
    );
  }
}
