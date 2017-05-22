import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.react.jsx';
import Domains from './components/Domains.react.jsx';
import Toggle from './components/Toggle.react.jsx';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Domains />,
  document.getElementById('domains')
);

ReactDOM.render(
  <Toggle />,
  document.getElementById('toggle')
);
