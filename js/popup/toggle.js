import React from 'react';

class Toggle extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
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
            <div className='toggle-button'>
                <p onClick={this.fokusTab}>Enable</p><p onClick={this.fokusTab}>Disable</p>
            </div>
        );
    }
}

module.exports = Toggle;
