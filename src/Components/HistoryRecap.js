import React, { useState } from 'react';

const HistoryRecap = () => {
  const eventsData = [
    { year: "02-03-2017", description: "घर-घर होली फेरी", color: "bg-light", highlightColor: "bg-success" },
    { year: "07-05-2017", description: "संस्कार भारती कार्यक्रम में उत्तराखंड की संस्कृति प्रस्तुत की गई", color: "bg-light", highlightColor: "bg-success" },
    { year: "28-09-2017", description: "प्रथम मां भगवती जागरण एसo डी स्कूल गुड़गांव", color: "bg-light", highlightColor: "bg-success" },
    { year: "09-11-2017", description: "उत्तराखंड स्थापना दिवस समारोह सेक्टर 4 बाल भवन", color: "bg-light", highlightColor: "bg-success" },
    { year: "11-02-2018", description: "सफाई अभियान सरकारी स्कूल भीमनगर, गुड़गांव", color: "bg-light", highlightColor: "bg-success" },
    { year: "01-03-2018", description: "गरीब परिवार की आर्थिक सहायता 37000/- रुपये", color: "bg-light", highlightColor: "bg-success" },
    { year: "01-03-2018", description: "पहला रक्तदान शिविर रोटरी ब्लड बैंक खादीपुर", color: "bg-light", highlightColor: "bg-success" },
    { year: "22-10-2018", description: "दूसरा विशाल मां भगवती जागरण एसo डी स्कूल", color: "bg-light", highlightColor: "bg-success" },
    { year: "25-11-2018", description: "उत्तराखंड स्थापना दिवस समारोह मानेसर", color: "bg-light", highlightColor: "bg-success" },
    { year: "17-03-2019", description: "होली मिलन समारोह 'फूलो की होली'", color: "bg-light", highlightColor: "bg-success" },
    { year: "05-10-2019", description: "तीसरा विशाल मां भगवती जागरण खादीपुर", color: "bg-light", highlightColor: "bg-success" },
    { year: "06-10-2019", description: "आर्थिक सहायता 14000/- रूपये", color: "bg-light", highlightColor: "bg-success" },
    { year: "22-10-2019", description: "अजीवन सदस्य अभियान में 72 सदस्य पंजीकृत", color: "bg-light", highlightColor: "bg-success" },
    { year: "10-05-2020", description: "कोविड महामारी में राशन वितरण", color: "bg-light", highlightColor: "bg-success" },
    { year: "08-08-2022", description: "सफाई अभियान कमला नेहरू पार्क", color: "bg-light", highlightColor: "bg-success" },
    { year: "02-10-2022", description: "चौथा विशाल मां भगवती जागरण एसo डी स्कूल", color: "bg-light", highlightColor: "bg-success" },
    { year: "19-02-2023", description: "नव कार्यकर्णी शपथ समारोह", color: "bg-light", highlightColor: "bg-success" },
    { year: "04-03-2023", description: "श्री पुरसोतम ममगैन को आर्थिक सहायता", color: "bg-light", highlightColor: "bg-success" },
    { year: "07-03-2023", description: "होली मिलन समारोह", color: "bg-light", highlightColor: "bg-success" },
    { year: "16-04-2023", description: "कार्यालय का उद्घाटन", color: "bg-light", highlightColor: "bg-success" },
    { year: "05-04-2023", description: "ऑफिस का किराया वसूली", color: "bg-light", highlightColor: "bg-success" },
    { year: "24-05-2023", description: "मंच का क्यूआर कोड सक्रिय", color: "bg-light", highlightColor: "bg-success" },
    { year: "28-05-2023", description: "दूसरा रक्तदान शिविर रोटरी ब्लड बैंक खादीपुर (82 यूनिट)", color: "bg-light", highlightColor: "bg-success" },
    { year: "01-06-2023", description: "आजीवन सदस्य पंजीकरण (88 सदस्य)", color: "bg-light", highlightColor: "bg-success" },
    { year: "14-08-2023", description: "‘मेरी माटी मेरा देश’ के तहत स्वच्छता अभियान", color: "bg-light", highlightColor: "bg-success" },
    { year: "15-08-2023", description: "स्वतंत्रता दिवस समारोह", color: "bg-light", highlightColor: "bg-success" },
    { year: "22-10-2023", description: "पांचवा विशाल मां भगवती जागरण (ग्रोवर फार्म हाउस)", color: "bg-light", highlightColor: "bg-success" },
    { year: "01-01-2024", description: "कार्यालय का किराया मंच द्वारा भुगतान", color: "bg-light", highlightColor: "bg-success" },
    { year: "21-01-2024", description: "प्रथम उत्तराणी महाकौथिक", color: "bg-light", highlightColor: "bg-success" },
    { year: "26-01-2024", description: "गणतंत्र दिवस समारोह", color: "bg-light", highlightColor: "bg-success" },
    { year: "28-04-2024", description: "तीसरा रक्तदान शिविर (राघव डायग्नोस्टिक)", color: "bg-light", highlightColor: "bg-success" },
    { year: "01-06-2024", description: "नए आजीवन सदस्य का पंजीकरण", color: "bg-light", highlightColor: "bg-success" },
    { year: "14-07-2024", description: "एक वृक्ष एक संकल्प वृक्षारोपण", color: "bg-light", highlightColor: "bg-success" },
    { year: "15-08-2024", description: "स्वतंत्रता दिवस के अवसर पर झंडा समारोह", color: "bg-light", highlightColor: "bg-success" },
    { year: "18-08-2024", description: "उड़ान के अंतर्गत कैरियर काउंसेलिंग कार्यक्रम", color: "bg-light", highlightColor: "bg-success" }
  ];

  const [events, setEvents] = useState(
    eventsData.map(event => ({ ...event, arrowClass: '', textColor: '' }))
  );
  
  const handleEventHover = (index) => {
    const updatedEvents = events.map((event, i) => {
      if (i === index) {
        return { ...event, color: event.highlightColor, textColor: "text-white", arrowClass: 'arrow-show' };
      } else {
        return { ...event, color: "bg-light", textColor: "", arrowClass: '' };
      }
    });
  
    setEvents(updatedEvents);
  };

  return (
    <div className="container glance-div py-5">
      <h1 className="p-2 text-center">गतिविधियाँ - एक नजर में</h1>
      <div className="row justify-content-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="col-12 col-md-4 col-lg-3 mb-3" // Adjust columns here
          >
            <div
              className={`event-item ${event.color} ${event.textColor} p-3 shadow-sm rounded`}
              style={{ transition: 'background-color 0.3s, color 0.3s', height: 'auto' }}
              onMouseEnter={() => handleEventHover(index)}
              onMouseLeave={() => handleEventHover(null)}
            >
              <h5 className="year display-6">{event.year}</h5>
              <p className="description">{event.description.length > 50 ? `${event.description.substring(0, 50)}...` : event.description}</p>
              <div className={`arrow ${event.arrowClass}`}>&rarr;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryRecap;
