import React from 'react';
import { Carousel } from 'react-bootstrap'; // Make sure you have installed and imported the react-bootstrap library.
import { Link } from 'react-router-dom';

// const imageSize = {
//   maxWidth: '100%',
//   height: 'auto',
// };

const eventContentStyle = {
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const ContentWithCarousel = () => {
  return (
    <div className="container-fluid mx-3">
      <div className="row">
        {/* Left side */}
        <div className="col-12 col-md-6 p-3 ">
          <Carousel>
            {/* Replace the image paths and alt text with your actual images */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event8/1 (13).jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event8/1 (81).jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event8/1 (14).jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event8/1 (68).jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/event8/1 (29).jpg"
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        
        {/* Right side */}
        <div className="col-12 col-md-6 p-5 bg-success" style={eventContentStyle}>
          <h2>जागरण - 2024: आध्यात्मिकता और सामूहिक भक्ति का भव्य आयोजन</h2>
          <p>
              जागरण 2024 एक भव्य और आध्यात्मिक आयोजन रहा, जिसमें श्रद्धालुओं ने भक्तिमय माहौल में माता रानी की आराधना की। इस कार्यक्रम में भजन संध्या, कीर्तन और सांस्कृतिक प्रस्तुतियों ने सभी को मंत्रमुग्ध कर दिया। 
              <br /><br />
              श्रद्धालुओं ने पूरी रात जागकर भक्ति में लीन होकर मां के चरणों में अपनी श्रद्धा अर्पित की। आयोजन स्थल को दीपों और फूलों से सजाया गया, जिससे वातावरण दिव्य आभा से भर गया। इस जागरण ने भक्तों को आध्यात्मिक शांति और सकारात्मक ऊर्जा का अनुभव कराया, जिससे समाज में धार्मिक एकता और सद्भाव का संदेश प्रसारित हुआ।
              </p>
          <div className="btn btn-light mt-3 rounded-0 font-weight-normal">
            <Link to="/events" className="text-dark">Know more</Link>
          </div>
        </div>

      </div>
    </div>
    // <div className="container-fluid mx-3 my-4">
    //   <div className="row">
    //     {/* Left side content */}
    //     <div className="col-12 col-md-6 p-5 bg-success" style={eventContentStyle}>
    //       <h2>वृक्षारोपण - 2024</h2>
    //       <p>
    //         मार्च 2024 में, हमने एक भव्य वृक्षारोपण समारोह का आयोजन किया, जिसका उद्देश्य हमारे प्रदेश की हरियाली और पर्यावरण संरक्षण को बढ़ावा देना था। इस आयोजन में प्रदेश के लोगों, विशेषकर युवाओं और बच्चों की बड़ी भागीदारी रही। हजारों नए पौधे लगाए गए, जिससे न केवल प्राकृतिक सौंदर्य में वृद्धि हुई, बल्कि पर्यावरण संरक्षण के प्रति जागरूकता भी फैली। वृक्षों की देखभाल और उनके महत्व को समझाने के लिए विभिन्न गतिविधियाँ भी आयोजित की गईं।
    //         <br />
    //         <br />
    //         इस वृक्षारोपण समारोह के माध्यम से हमने स्वच्छ और हरित भविष्य की दिशा में एक और महत्वपूर्ण कदम उठाया। सभी सहभागियों ने पर्यावरण सुरक्षा का संकल्प लिया और वृक्षों की रक्षा करने की प्रतिबद्धता जताई। यह आयोजन हमारे समुदाय के सतत विकास और पर्यावरण संरक्षण के प्रति हमारी प्रतिबद्धता का प्रतीक है, जिसमें हमने एक साथ मिलकर हरित और स्वच्छ भविष्य की दिशा में कदम बढ़ाया।
    //       </p>
    //     </div>

    //     {/* Right side image */}
    //     <div className="col-12 col-md-6 p-3">
    //       <img
    //         className="d-block w-100"
    //         src="assets/event6/1 (13).jpg"
    //         alt="Event 2"
    //         style={imageSize}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContentWithCarousel;
