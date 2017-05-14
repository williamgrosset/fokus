import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react.jsx';
import Domains from './Domains.react.jsx';
import Toggle from './Toggle.react.jsx';

ReactDOM.render(
  <Header />,
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
