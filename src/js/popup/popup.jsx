import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Domains from './components/Domains';
import Toggle from './components/Toggle';

ReactDOM.render(
  <Header />,
  document.getElementById('header'),
);

ReactDOM.render(
  <Domains />,
  document.getElementById('domains'),
);

ReactDOM.render(
  <Toggle />,
  document.getElementById('toggle'),
);
