import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
    fokusTab() {
        var enable = document.getElementById('enable');
        enable.style.color = '#000000';
        var disable = document.getElementById('disable')
        disable.style.color = '#A1A1A1';
        $(".toggle-button2").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });
        //var win = window.open("/html/home.html");
        //win.focus();
    }

    aboutTab() {
        var enable = document.getElementById('enable');
        enable.style.color = '#A1A1A1';
        var disable = document.getElementById('disable')
        disable.style.color = '#000000';
        $(".toggle-button1").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });
        //var win = window.open("/html/about.html");
        //win.focus();
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
                <p id='enable' className='toggle-button1' onClick={this.fokusTab}>Enable</p><div className="divider"/><p id='disable' className='toggle-button2' onClick={this.aboutTab}>Disable</p>
            </div>
        );
    }
}

module.exports = Toggle;
