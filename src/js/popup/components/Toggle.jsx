import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.enableFokus = this.enableFokus.bind(this);
    this.disableFokus = this.disableFokus.bind(this);

    this.state = {
      enabled: localStorage.getItem('fokus-toggle') === 'enable' || false,
    };
  }

  static modifyCss(enabled) {
    const color = enabled ? '#000000' : '#A1A1A1';
    $('.domain-container').css('color', color);
    $('.domains-title').css('color', color);
    $('input[type=text]').css('border-bottom-color', color);
    $('#input').prop('disabled', !enabled);
  }

  /*
  *  Send message to background script and enable domain blocker.
  *  Update boolean value in localStorage and modify CSS for enabled visuals.
  */
  enableFokus() {
    localStorage.setItem('fokus-toggle', 'enable');
    this.setState({ enabled: true }, () => {
      chrome.runtime.sendMessage({
        toggle: true,
      });
    });
  }

  /*
  *  Send message to background script and disable domain blocker.
  *  Update boolean value in localStorage and modify CSS for disabled visuals.
  */
  disableFokus() {
    localStorage.setItem('fokus-toggle', 'disable');
    this.setState({ enabled: false }, () => {
      chrome.runtime.sendMessage({
        toggle: false,
      });
    });
  }

  render() {
    const { enabled } = this.state;
    Toggle.modifyCss(enabled);

    return (
      <div className='toggle'>
        <button
          id='enable'
          className='toggle-button'
          onClick={this.enableFokus}
        >
          {enabled ? 'Enabled' : 'Enable'}
        </button>
        <div className='divider' />
        <button
          id='disable'
          className='toggle-button'
          onClick={this.disableFokus}
        >
          {enabled ? 'Disable' : 'Disabled'}
        </button>
      </div>
    );
  }
}

export default Toggle;
