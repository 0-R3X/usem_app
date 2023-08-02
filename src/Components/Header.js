import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex">
                <img src="assets/images/USEM_logo.png" className="mx-1" width="110px" height="auto" alt=""/>
                <div>
                    <h4 className="mt-2 align-center">उत्तराखंड सांस्कृतिक</h4>
                    <h4 className="mb-0 align-center">एकता मंच</h4>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse fw-bold mx-5" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mx-5">
                    <li className="nav-item active mx-5">
                        <Link className="nav-link" to="/">
                        होम <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link" to="/about">हमारे बारे में</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="/">उपलब्धियाँ</a>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link" to="/events">नई पंजीकरण गतिविधियाँ</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link" to="/photos">फोटो गैलरी</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Header;
