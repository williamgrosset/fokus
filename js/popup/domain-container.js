import React from 'react';

class DomainContainer extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {value: 'initial'};

        this.submit = this.submit.bind(this);
    }
    */

    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus();
    }

    aboutTab() {
        var win = window.open("/html/about.html");
        win.focus();
    }

    render() {
        return (
            <div id='domain-container'>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </div>
        );
    }
}

module.exports = DomainContainer;
