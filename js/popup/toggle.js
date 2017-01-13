import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        var container = JSON.parse(localStorage.getItem('container'));
        var containerToggle = JSON.parse(localStorage.getItem('container-boolean'));
        this.state = {
            toggle: false
        };
    }

    enableFokus() {
        var enable = true;
        chrome.runtime.sendMessage({
            enable 
        });
        $("#domain-container").css({
            "color": "#000000",
            "text-decoration": 'none'
        });
        $(".toggle-button1").css("color", "#000000");
        $(".toggle-button2").css("color", "#A1A1A1");
        $(".domains-title").css("color", "#000000");
        $("input[type=text]").css("border-bottom-color", "#000000");
        /*
        $(".toggle-button2").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });*/
        //localStorage.setItem('fokus-toggle', JSON.stringify(booleanValue));
    }

    disableFokus() {
        var disable = true;
        chrome.runtime.sendMessage({
            disable
        });
        $("#domain-container").css({
            "color": "#A1A1A1",
            "text-decoration": "line-through",
            "text-decoration-color": "#A1A1A1"
        });
        $(".toggle-button1").css("color", "#A1A1A1");
        $(".toggle-button2").css("color", "#000000");
        $(".domains-title").css("color", "#A1A1A1");
        $("input[type=text]").css("border-bottom-color", "#A1A1A1");
        /*
        $(".toggle-button1").hover(function() {
            $(this).css("color", "#000000");
        }, function() {
            $(this).css("color", "#A1A1A1");
        });*/
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
