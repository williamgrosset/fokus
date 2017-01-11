import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        var container = JSON.parse(localStorage.getItem('container'));
        var containerToggle = JSON.parse(localStorage.getItem('container-boolean'));
    }

    enableFokus() {
        var enable = true;
        chrome.runtime.sendMessage({
            enable 
        });
        //var containerEnable = localStorage.setItem('container', JSON.stringify(container));
        var enable = document.getElementById('enable');
        enable.style.color = '#000000';
        var disable = document.getElementById('disable')
        disable.style.color = '#A1A1A1';
        $(".toggle-button2").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });
    }

    disableFokus() {
        var disable = true;
        chrome.runtime.sendMessage({
            disable
        });
        //var tempEmpty = [];
        //var containerEnable = localStorage.setItem('container', JSON.stringify(tempEmpty));
        var enable = document.getElementById('enable');
        enable.style.color = '#A1A1A1';
        var disable = document.getElementById('disable')
        disable.style.color = '#000000';
        $(".toggle-button1").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });
    }

    render() {
        return (
            <div>
                <p id='enable' className='toggle-button1' onClick={this.enableFokus}>Enable</p><div className="divider"/><p id='disable' className='toggle-button2' onClick={this.disableFokus}>Disable</p>
            </div>
        );
    }
}

module.exports = Toggle;
