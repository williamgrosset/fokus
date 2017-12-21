import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.enableFokus = this.enableFokus.bind(this);
    this.disableFokus = this.disableFokus.bind(this);
    this.loadEnableOrDisableMode = this.loadEnableOrDisableMode.bind(this);

    this.state = {
      enabled: localStorage.getItem('fokus-toggle') === 'enable' || false,
    };
  }

  static modifyCss(color) {
    $('.domain-container').css('color', color);
    $('.domains-title').css('color', color);
    $('input[type=text]').css('border-bottom-color', color);
  }

  loadEnableOrDisableMode(enable) {
    if (this.state.enabled === false) {
      Toggle.modifyCss('#A1A1A1');
      $('#input').prop('disabled', true);

      if (!enable) return { __html: 'Enable' };
      return { __html: 'Disabled' };
    }

    Toggle.modifyCss('#000000');
    $('#input').prop('disabled', false);

    if (enable) return { __html: 'Enabled' };
    return { __html: 'Disable' };
  }

  /*
  *  Send message to background script and enable domain blocker.
  *  Update boolean value in localStorage and modify CSS for enabled visuals.
  */
  enableFokus() {
    if (this.state.enabled === false) {
      this.setState({ enabled: true }, () => {
        chrome.runtime.sendMessage({
          toggle: true,
        });
      });

      Toggle.modifyCss('#000000');
      $('#enable').html('Enabled');
      $('#disable').html('Disable');
      $('#input').prop('disabled', false);
      localStorage.setItem('fokus-toggle', 'enable');
    }
  }

  /*
  *  Send message to background script and disable domain blocker.
  *  Update boolean value in localStorage and modify CSS for disabled visuals.
  */
  disableFokus() {
    if (this.state.enabled === true) {
      this.setState({ enabled: false }, () => {
        chrome.runtime.sendMessage({
          toggle: false,
        });
      });

      Toggle.modifyCss('#A1A1A1');
      $('#disable').html('Disabled');
      $('#enable').html('Enable');
      $('#input').prop('disabled', true);
      localStorage.setItem('fokus-toggle', 'disable');
    }
  }

  render() {
    return (
      <div className='toggle'>
        <button
          id='enable'
          className='toggle-button'
          onClick={this.enableFokus}
          dangerouslySetInnerHTML={this.loadEnableOrDisableMode(this.state.enabled)}
        />
        <div className='divider' />
        <button
          id='disable'
          className='toggle-button'
          onClick={this.disableFokus}
          dangerouslySetInnerHTML={this.loadEnableOrDisableMode(!this.state.enabled)}
        />
      </div>
    );
  }
}

export default Toggle;
