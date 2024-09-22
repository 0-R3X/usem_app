import React from 'react';
import { Link } from 'react-router-dom';

export default function Top() {
  return (
    <>
      <section id="hero" className="heroSlide1">
        <div className="sideShade d-flex flex-column justify-content-center align-items-end p-5 text-white">
          {/* You can add content here if needed */}
        </div>
      </section>

      <div className="bg-white py-4"></div>

      <div className="bg-cream text-center p-3 py-5">
        <h2>उत्तराखंड सांस्कृतिक एकता मंच (पंजीकृत 2947)</h2>
        <br />
        <p className="lead fw-normal px-3">
          उत्तराखंड सांस्कृतिक एकता मंच (पंजीकृत 2947) प्रवासी उत्तराखंडवासियों द्वारा स्थापित एक सामाजिक एवं सांस्कृतिक संगठन है।
        </p>
        <p className="px-3">
          इसमें समाज एवं मेहनतकश लोगों की सहमति से 6 मार्च 2017 में इस सभा का गठन किया गया, जो समाज के विभिन्न क्षेत्रों के असीम प्रेम, सहयोग हेतु किया गया।
          अथक प्रयास और मेहनत का जीता जागता उदाहरण, अनेकता में एकता को दर्शाता है।
        </p>
        <p className="px-3">
          इस संस्था को सुचारू और सुव्यवस्थित तरीके से चलाने के लिए, निम्नलिखित निकाय सदस्यों का गठन किया गया और सोसायटी कानून के अनुसार 3 साल की अवधि के लिए चुना गया,
          पहले निर्वाचित निकाय सदस्यों को महामारी COVID19 के कारण 6 साल के लिए बढ़ा दिया गया था।
        </p>
        <p className="px-3">
          शुरुआत में निर्वाचित सदस्यों और उत्तराखंड निवासियों के साथ हर साल माता का जागरण आयोजित किया जाता था,
          साथ ही रक्तदान शिविर, स्वच्छता अभियान, चिकित्सा शिविर जैसी सामाजिक गतिविधियों के साथ जरूरतमंदों को आर्थिक और सामाजिक रूप से मदद की जाती थी।
        </p>
        
        <p className="px-3">
          संगठन के कार्यप्रवाह को जारी रखने के लिए फरवरी 2023 में नए निकाय सदस्यों का चुनाव किया गया, जिन्होंने 6 महीने के भीतर विभिन्न गतिविधियाँ हासिल कीं और कीं।
        </p>
        <div className="btn btn-light mt-3 rounded-0 font-weight-normal">
          <Link to="/about" className="text-dark">Know more</Link>
        </div>
      </div>

      <div className="bg-white py-3"></div>
    </>
  );
}
