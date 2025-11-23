// src/Components/WhateverPath/CarouselWithContent.js
import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

// 🔹 Cloudinary setup (same as elsewhere)
const CLOUD_NAME = "dkhjn75hj";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;

// Convert "assets/event9/1 (2).jpg" → Cloudinary URL
const localToCloudinary = (localPath) => {
  if (!localPath) return localPath;

  const trimmed = localPath.replace(/^\.?\//, "");
  if (!trimmed.startsWith("assets/")) return localPath;

  const parts = trimmed.split("/");
  if (parts.length < 2) return localPath;

  const fileName = parts[parts.length - 1];
  const folderPath = parts.slice(0, parts.length - 1).join("/"); // "assets/event9"

  const extMatch = fileName.match(/\.[^/.]+$/);
  const ext = extMatch ? extMatch[0] : "";
  const baseName = fileName.replace(ext, ""); // "1 (2)"

  const cleanBase = baseName
    .replace(/\s+/g, "_") // spaces → _
    .replace(/[()]/g, ""); // remove parentheses → "1_2"

  return `${CLOUDINARY_BASE}/${folderPath}/${cleanBase}${ext}`;
};

// 🔹 Easy-to-edit config for this hero
const HERO_EVENT = {
  title: "वृक्षारोपण - 2025",
  description: [
    "28 जुलाई 2025 को हमारे प्रदेश में एक व्यापक वृक्षारोपण कार्यक्रम का सफल आयोजन किया गया, जिसमें स्थानीय नागरिकों, छात्रों और सामाजिक संगठनों ने सक्रिय भागीदारी दिखाई।",
    "इस अभियान के अंतर्गत सैकड़ों पौधे लगाए गए, जिससे पर्यावरण संतुलन को बनाए रखने और हरियाली को बढ़ावा देने में मदद मिली। यह प्रयास न केवल प्राकृतिक संरक्षण की दिशा में एक महत्वपूर्ण कदम था, बल्कि समाज में पर्यावरण के प्रति जागरूकता फैलाने का भी माध्यम बना।",
    "यह आयोजन सामूहिक प्रयास, ज़िम्मेदारी और प्रकृति के प्रति हमारे कर्तव्यों की याद दिलाता है। हम सभी को इस सकारात्मक पहल को आगे बढ़ाने और पर्यावरण संरक्षण में योगदान देने के लिए प्रेरित करता है।",
  ],
  images: [
    "assets/event9/1 (2).jpg",
    "assets/event9/1 (11).jpg",
    "assets/event9/1 (19).jpg",
    "assets/event9/1 (18).jpg",
    "assets/event9/1 (20).jpg",
  ],
};

const textCardStyle = {
  background: "linear-gradient(135deg, #198754, #1f9d63)",
  color: "white",
  padding: "24px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
  height: "100%",
};

const buttonStyle = {
  borderRadius: "999px",
  padding: "10px 22px",
  fontWeight: 500,
};

const CarouselWithContent = () => {
  return (
    <div className="container-fluid mx-3 my-4">
      <div className="row align-items-center">
        {/* Left: Text */}
        <div className="col-12 col-md-6 p-3 py-4">
          <div style={textCardStyle}>
            <span
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              नवीनतम आयोजन
            </span>
            <h2 className="mt-2 mb-3" style={{ fontWeight: "700" }}>
              {HERO_EVENT.title}
            </h2>
            {HERO_EVENT.description.map((para, idx) => (
              <p key={idx} className="mb-2" style={{ fontSize: "0.9rem" }}>
                {para}
              </p>
            ))}
            <div className="mt-3">
              <Link to="/events" className="btn btn-light text-dark" style={buttonStyle}>
                और जानें
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="col-12 col-md-6 p-3">
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Carousel interval={4000} pause="hover">
              {HERO_EVENT.images.map((src, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={localToCloudinary(src)}
                    alt={`${HERO_EVENT.title} - छवि ${idx + 1}`}
                    loading="lazy"
                    style={{
                      maxHeight: "420px",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithContent;
