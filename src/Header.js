import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo"><p><b>pararius</b>.nl</p></div>

        <nav>
          <a className="nav-a" href="#">Create Ads</a>
          <a className="nav-a" href="#">About Us</a>
          <a className="nav-a" href="#">Log In</a>
          <button className="register-btn">Register</button>
        </nav>

      </header>
    );
  }
}

export default Header;
