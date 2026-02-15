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

// 🔹 Config for this hero
const HERO_EVENT = {
  title: "मकरेणी कौथिक महोत्सव - 2026: उत्तराखंड संस्कृति और परंपराओं का भव्य उत्सव",
  description: [
    "मकरेणी कौथिक महोत्सव 2026 एक भव्य सांस्कृतिक आयोजन रहा, जिसमें उत्तराखंड की लोकसंस्कृति, परंपराओं और विरासत की सुंदर झलक प्रस्तुत की गई। कार्यक्रम में लोकनृत्य, लोकगीत और पारंपरिक वाद्ययंत्रों की मधुर प्रस्तुतियों ने दर्शकों का मन मोह लिया।",
    "इस महोत्सव में स्थानीय नागरिकों, युवाओं, महिलाओं और बच्चों ने उत्साहपूर्वक भाग लिया। विभिन्न सांस्कृतिक झांकियों और प्रस्तुतियों के माध्यम से उत्तराखंडी जीवनशैली और सामाजिक मूल्यों को जीवंत रूप में प्रदर्शित किया गया।",
    "मकरेणी कौथिक महोत्सव 2026 ने नई पीढ़ी को अपनी जड़ों से जोड़ने, सामाजिक एकता को मजबूत करने और सांस्कृतिक विरासत के संरक्षण का सशक्त संदेश दिया।",
  ],

  images: [
    "assets/event13/1 (30).jpg",
    "assets/event13/1 (16).jpg",
    "assets/event13/1 (48).jpg",
    "assets/event13/1 (2).jpg",
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
