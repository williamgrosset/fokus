import React from 'react';

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.fokusTab = this.fokusTab.bind(this);
  }

  /*
  *  Handle onClick event with header image - the current window 
  *  will be changed to the fokus home page.
  */
  fokusTab() {
    var win = window.open("/src/html/home.html");
    win.focus()
  }

  render() {
    return (
      <div className='fokus-link'>
        <img src='/png/fokus_title_128.png' onClick={this.fokusTab}/>
      </div>
    );
  }
}

module.exports = Headers;
