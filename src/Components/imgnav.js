import React from 'react';
import { Link } from 'react-router-dom';

const ImgNav = () => {
  return (
    <div className="px-5">
      <h1 className="">Photos</h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="img-item">
            <img src="assets/images/scr1.jpg" alt="Im1" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="img-item">
            <img src="assets/images/scr5.jpg" alt="Im2" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="img-item">
            <img src="assets/images/scr2.jpg" alt="Im3" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="img-item blurred">
            <img src="assets/images/scr3.jpg" alt="Im4" />
            <div className="know-more">
              <Link to="/photos">Know More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgNav;
