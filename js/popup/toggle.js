import React from 'react';

class Toggle extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus();
    }

    aboutTab() {
        var win = window.open("/html/about.html");
        win.focus();
    }

    // props to use (boolean enable)

    if (enable) {
        // set button to enable
        // active blocking domains
    } 
        // set button to disable
        // disable blocking domains


    render() {
        return (
            <div>
                <p className='toggle-button' onClick={this.fokusTab}>Enable</p><div className="divider"/><p className='toggle-button' onClick={this.aboutTab}>Disable</p>
            </div>
        );
    }
}

module.exports = Toggle;
