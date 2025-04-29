import React from 'react';
import './Header.css';
import {SearchOutlined} from '@ant-design/icons';

function Header({ isScrolled }) {// Use scrolled prop to apply styles conditionally,apply this in header css//
  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>Normadize</h1>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search destination..." />
        <button className="search-button">
          <a className="search-icon">
          <SearchOutlined style={{ fontSize: '17px' }} />
          </a>
        </button>
      </div>
      <div className="auth-links">
        <a href="#login" className="auth-link login">Log In</a>
        <a href="#signup" className="auth-link signup">Sign Up</a>
      </div>
    </header>
  );
}

export { Header };
