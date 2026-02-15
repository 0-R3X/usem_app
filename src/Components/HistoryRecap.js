import React, { useState, useMemo } from "react";

const eventsData = [
  { year: "02-03-2017", description: "घर-घर होली फेरी" },
  { year: "07-05-2017", description: "संस्कार भारती कार्यक्रम में उत्तराखंड की संस्कृति प्रस्तुत की गई" },
  { year: "28-09-2017", description: "प्रथम मां भगवती जागरण एसo डी स्कूल गुड़गांव" },
  { year: "09-11-2017", description: "उत्तराखंड स्थापना दिवस समारोह सेक्टर 4 बाल भवन" },
  { year: "11-02-2018", description: "सफाई अभियान सरकारी स्कूल भीमनगर, गुड़गांव" },
  { year: "01-03-2018", description: "गरीब परिवार की आर्थिक सहायता 37000/- रुपये" },
  { year: "01-03-2018", description: "पहला रक्तदान शिविर रोटरी ब्लड बैंक खादीपुर" },
  { year: "22-10-2018", description: "दूसरा विशाल मां भगवती जागरण एसo डी स्कूल" },
  { year: "25-11-2018", description: "उत्तराखंड स्थापना दिवस समारोह मानेसर" },
  { year: "17-03-2019", description: "होली मिलन समारोह 'फूलो की होली'" },
  { year: "05-10-2019", description: "तीसरा विशाल मां भगवती जागरण खादीपुर" },
  { year: "06-10-2019", description: "आर्थिक सहायता 14000/- रूपये" },
  { year: "22-10-2019", description: "अजीवन सदस्य अभियान में 72 सदस्य पंजीकृत" },
  { year: "10-05-2020", description: "कोविड महामारी में राशन वितरण" },
  { year: "08-08-2022", description: "सफाई अभियान कमला नेहरू पार्क" },
  { year: "02-10-2022", description: "चौथा विशाल मां भगवती जागरण एसo डी स्कूल" },
  { year: "19-02-2023", description: "नव कार्यकर्णी शपथ समारोह" },
  { year: "04-03-2023", description: "श्री पुरसोतम ममगैन को आर्थिक सहायता" },
  { year: "07-03-2023", description: "होली मिलन समारोह" },
  { year: "16-04-2023", description: "कार्यालय का उद्घाटन" },
  { year: "05-04-2023", description: "ऑफिस का किराया वसूली" },
  { year: "24-05-2023", description: "मंच का क्यूआर कोड सक्रिय" },
  { year: "28-05-2023", description: "दूसरा रक्तदान शिविर रोटरी ब्लड बैंक खादीपुर (82 यूनिट)" },
  { year: "01-06-2023", description: "आजीवन सदस्य पंजीकरण (88 सदस्य)" },
  { year: "14-08-2023", description: "‘मेरी माटी मेरा देश’ के तहत स्वच्छता अभियान" },
  { year: "15-08-2023", description: "स्वतंत्रता दिवस समारोह" },
  { year: "22-10-2023", description: "पांचवा विशाल मां भगवती जागरण (ग्रोवर फार्म हाउस)" },
  { year: "01-01-2024", description: "कार्यालय का किराया मंच द्वारा भुगतान" },
  { year: "21-01-2024", description: "प्रथम उत्तराणी महाकौथिक" },
  { year: "26-01-2024", description: "गणतंत्र दिवस समारोह" },
  { year: "28-04-2024", description: "तीसरा रक्तदान शिविर (राघव डायग्नोस्टिक)" },
  { year: "01-06-2024", description: "नए आजीवन सदस्य का पंजीकरण" },
  { year: "14-07-2024", description: "एक वृक्ष एक संकल्प वृक्षारोपण" },
  { year: "15-08-2024", description: "स्वतंत्रता दिवस के अवसर पर झंडा समारोह" },
  { year: "18-08-2024", description: "उड़ान के अंतर्गत कैरियर काउंसेलिंग कार्यक्रम" },
  { year: "19-02-2025", description: "सांस्कृतिक उत्सव मकरेणी कौथिक महोत्सव" },
  { year: "15-10-2025", description: "राष्ट्रीय पर्व स्वतंत्रता दिवस समारोह" },
  { year: "01-10-2025", description: "मां भगवती जागरण - भक्ति, श्रद्धा और आध्यात्मिक ऊर्जा का संगम" },
  { year: "25-01-2026", description: "मकरेणी कौथिक महोत्सव - उत्तराखंड संस्कृति और परंपराओं का भव्य उत्सव" },
];

const parseDate = (dateStr) => {
  // Expecting "dd-mm-yyyy"
  const [dd, mm, yyyy] = dateStr.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
};

