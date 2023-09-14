import React from 'react'
import { Link } from 'react-router-dom';

export default function Top() {
  return (
    <section id="hero" className="heroSlide1">
        <div className="sideShade d-flex flex-column justify-content-center align-items-end p-5 text-white">
            <h1 className="display-3 font-weight-bold text-right">उत्तराखंड सांस्कृतिक</h1>
            <h1 className="display-3 font-weight-bold text-right">एकता मंच</h1>
            <div className="btn btn-light mt-3 rounded-0 font-weight-normal">
                <Link to="/about" className="text-dark">Know more</Link>
            </div>
        </div>
    </section>
  )
}
