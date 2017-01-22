import React from 'react';
import $ from 'jquery';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        var container = JSON.parse(localStorage.getItem('container'));

        this.state = {
            toggle: false
        };

        this.enableFokus = this.enableFokus.bind(this);
        this.disableFokus = this.disableFokus.bind(this);
        this.modifyCss = this.modifyCss.bind(this);
        this.onloadEnable = this.onloadEnable.bind(this);
        this.onloadDisable = this.onloadDisable.bind(this);
    }

    enableFokus() {
        var enable = true;
        chrome.runtime.sendMessage({
            enable 
        });
        this.modifyCss("#000000", "#A1A1A1");
        localStorage.setItem('fokus-toggle', 'enable');
        $('#enable').html('Enabled');
        $('#disable').html('Disable');
        $('#input').prop('disabled', false);
    }

    disableFokus() {
        var disable = true;
        chrome.runtime.sendMessage({
            disable
        });
        this.modifyCss("#A1A1A1", "#000000");
        localStorage.setItem('fokus-toggle', 'disable');
        $('#disable').html('Disabled');
        $('#enable').html('Enable');
        $('#input').prop('disabled', true);
    }

    modifyCss(color1, color2) {
        $("#domain-container").css({
            "color": color1
        });
        $(".domains-title").css("color", color1);
        $("input[type=text]").css("border-bottom-color", color1);
    }

    onloadEnable() {
        var toggle = localStorage.getItem('fokus-toggle');

        if (toggle == 'disable') {
            this.modifyCss("#A1A1A1", "#000000");
            return {__html: 'Enable'};
        } else {
            this.modifyCss("#000000", "#A1A1A1");
            return {__html: 'Enabled'};
        }
    }

    onloadDisable() {
        var toggle = localStorage.getItem('fokus-toggle');

        if (toggle == 'disable') {
            this.modifyCss("#A1A1A1", "#000000");
            return {__html: 'Disabled'};
        } else {
            this.modifyCss("#000000", "#A1A1A1");
            return {__html: 'Disable'};
        }
    }

    render() {
        return (
            <div>
                <p id='enable' className='toggle-button1' onClick={this.enableFokus} dangerouslySetInnerHTML={this.onloadEnable()}></p>
                <div className='divider'/>
                <p id='disable' className='toggle-button2' onClick={this.disableFokus} dangerouslySetInnerHTML={this.onloadDisable()}></p>
            </div>
        );
    }
}

module.exports = Toggle;
