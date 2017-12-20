import React from 'react';

const Header = () => (
  <input
    className="fokus-link"
    type="image"
    src="/png/fokus_title_128.png"
    alt="fokus"
    onClick={() => window.open("/src/html/home.html").focus()}
  />
);

export default Header;
