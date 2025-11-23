// src/Components/YourPath/Events.js
import React from "react";
import { Carousel } from "react-bootstrap";

const imageSize = {
  maxWidth: "100%",
  height: "auto",
};

const eventContentStyle = {
  color: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

// 🔹 Cloudinary base (same account you're already using)
const CLOUD_NAME = "dkhjn75hj";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;

// Toggle this to false if you ever want to go back to local assets
const USE_CLOUDINARY = true;

/**
 * Convert local-style paths like:
 *   "assets/event9/1 (6).jpg"
 * into Cloudinary URLs like:
 *   "https://res.cloudinary.com/.../image/upload/f_auto,q_auto/assets/event9/1_6.jpg"
 */
const localToCloudinary = (localPath) => {
  if (!USE_CLOUDINARY) return localPath;
  if (!localPath) return localPath;

  const trimmed = localPath.replace(/^\.?\//, ""); // remove leading "./"
  if (!trimmed.startsWith("assets/")) return localPath;

  const parts = trimmed.split("/");
  if (parts.length < 2) return localPath;

  const fileName = parts[parts.length - 1];
  const folderPath = parts.slice(0, parts.length - 1).join("/"); // e.g. "assets/event9"

  const extMatch = fileName.match(/\.[^/.]+$/);
  const ext = extMatch ? extMatch[0] : "";
  const baseName = fileName.replace(ext, ""); // "1 (6)"

  const cleanBase = baseName
    .replace(/\s+/g, "_") // spaces → _
    .replace(/[()]/g, ""); // remove parentheses → "1_6"

  return `${CLOUDINARY_BASE}/${folderPath}/${cleanBase}${ext}`;
};

// 🔹 All event content in one easy-to-edit array
const EVENTS = [
  {
    id: 11,
    title: "स्वतंत्रता दिवस समारोह - 2025",
    date: "15 अक्टूबर 2025",
    highlight:
      "तिरंगा, देशभक्ति गीत और सांस्कृतिक प्रस्तुतियों के साथ राष्ट्रीय पर्व का गरिमामय उत्सव।",
    paragraph: [
      "15 अक्टूबर 2025 को स्वतंत्रता दिवस समारोह बड़े उत्साह और श्रद्धा के साथ मनाया गया। कार्यक्रम की शुरुआत ध्वजारोहण और राष्ट्रगान के साथ हुई, जिसमें सभी उपस्थित जनों ने तिरंगे के प्रति सम्मान व्यक्त किया और शहीदों को नमन किया।",
      "समारोह में बच्चों और युवाओं द्वारा देशभक्ति गीत, नाटक और नृत्य प्रस्तुत किए गए, जिन्होंने स्वतंत्रता संग्राम के संघर्षों और बलिदानों को जीवंत कर दिया। मंच से वक्ताओं ने राष्ट्रीय एकता, संविधान और नागरिक दायित्वों पर प्रेरणादायक संबोधन दिए।",
      "यह आयोजन केवल उत्सव नहीं, बल्कि देश के प्रति हमारी जिम्मेदारियों की याद दिलाने वाला संकल्प दिवस भी रहा। स्वतंत्रता दिवस समारोह ने समाज में देशभक्ति, अनुशासन और आपसी सद्भाव के मूल्यों को पुनः दृढ़ किया।",
    ],
    images: ["assets/event11/1 (2).jpg"],
  },
  {
    id: 10,
    title: "मकरेणी कौथिक महोत्सव - 2025",
    date: "19 फरवरी 2025",
    highlight:
      "लोक संस्कृति, गीत-संगीत और सामूहिक उत्सव के माध्यम से उत्तराखंड की पहचान को सशक्त करने वाला भव्य आयोजन।",
    paragraph: [
      "19 फरवरी 2025 को मकरेणी कौथिक महोत्सव का भव्य आयोजन किया गया, जिसमें प्रवासी उत्तराखंडवासियों सहित स्थानीय नागरिकों ने बड़ी संख्या में भाग लिया। इस उत्सव में पारंपरिक वेशभूषा, लोकनृत्य और लोकगीतों के माध्यम से उत्तराखंड की समृद्ध सांस्कृतिक विरासत को प्रस्तुत किया गया।",
      "कार्यक्रम में लोक कलाकारों, गायक-गायिकाओं और बच्चों ने रंगारंग प्रस्तुतियाँ दीं, जिससे पूरा वातावरण उत्साह और आनंद से भर गया। मंच से समाज के प्रबुद्ध जनों ने संस्कृति, शिक्षा और समाजसेवा के महत्व पर सारगर्भित विचार रखे।",
      "मकरेणी कौथिक महोत्सव ने समुदाय को एक सूत्र में बाँधते हुए यह संदेश दिया कि संस्कृति ही हमारी पहचान है। यह आयोजन नई पीढ़ी को अपनी जड़ों से जोड़ने और सामाजिक एकता को मजबूत करने की दिशा में एक महत्वपूर्ण कदम साबित हुआ।",
    ],
    images: ["assets/event10/1 (1).jpg"],
  },
  {
    id: 9,
    title: "वृक्षारोपण - 2025",
    date: "28 जुलाई 2025",
    highlight: "व्यापक वृक्षारोपण कार्यक्रम, स्थानीय नागरिकों व युवाओं की सक्रिय भागीदारी।",
    paragraph: [
      "28 जुलाई 2025 को हमारे प्रदेश में एक व्यापक वृक्षारोपण कार्यक्रम का सफल आयोजन किया गया, जिसमें स्थानीय नागरिकों, छात्रों और सामाजिक संगठनों ने सक्रिय भागीदारी दिखाई।",
      "इस अभियान के अंतर्गत सैकड़ों पौधे लगाए गए, जिससे पर्यावरण संतुलन को बनाए रखने और हरियाली को बढ़ावा देने में मदद मिली। यह प्रयास न केवल प्राकृतिक संरक्षण की दिशा में एक महत्वपूर्ण कदम था, बल्कि समाज में पर्यावरण के प्रति जागरूकता फैलाने का भी माध्यम बना।",
      "यह आयोजन सामूहिक प्रयास, ज़िम्मेदारी और प्रकृति के प्रति हमारे कर्तव्यों की याद दिलाता है। हम सभी को इस सकारात्मक पहल को आगे बढ़ाने और पर्यावरण संरक्षण में योगदान देने के लिए प्रेरित करता है।",
    ],
    images: ["assets/event9/1 (6).jpg"],
  },
  {
    id: 8,
    title: "जागरण - 2024: आध्यात्मिकता और सामूहिक भक्ति का भव्य आयोजन",
    date: "2024",
    highlight: "भजन, कीर्तन और भक्ति के माध्यम से दिव्य वातावरण।",
    paragraph: [
      "जागरण 2024 एक भव्य और आध्यात्मिक आयोजन रहा, जिसमें श्रद्धालुओं ने भक्तिमय माहौल में माता रानी की आराधना की। इस कार्यक्रम में भजन संध्या, कीर्तन और सांस्कृतिक प्रस्तुतियों ने सभी को मंत्रमुग्ध कर दिया।",
      "श्रद्धालुओं ने पूरी रात जागकर भक्ति में लीन होकर मां के चरणों में अपनी श्रद्धा अर्पित की। आयोजन स्थल को दीपों और फूलों से सजाया गया, जिससे वातावरण दिव्य आभा से भर गया।",
      "इस जागरण ने भक्तों को आध्यात्मिक शांति और सकारात्मक ऊर्जा का अनुभव कराया, जिससे समाज में धार्मिक एकता और सद्भाव का संदेश प्रसारित हुआ।",
    ],
    images: ["assets/event8/1 (13).jpg"],
  },
  {
    id: 7,
    title: "रक्तदान शिविर - 2024",
    date: "मई 2024",
    highlight: "सैकड़ों यूनिट रक्त एकत्र, अनगिनत ज़िंदगियों में उम्मीद की किरण।",
    paragraph: [
      "मई 2024 में, हमारे प्रदेश में एक और महत्वपूर्ण रक्तदान शिविर का सफल आयोजन किया गया, जिसमें समाज के कई लोगों ने बढ़-चढ़कर भाग लिया। इस शिविर में स्वास्थ्य सेवा के प्रति समर्पण और सामुदायिक समर्थन की भावना को प्रकट किया गया।",
      "इस वर्ष, रक्तदान शिविर के माध्यम से सैकड़ों यूनिट रक्त एकत्र किया गया, जिससे कई ज़िंदगियों को बचाने में सहायता मिली। इस महत्वपूर्ण योगदान के लिए सभी रक्तदाताओं का हार्दिक धन्यवाद किया गया।",
      "रक्तदान के महत्व को समझते हुए, यह आयोजन समाज में स्वास्थ्य के प्रति जागरूकता फैलाने का एक महत्वपूर्ण माध्यम बना। यह शिविर सामुदायिक सेवा और मानवता की भावना को बढ़ावा देने का प्रतीक है।",
    ],
    images: ["assets/event7/1 (3).jpg"],
  },
  {
    id: 6,
    title: "वृक्षारोपण - 2024",
    date: "मार्च 2024",
    highlight: "हजारों पौधे, हरित भविष्य की ओर एक सशक्त कदम।",
    paragraph: [
      "मार्च 2024 में, हमने एक भव्य वृक्षारोपण समारोह का आयोजन किया, जिसका उद्देश्य हमारे प्रदेश की हरियाली और पर्यावरण संरक्षण को बढ़ावा देना था। इस आयोजन में प्रदेश के लोगों, विशेषकर युवाओं और बच्चों की बड़ी भागीदारी रही।",
      "हजारों नए पौधे लगाए गए, जिससे न केवल प्राकृतिक सौंदर्य में वृद्धि हुई, बल्कि पर्यावरण संरक्षण के प्रति जागरूकता भी फैली। वृक्षों की देखभाल और उनके महत्व को समझाने के लिए विभिन्न गतिविधियाँ भी आयोजित की गईं।",
      "अंततः, सभी सहभागियों ने पर्यावरण सुरक्षा का संकल्प लिया और वृक्षों की रक्षा करने की प्रतिबद्धता जताई। यह आयोजन हमारे समुदाय के सतत विकास और पर्यावरण संरक्षण के प्रति हमारी प्रतिबद्धता का प्रतीक है।",
    ],
    images: ["assets/event6/1 (13).jpg"],
  },
  {
    id: 4,
    title: "मकरेणी कौथिक महोत्सव (जनवरी, 2024)",
    date: "जनवरी 2024",
    highlight: "उत्तराखंड की लोक संस्कृति, गीत-संगीत और हंसी-मज़ाक का संगम।",
    paragraph: [
      "उत्तराखंड सांस्कृतिक एकता मंच ने गुरुग्राम में आयोजित हुए मकरेणी कौथिक महोत्सव के सुखद पलों को साझा करते हुए समारोह को सम्पन्न किया। यह समारोह उत्तराखंड के समृद्ध सांस्कृतिक विरासत को बढ़ावा देने में अद्वितीय योगदान देता है।",
      "मकरेणी कौथिक महोत्सव में मुख्य अतिथियों की गरिमा, लोक कलाकारों की प्रस्तुतियाँ और हास्य कलाकारों की जुगलबंदी ने सभी को आनंदित किया।",
      "इस समारोह ने लोगों को मिलकर मनाने का सुंदर मौका प्रदान किया और उत्तराखंडी सांस्कृतिक धरोहर को और भी मजबूती से महसूस कराया।",
    ],
    images: ["assets/event4/1 (3).jpg"],
  },
  {
    id: 2,
    title: "होली मिलन समारोह (मार्च, 2023)",
    date: "मार्च 2023",
    highlight: "रंग, संगीत और लोक-नृत्य के साथ सामुदायिक एकता का उत्सव।",
    paragraph: [
      "हमारे उत्तराखंड समुदाय ने होली के अवसर पर एक रंगारंग मिलन समारोह का आयोजन किया, जिसमें सभी ने मिलकर हंसी-खुशी के साथ त्योहार मनाया।",
      "लोक नृत्य, गीत-संगीत और पारंपरिक व्यंजनों के साथ यह आयोजन केवल रंगों का खेल नहीं, बल्कि दिलों को जोड़ने वाला उत्सव बना।",
      "समारोह के दौरान लोगों ने अपनी संस्कृति की झलकियों को गर्व के साथ प्रस्तुत किया और सामूहिकता के इस भाव ने सभी के मन पर गहरा प्रभाव छोड़ा।",
    ],
    images: [
      "assets/event2/1 (2).jpg",
      "assets/event2/1 (3).jpg",
      "assets/event2/1 (4).jpg",
    ],
  },
  {
    id: 1,
    title: "रक्तदान शिविर (80 यूनिट)",
    date: "28 मई (वर्ष)",
    highlight: "80 यूनिट रक्त संग्रह, सेवा और संवेदनशीलता का उदाहरण।",
    paragraph: [
      "28 मई को हमारे प्रदेश के एक अद्वितीय रक्तदान शिविर का आयोजन किया गया, जिसमें समाज के लिए महत्वपूर्ण रक्तदान के माध्यम से नागरिकों के स्वास्थ्य के लिए चिंता और समर्पण दिखाया गया।",
      "इस शिविर में 80 यूनिट रक्त एकत्र किया गया, जिससे कई जीवन बचाने में मदद मिली। यह अभियान स्थानीय नागरिकों के सहयोग और सेवा-भाव का प्रतीक बना।",
      "यह घटना हमें समाज के प्रति हमारी जिम्मेदारियों का पुनः स्मरण कराती है, और हमें आगे भी ऐसे आयोजनों को बढ़ावा देने की प्रेरणा देती है।",
    ],
    images: ["assets/images/1 (11).jpg"],
  },
];

export default function Events() {
  // Sort by id desc so newest event appears first
  const sortedEvents = [...EVENTS].sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="mx-4 mx-md-5 my-4">
        <div className="text-center mb-4">
          <div
            style={{
              background: "#198754",
              padding: "22px 20px",
              borderRadius: "12px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.16)",
              color: "white",
            }}
          >
            <h2 className="fw-bold mb-1" style={{ color: "white" }}>
              कार्यक्रम एवं प्रमुख आयोजन
            </h2>
            <p
              className="mb-0"
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: 0.95,
              }}
            >
              समुदाय, संस्कृति और सेवा से जुड़े हमारे कुछ प्रमुख आयोजनों की झलक।
            </p>
          </div>
        </div>

        {sortedEvents.map((event, index) => {
          const isImageLeft = index % 2 === 0; // alternate layout
          const hasCarousel = event.images.length > 1;

          const imageBlock = (
            <div className="col-md-6 p-3 d-flex align-items-stretch">
              <div style={{ width: "100%" }}>
                {hasCarousel ? (
                  <Carousel interval={5000} pause="hover">
                    {event.images.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img
                          className="d-block w-100"
                          src={localToCloudinary(src)}
                          alt={`${event.title} - छवि ${i + 1}`}
                          style={imageSize}
                          loading="lazy"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <img
                    className="d-block w-100"
                    src={localToCloudinary(event.images[0])}
                    alt={event.title}
                    style={imageSize}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          );

          const contentBlock = (
            <div className="col-md-6 p-4 p-md-5 bg-success" style={eventContentStyle}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="mb-0" style={{ fontSize: "1.6rem" }}>
                  {event.title}
                </h2>
                {event.date && (
                  <span
                    className="badge bg-light text-success ms-2"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {event.date}
                  </span>
                )}
              </div>

              {event.highlight && (
                <p
                  className="mb-2"
                  style={{ fontWeight: "500", fontSize: "0.95rem" }}
                >
                  {event.highlight}
                </p>
              )}

              {event.paragraph.map((text, i) => (
                <p key={i} className="mb-2" style={{ fontSize: "0.9rem" }}>
                  {text}
                </p>
              ))}
            </div>
          );

          return (
            <div className="my-4" key={event.id}>
              <div className="row align-items-stretch">
                {isImageLeft ? (
                  <>
                    {imageBlock}
                    {contentBlock}
                  </>
                ) : (
                  <>
                    {contentBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
