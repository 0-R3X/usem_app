import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarouselWithContent = () => {
  return (
    <div className="container-fluid mx-3">
      <div className="row">
        {/* Left side */}
        <div className="col-12 col-md-6 p-3 py-5">
          <h2>वृक्षारोपण - 2025</h2>
            <p>
              28 जुलाई 2025 को हमारे प्रदेश में एक व्यापक वृक्षारोपण कार्यक्रम का सफल आयोजन किया गया, जिसमें स्थानीय नागरिकों, छात्रों और सामाजिक संगठनों ने सक्रिय भागीदारी दिखाई।
              <br /><br />
              इस अभियान के अंतर्गत सैकड़ों पौधे लगाए गए, जिससे पर्यावरण संतुलन को बनाए रखने और हरियाली को बढ़ावा देने में मदद मिली। यह प्रयास न केवल प्राकृतिक संरक्षण की दिशा में एक महत्वपूर्ण कदम था, बल्कि समाज में पर्यावरण के प्रति जागरूकता फैलाने का भी माध्यम बना।
              <br /><br />
              यह आयोजन सामूहिक प्रयास, ज़िम्मेदारी और प्रकृति के प्रति हमारे कर्तव्यों की याद दिलाता है। हम सभी को इस सकारात्मक पहल को आगे बढ़ाने और पर्यावरण संरक्षण में योगदान देने के लिए प्रेरित करता है।
            </p>
          <div className="btn btn-light mt-3 rounded-0 font-weight-normal">
            <Link to="/events" className="text-dark">Know more</Link>
          </div>
        </div>

        {/* Right side */}
        <div className="col-12 col-md-6 p-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event9/1 (2).jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event9/1 (11).jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event9/1 (19).jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event9/1 (18).jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event9/1 (20).jpg"
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
