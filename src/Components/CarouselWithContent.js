import React from 'react';
import { Carousel } from 'react-bootstrap'; // Make sure you have installed and imported the react-bootstrap library.
import { Link } from 'react-router-dom';

const CarouselWithContent = () => {
  return (
    <div className="container-fluid mx-3">
      <div className="row">
        {/* Left side */}
        <div className="col-12 col-md-6 p-3 py-5">
          <h2>रक्तदान शिविर - 2024</h2>
          <p>
            मई 2024 में, हमारे प्रदेश में एक और महत्वपूर्ण रक्तदान शिविर का सफल आयोजन किया गया, जिसमें समाज के कई लोगों ने बढ़-चढ़कर भाग लिया। इस शिविर में स्वास्थ्य सेवा के प्रति समर्पण और सामुदायिक समर्थन की भावना को प्रकट किया गया।
            <br /><br />
            इस वर्ष, रक्तदान शिविर के माध्यम से सैकड़ों यूनिट रक्त एकत्र किया गया, जिससे कई ज़िंदगियों को बचाने में सहायता मिली। इस महत्वपूर्ण योगदान के लिए सभी रक्तदाताओं का हार्दिक धन्यवाद किया गया।
            <br /><br />
            रक्तदान के महत्व को समझते हुए, यह आयोजन समाज में स्वास्थ्य के प्रति जागरूकता फैलाने का एक महत्वपूर्ण माध्यम बना। यह शिविर सामुदायिक सेवा और मानवता की भावना को बढ़ावा देने का प्रतीक है, और हम सभी को अपने कर्तव्यों के प्रति प्रेरित करता है।
          </p>
          <div className="btn btn-light mt-3 rounded-0 font-weight-normal">
            <Link to="/events" className="text-dark">Know more</Link>
          </div>
        </div>

        {/* Right side */}
        <div className="col-12 col-md-6 p-3">
          <Carousel>
            {/* Replace the image paths and alt text with your actual images */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event7/1 (1).jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event7/1 (3).jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event7/1 (9).jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event7/1 (10).jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event7/1 (14).jpg"
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithContent;
