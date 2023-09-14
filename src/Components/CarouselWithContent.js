import React from 'react';
import { Carousel } from 'react-bootstrap'; // Make sure you have installed and imported the react-bootstrap library.
// import { Link } from 'react-router-dom';

const CarouselWithContent = () => {
  return (
    <>    
    <div className='mx-3'>
        <div className="row">
            {/* Left side */}
            <div className="col-md-6 p-3 py-5">
                <h2>होली मिलन समारोह (मार्च, 2023) </h2>
                <p>
                हमारे प्यारे उत्तराखंड समुदाय ने इस होली पर एक आदर्श और अद्वितीय समारोह का आयोजन किया, जिसमें हम ने न केवल रंगों का खेल किया, बल्कि हमारे साथी उत्तराखंडी भाइयों और बहनों के साथ गुड़गांव के एक साथी मानव-समूह में एकत्र होकर आनंद उच्छाटने का भी मौका मिला।
                <br/>
                <br/>
                हमारे समुदाय के इस समारोह में फ़ोल्क डांसेस की ख़ास धमाल होती है, जो हमारी रिच उत्तराखंडी संस्कृति को दर्शाते हैं। गर्मियों के आगमन के साथ ही, हमने बावर, चोपड़, जागर, फ़िल्मी और अन्य पारंपरिक डांसेस के साथ साथ बच्चों के खिलौने और ख़ास खाने-पीने की भी व्यवस्था की।
                इस मिलन समारोह का एक और महत्वपूर्ण पहलू था, वो था भाईचारा और सामूहिक एकता की भावना को साझा करना। गुड़गांव के समुदाय में अधिकांश उत्तराखंडी परिवार एक ही स्थान पर आकर बड़े समूह में उपस्थित होते हैं, जो एक अद्वितीय महसूस कराता है।
                <br/>
                <br/>
                समारोह के दौरान, हमने साथ में बिताए गए समय का आनंद उठाया, और फ़ोल्क डांसेस की झलकियों के साथ हमारी संस्कृति को स्वीकारा। यह समारोह हमें अपनी समुदाय की शक्ति और सामूहिकता का अहसास कराता है, और हम सभी मिलकर एक सजीव और आनंदमय उत्तराखंडी भविष्य की दिशा में कदम बढ़ाते हैं।
                </p>
            </div>

            {/* Right side */}
            <div className="col-md-6 p-3">
                <Carousel>
                    {/* Replace the image paths and alt text with your actual images */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 text-white"
                            // eslint-disable-next-line
                            src="assets\event2\1 (2).jpg"
                            alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event2\1 (3).jpg"
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event2\1 (4).jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event2\1 (8).jpg"
                            alt="Fourth slide" />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event2\1 (11).jpg"
                            alt="Fifth slide" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // eslint-disable-next-line
                            src="assets\event2\1 (12).jpg"
                            alt="Sixth slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div></>
  );
};

export default CarouselWithContent;
