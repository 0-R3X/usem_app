// src/Components/Top.js
import React from "react";

export default function Top() {
  const HERO_IMG = "https://res.cloudinary.com/dkhjn75hj/image/upload/assets/images/jaikedar1.jpg";

  return (
    <>
      <header id="hero" className="hero" aria-hidden="true">
        <picture className="hero-picture">
          <img
            src={HERO_IMG}
            alt="बद्रीनाथ मंदिर का दृश्य"
            className="hero-img"
            loading="lazy"
            width="1600"
            height="900"
            style={{ display: "block" }}
          />
        </picture>
      </header>

      <div className="bg-white py-3" />

      {/* FULL-WIDTH cream background, content remains centered inside .container */}
      <section className="bg-cream full-bleed-section">
        <div className="container my-4">
          <div className="row">
            {/* Left: Main about content */}
            <div className="col-12 col-lg-8 mb-4">
              <h2 className="lead fw-normal">
                उत्तराखंड सांस्कृतिक एकता मंच (पंजीकृत 2947) प्रवासी उत्तराखंडवासियों द्वारा स्थापित एक सामाजिक एवं सांस्कृतिक संगठन है।
              </h2>

              <p>
                इस सभा का गठन 6 मार्च 2017 में समाज एवं मेहनतकश लोगों की सहमति से किया गया। संगठन का उद्देश्य प्रवासी उत्तराखण्डवासियों को एक मंच पर लाकर सांस्कृतिक, सामाजिक और सेवा-आधारित गतिविधियों के माध्यम से समुदाय को सुदृढ़ बनाना है। संस्थापक सदस्यों और सक्रिय कार्यकर्ताओं की मेहनत व समर्पण ने मंच को स्थानीय और क्षेत्रीय स्तर पर पहचान दिलाई है।
              </p>

              <p>
                प्रारम्भिक वर्षों में संस्था ने माता भगवती के जागरण, रक्तदान शिविर, स्वच्छता अभियान और चिकित्सा शिविर जैसे कार्यक्रमों का आयोजन किया। इन अभियानों ने न केवल लोगों की सेवा की बल्कि उत्तराखण्ड की लोकसंस्कृति और परम्पराओं को भी बढ़ावा दिया। COVID-19 महामारी के दौरान मंच ने राहत सामग्री और राशन वितरण के माध्यम से समाज की मदद की।
              </p>

              <p>
                फरवरी 2023 में नई कार्यकारिणी निर्वाचित की गई, जिसने आते ही कई गतिविधियाँ और कार्यक्रम चलाए तथा समुदाय की भागीदारी बढ़ाने का कार्य किया। मंच का विश्वास है कि संस्कृति, शिक्षा और सेवा के माध्यम से ही समाज को सशक्त बनाया जा सकता है।
              </p>
            </div>

            {/* Right column: summary / quick facts — kept concise */}
            <aside className="col-12 col-lg-4">
              <div className="p-3 bg-success text-white rounded mb-3">
                <h4 className="h5">मुख्य तथ्य</h4>
                <ul className="mb-0">
                  <li><strong>स्थापना:</strong> 6 मार्च 2017</li>
                  <li><strong>पंजीकरण:</strong> 2947</li>
                  <li><strong>मुख्य कार्यक्रम:</strong> जागरण, रक्तदान शिविर, वृक्षारोपण, सांस्कृतिक महोत्सव</li>
                  <li><strong>लक्ष्य:</strong> संस्कृति संरक्षण, समाज सेवा, शिक्षा प्रोत्साहन</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>


      <div className="bg-white py-3" />
    </>
  );
}
