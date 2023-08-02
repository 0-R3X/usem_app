import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const iconStyle = {
    color: "white", // Replace "red" with your desired color
    fontSize: "2rem", // Adjust the font size as needed
  };
  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>पंजीकृत कार्यालय</h4>
            <p>1ए/18, लक्ष्मी गार्डन,<br />
                पुलिस चौकी के पास, खांडसा रोड,<br />
                गुरुग्राम (हरियाणा)
            </p>
          </div>
          <div className="col-md-4">
            <h4>संपर्क करें</h4>
            <p>ईमेल: usemanch2017@gmail.com<br />
              मोबाइल: 9999407619, 9958513832
            </p>
          </div>
          <div className="col-md-4">
            <h4>सोशल मीडिया</h4>
            <ul className="list-inline ">
              <li className="list-inline-item"><a href="/"><i className="fab fa-instagram fa-2x mr-2" style={iconStyle}></i></a></li>
              <li className="list-inline-item"><a href="/"><i className="fab fa-facebook fa-2x mr-2" style={iconStyle}></i></a></li>
              <li className="list-inline-item"><a href="/"><i className="far fa-envelope fa-2x mr-2" style={iconStyle}></i></a></li>
            </ul>
          </div>
          <div className="container text-center mt-2">
            <br/>
              <p>सर्वाधिकार सुरक्षित &copy; {new Date().getFullYear()} उत्तराखंड सांस्कृतिक एकता मंच </p>
            <br/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
