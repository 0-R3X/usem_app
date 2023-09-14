import React, { useState } from 'react';

const UCSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4; // Set the total number of slides

  // Custom text content for each slide
  const slideText = [
    " किसी ने क्या खूब कहा है “अगर मुझे दोबारा इस दुनिया में जन्म लेने का मौका दिया जाए, तो मैं फिर से इस महान राष्ट्र को चुनूंगा”!! हर कोई इस से वाकिफ है कि वीर स्वतंत्रता सेनानियों के साहस और बलिदान की देन है यह आज़ादी। देश की आजादी के लिए न जानें कितने हिंदुस्तानियों ने देश की मिट्टी को अपने खून से सींचा था तब जाकर यह आज़ादी मिली। बता दें अंग्रेजों की हुकूमत साल 1858 में शुरू हुई जो करीब 200 साल तक चली। ठीक 15 अगस्त, 1947 को हमारा भारत अंग्रेजी हुकूमत से आज़ाद हुआ था इसलिए इस बार 15 अगस्त को हमारे देश की आजादी के 76 साल पूरे होने जा रहे हैं।",
    "टीचर्स डे 2023 हमारे शिक्षकों को समर्पित है, और यह एक अद्वितीय अवसर है जब हम उनके साथ उनके महत्वपूर्ण योगदान को मान्यता देते हैं। इस दिन, हम अपने शिक्षकों के प्रति आभार और समर्पण व्यक्त करते हैं और उनके शिक्षा कार्य में उनकी महत्वपूर्ण भूमिका की सराहना करते हैं। हम उनके मार्गदर्शन, शिक्षण और प्रेरणा के लिए कृतज्ञ हैं और इस दिन को उनके साथ खुशी और संबंधों का दिन बनाते हैं।",
    "गणेश चतुर्थी, जो हिन्दू धर्म के महत्वपूर्ण त्योहारों में से एक है, भगवान गणेश के जन्म के अवसर पर मनाया जाता है। यह त्योहार भारत में खूबसूरत धूमधाम के साथ मनाया जाता है, जिसमें लोग गणेश जी की मूर्तियों को घरों में स्थापित करते हैं और पूजा करते हैं। यह चतुर्थी के दिन भगवान गणेश को व्रत और भक्ति से याद किया जाता है और उनकी कृपा की प्राप्ति के लिए प्रार्थनाएँ की जाती हैं। इस त्योहार के दौरान लोग समुद्र और नदी में मूर्तियों को विसर्जन करते हैं, जो खुशियों का महासागर स्थापित करता है।",
    "15 August Independence Day के ख़ास मौके पर नए अवसरों के खुलने का समय है और नई जीत और उपलब्धियां भारत की प्रतीक्षा कर रही हैं। आज देश के नाम अनगिनत उपलब्धियां हैं जो हमारे देश को महान बना रही हैं और हमें गर्व महसूस करा रही हैं। अब हम गुलामी की ज़ंज़ीर को हटाकर आज़ादी के रंग में रंग चुके हैं। 76 साल पहले आजादी मिलनी एक बड़ी चुनौती थी लेकिन उससे भी बड़ी और असली चुनौती है भारत की स्वतंत्रता को बनाए रखना और लोकतंत्र को बेहतर करने और स्वस्थ लोकतांत्रिक माहौल बनाएं रखना।",
  ];
  // Upcoming Events Headings
  const slideHeading = [
    "Independence Day",
    "Teachers Day",
    "Ganesh Chaturthi",
    "Diwali 2023",
  ]

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <div className="slider-container p-2">
      {/* Render the image and text based on the current slide */}
      <div
        className={`slider-slide slide-${currentSlide} ${
          currentSlide % 2 === 0 ? 'even-slide' : 'odd-slide'
        }`}
      >
        <img
          src={`assets/images/img-${currentSlide}.jpeg`}
          alt={`Slide ${currentSlide}`}
        />
        <div className="text-container col-md-6">
        <h1 className='pb-5 fw-bold'>अपडेट्स</h1>
          <h3>{slideHeading[currentSlide - 1]}</h3>
          <p>{slideText[currentSlide - 1]}</p>
        </div>
      </div>

      {/* Next and Prev buttons */}
      <div className="slider-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default UCSlider;