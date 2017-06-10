import React from 'react';
import $ from 'jquery';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.modifyCss = this.modifyCss.bind(this);
    this.onloadEnable = this.onloadEnable.bind(this);
    this.onloadDisable = this.onloadDisable.bind(this);
    this.enableFokus = this.enableFokus.bind(this);
    this.disableFokus = this.disableFokus.bind(this);

    const toggle = localStorage.getItem('fokus-toggle');
    const enable = (toggle === 'disable' ? false : true);
    this.state = {
      enable,
    };
  }

  /*
  *  Update HTML for enable mode and modify CSS for enabled domain blocker.
  */
  onloadEnable() {
    const toggle = localStorage.getItem('fokus-toggle');
    if (toggle === 'disable') {
      this.modifyCss('#A1A1A1');
      $('#input').prop('disabled', true);
      return { __html: 'Enable' };
    }
    this.modifyCss('#000000');
    $('#input').prop('disabled', false);
    return { __html: 'Enabled' };
  }

  /*
  *  Update HTML for disable mode and modify CSS for disabled domain blocker.
  */
  onloadDisable() {
    const toggle = localStorage.getItem('fokus-toggle');
    if (toggle === 'disable') {
      this.modifyCss('#A1A1A1');
      $('#input').prop('disabled', true);
      return { __html: 'Disabled' };
    }
    this.modifyCss('#000000');
    $('#input').prop('disabled', false);
    return { __html: 'Disable' };
  }

  /*
  *  Modify color of domain container items, domain title, and bottom border of form input.
  *
  *  @param color: Modify color of domain container items.
  */
  modifyCss(color) {
    $('#domain-container').css(color);
    $('.domains-title').css(color);
    $('input[type=text]').css('border-bottom-color', color);
  }

  /*
  *  Send message to background script and enable domain blocker.
  *  Update boolean value in localStorage and modify CSS for enabled visuals.
  */
  enableFokus() {
    if (this.state.enable === false) {
      this.setState({ enable: true }, () => {
        chrome.runtime.sendMessage({
          enable: this.state.enable,
        });
      });

      this.modifyCss('#000000');
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
    if (this.state.enable === true) {
      this.setState({ enable: false }, () => {
        chrome.runtime.sendMessage({
          enable: this.state.enable,
        });
      });

      this.modifyCss('#A1A1A1');
      $('#disable').html('Disabled');
      $('#enable').html('Enable');
      $('#input').prop('disabled', true);
      localStorage.setItem('fokus-toggle', 'disable');
    }
  }

  render() {
    return (
      <div className='toggle'>
        <p
          id='enable'
          className='toggle-button1'
          onClick={this.enableFokus}
          dangerouslySetInnerHTML={this.onloadEnable()}
        />
        <div className='divider' />
        <p
          id='disable'
          className='toggle-button2'
          onClick={this.disableFokus}
          dangerouslySetInnerHTML={this.onloadDisable()}
        />
      </div>
    );
  }
}
