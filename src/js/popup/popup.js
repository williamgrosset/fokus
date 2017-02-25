import React from 'react';
import ReactDOM from 'react-dom';
import HeaderLink from './header.js';
import Domains from './domains.js';
import Toggle from './toggle.js';

ReactDOM.render(
    <HeaderLink />,
    document.getElementById('header')
);

ReactDOM.render (
    <Domains />,
    document.getElementById('domains')
);

ReactDOM.render(
    <Toggle />,
    document.getElementById('toggle')
);
