import React from 'react';

class DomainContainer extends React.Component {
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