const HistoryRecap = () => {
  // Sort events in reverse chronological order (newest first)
  const sortedEvents = useMemo(
    () => [...eventsData].sort((a, b) => parseDate(b.year) - parseDate(a.year)),
    []
  );

  // Default active: newest event (index 0 after sorting)
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const truncate = (text, max = 52) =>
    text.length > max ? `${text.substring(0, max)}...` : text;

  const activeEvent = sortedEvents[activeIndex];
  const totalEvents = sortedEvents.length;

  // Year-only (last 4 chars of date)
  const activeYear = activeEvent.year.slice(-4);

  const previousEvent =
    activeIndex > 0 ? { ...sortedEvents[activeIndex - 1], index: activeIndex - 1 } : null;
  const nextEvent =
    activeIndex < totalEvents - 1
      ? { ...sortedEvents[activeIndex + 1], index: activeIndex + 1 }
      : null;

  return (
    <div className="container glance-div py-5">
      <h1 className="p-2 text-center">गतिविधियाँ - एक नजर में</h1>
      <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
        {totalEvents} से अधिक प्रमुख गतिविधियाँ, सेवा, संस्कृति और समुदाय के साथ।
      </p>

      <div className="row">
        {/* Left: compact cards (reverse chronological) */}
        <div className="col-12 col-lg-7">
          <div className="row justify-content-center">
            {sortedEvents.map((event, index) => {
              const isActive = index === activeIndex;
              const isHovered = index === hoveredIndex;
              const highlight = isActive || isHovered;

              const cardBgClass = highlight ? "bg-success" : "bg-light";
              const textColorClass = highlight ? "text-white" : "";
              const arrowClass = highlight ? "arrow-show" : "";

              return (
                <div
                  key={`${event.year}-${index}`}
                  className="col-12 col-md-6 col-xl-4 mb-3"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`w-100 border-0 text-start event-item ${cardBgClass} ${textColorClass} p-3 shadow-sm rounded`}
                    style={{
                      transition:
                        "background-color 0.25s, color 0.25s, transform 0.15s",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <h5 className="year mb-1" style={{ fontSize: "1.05rem" }}>
                      {event.year}
                    </h5>
                    <p
                      className="description mb-1"
                      style={{ fontSize: "0.9rem", minHeight: "3rem" }}
                    >
                      {truncate(event.description)}
                    </p>
                    <div
                      className={`arrow ${arrowClass}`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      &rarr;
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: active event detail, more filled */}
        <div className="col-12 col-lg-5 mt-4 mt-lg-0">
          <div
            className="h-100 p-4 p-md-5 bg-success text-white rounded shadow-sm"
            style={{ position: "sticky", top: "80px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span
                className="badge bg-light text-success"
                style={{ fontSize: "0.8rem" }}
              >
                चयनित गतिविधि
              </span>
              <span
                className="badge bg-light text-success"
                style={{ fontSize: "0.75rem" }}
              >
                क्र.सं. {activeIndex + 1} / {totalEvents}
              </span>
            </div>

            <h3 className="mb-2" style={{ fontSize: "1.6rem" }}>
              {activeEvent.description}
            </h3>

            <p className="mb-1" style={{ fontSize: "0.95rem", opacity: 0.95 }}>
              दिनांक: <strong>{activeEvent.year}</strong>
            </p>
            <p className="mb-2" style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              वर्ष: <strong>{activeYear}</strong>
            </p>

            <p className="mt-3 mb-3" style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              यह गतिविधि मंच की निरंतर सामाजिक, सांस्कृतिक और सेवा-आधारित यात्राओं
              का हिस्सा है। यह आयोजन उत्तराखंड प्रवासी समुदाय के बीच सहयोग, एकता और
              पहचान को मजबूत करता है।
            </p>

            {/* Nearby events list to fill the panel more */}
            <div className="mt-3 pt-3 border-top border-light">
              <h6 className="mb-2" style={{ fontSize: "0.95rem" }}>
                आसपास की गतिविधियाँ
              </h6>
              <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem" }}>
                {previousEvent && (
                  <li className="mb-1">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(previousEvent.index)}
                      className="btn btn-sm btn-outline-light px-2 py-1"
                      style={{ borderRadius: "999px" }}
                    >
                      ← {previousEvent.year} —{" "}
                      {truncate(previousEvent.description, 38)}
                    </button>
                  </li>
                )}
                {nextEvent && (
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(nextEvent.index)}
                      className="btn btn-sm btn-outline-light px-2 py-1"
                      style={{ borderRadius: "999px" }}
                    >
                      {nextEvent.year} — {truncate(nextEvent.description, 38)} →
                    </button>
                  </li>
                )}
                {!previousEvent && !nextEvent && (
                  <li className="text-light-50">
                    यह सबसे पहली या आख़िरी गतिविधि है।
                  </li>
                )}
              </ul>
            </div>

            <p
              className="mt-3 mb-0"
              style={{ fontSize: "0.8rem", opacity: 0.85 }}
            >
              2017 से {activeYear} तक की सभी गतिविधियाँ मंच की सतत यात्रा और
              समाजसेवा की कहानी बयाँ करती हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryRecap;
