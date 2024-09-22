import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="d-flex">
          <img
            src="assets/images/USEM_logo.png"
            className="mx-1"
            width="110px"
            height="auto"
            alt=""
          />
          <div className="mr-4">
            <h4 className="mt-2 align-center">उत्तराखंड सांस्कृतिक</h4>
            <h4 className="mb-0 align-center">एकता मंच</h4>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isNavCollapsed ? 'collapse' : ''
          } navbar-collapse fw-bold mx-2`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">
                होम
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                हमारे बारे में
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/events">
                गतिविधियाँ
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/photos">
                फोटो गैलरी
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/join">
                सदस्य बनें
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
