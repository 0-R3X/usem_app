import React from 'react';
// import { Carousel } from 'react-bootstrap'; // Make sure you have installed and imported the react-bootstrap library.

const ContentWithCarousel = () => {
  return (
    <>
      <div className='mx-3'>
        <div className="row">
            {/* Left side */}
            <div className="col-md-6 p-3">
            <img
                className="d-block w-100 text-white"
                // eslint-disable-next-line
                src="assets\event3\1 (2).jpg"
                alt="First slide" />
               {/* <Carousel>
                     Replace the image paths and alt text with your actual images
                    <Carousel.Item>
                        <img
                            className="d-block w-100 text-white"
                            // eslint-disable-next-line
                            src="assets\event3\1 (2).jpg"
                            alt="First slide" />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event3\1 (2).jpg"
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event3\1 (3).jpg"
                            alt="Third slide" />
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/scr4.jpg"
                            alt="Fourth slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/scr5.jpg"
                            alt="Fifth slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/scr6.jpg"
                            alt="Sixth slide" />
                    </Carousel.Item> 
                </Carousel>*/}
            </div>
            {/* right side */}
            <div className="col-md-6 p-3">
                <h2>वृक्षारोपण  (मार्च, 2023) </h2>
                <p>
                इस मार्च महीने में हमने एक बड़े स्वरूप में वृक्षारोपण समारोह का आयोजन किया था, जो हमारे प्रिय प्रदेश के वृक्षों की सुरक्षा और आभूषण करने की महत्वपूर्ण पहलु को दर्शाता है। इस समारोह के माध्यम से हमने अपने प्रदेश की प्राकृतिक सौंदर्यता को बढ़ावा देने के साथ-साथ वृक्षों के महत्व को भी बताया।
                हमारे वृक्षारोपण समारोह में हजारों लोगों ने भाग लिया और हजारों वृक्षों को धरती माता के गोद में स्थापित किया। इस समारोह में नहीं सिर्फ वृक्षारोपण हुआ, बल्कि हमने एक साथ मिलकर अपने प्रदेश की हरियाली बढ़ाने के लिए एक संकल्प भी लिया।
                <br/>
                <br/>
                वृक्षारोपण समारोह के दौरान हमने न केवल नए वृक्षों को जमीन में लगाया, बल्कि हमने अपने वृक्षों के प्रति भी सावधानी और स्वच्छता की भी जागरूकता फैलाई। यह समारोह हमें प्राकृतिक संसाधनों की महत्वपूर्णता को समझने में मदद करता है और हमारे वर्तमान और आने वाले पीढ़ियों के लिए स्वच्छ और हरित भविष्य की दिशा में एक प्रमुख कदम है।
                <br/>
                <br/>
                इस समारोह के माध्यम से हमने एक साथ मिलकर वृक्षों की रक्षा करने का संकल्प लिया और अपने प्रदेश को हरित बनाने के लिए साथीता दिखाया। हमारे इस संघर्ष का एक और प्रमुख उद्देश्य था जो हमें प्रेरित करता है, वो है कि हम अपने आसपास की प्राकृतिक सौंदर्यता की रक्षा करने के लिए सक्रिय रहें और अपने वृक्षों के साथ हमारी बुद्धिमानी और साझा जिम्मेदारी को बढ़ा
                </p>
            </div>

        </div>
    </div></>
  );
};

export default ContentWithCarousel;
