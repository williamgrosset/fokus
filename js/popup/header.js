import React from 'react';
import ReactDOM from 'react-dom';

class HeaderLink extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
    }

    render() {
       <img src={'https://github.com/williamgrosset/fokus/blob/master/png/fokus_title_128.png?raw=true'} onClick={fokusTab}/>,
       document.getElementById('header')
    }
}
