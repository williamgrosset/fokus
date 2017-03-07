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

    /*
    *  Send message to background script and enable domain blocker.
    *  Update boolean value in localStorage and modify CSS for enabled visuals.
    */
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

    /*
    *  Send message to background script and disable domain blocker. 
    *  Update boolean value in localStorage and modify CSS for disabled visuals.
    */
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

    /*
    *  Modify color of domain container items, domain title, 
    *  and bottom border of form input.
    *
    *  @param color: Modify color of domain container items,
    */
    modifyCss(color) {
        $("#domain-container").css({
            "color": color
        });
        $(".domains-title").css("color", color);
        $("input[type=text]").css("border-bottom-color", color);
    }

    /*
    *  Change HTML text for enable mode and modify CSS for 
    *  enabled domain blocker.
    */
    onloadEnable() {
        var toggle = localStorage.getItem('fokus-toggle');
        if (toggle == 'disable') {
            this.modifyCss("#A1A1A1", "#000000");
            $('#input').prop('disabled', true);
            return {__html: 'Enable'};
        } else {
            this.modifyCss("#000000", "#A1A1A1");
            $('#input').prop('disabled', false);
            return {__html: 'Enabled'};
        }
    }

    /*
    *  Change HTML text for disable mode and modify CSS for 
    *  disabled domain blocker.
    */
    onloadDisable() {
        var toggle = localStorage.getItem('fokus-toggle');
        if (toggle == 'disable') {
            this.modifyCss("#A1A1A1", "#000000");
            $('#input').prop('disabled', true);
            return {__html: 'Disabled'};
        } else {
            this.modifyCss("#000000", "#A1A1A1");
            $('#input').prop('disabled', false);
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
