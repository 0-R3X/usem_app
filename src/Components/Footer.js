import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const iconStyle = {
    color: "white",
    fontSize: "2rem",
  };

  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h4>पंजीकृत कार्यालय</h4>
            <p>
              1ए/18, लक्ष्मी गार्डन,<br />
              पुलिस चौकी के पास, खांडसा रोड,<br />
              गुरुग्राम (हरियाणा)
            </p>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h4>संपर्क करें</h4>
            <p>
              ईमेल: usemanch2017@gmail.com<br />
              मोबाइल: 9999407619, 9958513832
            </p>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h4>सोशल मीडिया</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" aria-label="Instagram">
                  <i className="fab fa-instagram" style={iconStyle}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" aria-label="Facebook">
                  <i className="fab fa-facebook" style={iconStyle}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" aria-label="Email">
                  <i className="far fa-envelope" style={iconStyle}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Acknowledgment Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <img 
                src="/assets/members/रमेश चन्द्र घिल्डियाल/1.png" 
                alt="रमेश चन्द्र घिल्डियाल" 
                className="rounded-circle me-2" 
                style={{ width: '100px', height: '100px' }} 
              />
              <div>
                <p className="mb-0">रमेश चन्द्र घिल्डियाल</p>
                <p className="mb-0">(कोषाध्यक्ष)</p>
                <p>वेबसाइट निर्माण की पहल और मार्गदर्शन के लिए विशेष आभार</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h5>सर्वाधिकार सुरक्षित &copy; {new Date().getFullYear()} उत्तराखंड सांस्कृतिक एकता मंच</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
