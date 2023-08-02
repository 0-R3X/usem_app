import React from 'react';
import { Carousel } from 'react-bootstrap'; // Make sure you have installed and imported the react-bootstrap library.

const ContentWithCarousel = () => {
  return (
    <>
      <div className='mx-3'>
        <div className="row">
            {/* Left side */}
            <div className="col-md-6 p-3">
                <Carousel>
                    {/* Replace the image paths and alt text with your actual images */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 text-white"
                            src="assets/images/scr1.jpg"
                            alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/scr2.jpg"
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/scr3.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
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
                </Carousel>
            </div>
            {/* right side */}
            <div className="col-md-6 p-3">
                <h2>वृक्षारोपण  (मार्च, 2023) </h2>
                <p>
                    इसमें समाज एवं मेहनतकश लोगों की सहमति से 2017 में इस सभा का गठन किया गया, जो समाज के विभिन्न क्षेत्रों के असीम प्रेम, सहयोग हेतु किया गया। अथक प्रयास और मेहनत का जीता जागता उदाहरण, अनेकता में एकता को दर्शाता है।

                    इस संस्था को सुचारू और सुव्यवस्थित तरीके से चलाने के लिए, निम्नलिखित निकाय सदस्यों का गठन किया गया और सोसायटी कानून के अनुसार 3 साल की अवधि के लिए चुना गया, पहले निर्वाचित निकाय सदस्यों को महामारी COVID19 के कारण 6 साल के लिए बढ़ा दिया गया था।

                    शुरुआत में निर्वाचित सदस्यों और उत्तराखंड निवासियों के साथ हर साल माता का जागरण आयोजित किया जाता था, साथ ही रक्तदान शिविर, स्वच्छता अभियान, चिकित्सा शिविर जैसी सामाजिक गतिविधियों के साथ जरूरतमंदों को आर्थिक और सामाजिक रूप से मदद की जाती थी।

                    संगठन के कार्यप्रवाह को जारी रखने के लिए फरवरी 2023 में नए निकाय सदस्यों का चुनाव किया गया, जिन्होंने 6 महीने के भीतर विभिन्न
                </p>
            </div>

        </div>
    </div></>
  );
};

export default ContentWithCarousel;
