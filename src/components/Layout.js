import React from 'react';
import Nav from './Nav.js';

const Layout = ({ children }) => (
  <div className="ui container">
    <br />
    <Nav />
    <div className="ui bottom attached segment">
      { children }
    </div>
  </div>
);

export default Layout;
