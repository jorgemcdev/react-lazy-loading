import React from 'react';
import { Link } from 'react-router';

const Nav = () =>(
  <div className="ui pointing menu top attached">
    <div className="menu">
      <Link className="item" to="/">Home</Link>
    </div>
    <div className="menu">
      <Link className="item" to="/friends">Friends</Link>
    </div>
    <div className="menu">
      <Link className="item" to="/messages">Messages</Link>
    </div>

    <div className="right menu">
      <div className="ui right aligned category search item">
        <div className="ui transparent icon input">
          <input className="prompt" type="text" placeholder="Search..." />
          <Link to="/search"><i className="search link icon"></i></Link>
        </div>
        <div className="results"></div>
      </div>
    </div>
  </div>
);

export default Nav;
