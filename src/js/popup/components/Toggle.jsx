import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEnableOrDisableMode = this.toggleEnableOrDisableMode.bind(this);

    this.state = {
      enabled: localStorage.getItem('fokus-toggle') !== 'disable' || false,
    };
  }

  static loadEnableOrDisableContainerStyle(enabled) {
    const color = enabled ? '#000000' : '#A1A1A1';
    $('.domain-container').css('color', color);
    $('.domains-title').css('color', color);
    $('input[type=text]').css('border-bottom-color', color);
    $('#input').prop('disabled', !enabled);
  }

  toggleEnableOrDisableMode(e) {
    const enable = e.target.id === 'enable';

    if (enable) {
      localStorage.setItem('fokus-toggle', 'enable');
    } else {
      localStorage.setItem('fokus-toggle', 'disable');
    }

    this.setState({ enabled: enable }, () => {
      chrome.runtime.sendMessage({
        toggle: enable,
      });
    });
  }

  render() {
    const { enabled } = this.state;
    Toggle.loadEnableOrDisableContainerStyle(enabled);

    return (
      <div className="toggle">
        <button id="enable" className="toggle-button" onClick={this.toggleEnableOrDisableMode}>
          {enabled ? 'Enabled' : 'Enable'}
        </button>
        <div className="divider" />
        <button id="disable" className="toggle-button" onClick={this.toggleEnableOrDisableMode}>
          {enabled ? 'Disable' : 'Disabled'}
        </button>
      </div>
    );
  }
}

export default Toggle;
