// src/Components/WhateverPath/ContentWithCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

// 🔹 Cloudinary setup
const CLOUD_NAME = "dkhjn75hj";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;

// Convert "assets/event8/1 (13).jpg" → Cloudinary URL
const localToCloudinary = (localPath) => {
  if (!localPath) return localPath;

  const trimmed = localPath.replace(/^\.?\//, "");
  if (!trimmed.startsWith("assets/")) return localPath;

  const parts = trimmed.split("/");
  if (parts.length < 2) return localPath;

  const fileName = parts[parts.length - 1];
  const folderPath = parts.slice(0, parts.length - 1).join("/");

  const extMatch = fileName.match(/\.[^/.]+$/);
  const ext = extMatch ? extMatch[0] : "";
  const baseName = fileName.replace(ext, "");

  const cleanBase = baseName
    .replace(/\s+/g, "_")
    .replace(/[()]/g, "");

  return `${CLOUDINARY_BASE}/${folderPath}/${cleanBase}${ext}`;
};

// 🔹 Config for this hero
const HERO_EVENT = {
  title: "जागरण - 2024: आध्यात्मिकता और सामूहिक भक्ति का भव्य आयोजन",
  description: [
    "जागरण 2024 एक भव्य और आध्यात्मिक आयोजन रहा, जिसमें श्रद्धालुओं ने भक्तिमय माहौल में माता रानी की आराधना की। इस कार्यक्रम में भजन संध्या, कीर्तन और सांस्कृतिक प्रस्तुतियों ने सभी को मंत्रमुग्ध कर दिया।",
    "श्रद्धालुओं ने पूरी रात जागकर भक्ति में लीन होकर मां के चरणों में अपनी श्रद्धा अर्पित की। आयोजन स्थल को दीपों और फूलों से सजाया गया, जिससे वातावरण दिव्य आभा से भर गया।",
    "इस जागरण ने भक्तों को आध्यात्मिक शांति और सकारात्मक ऊर्जा का अनुभव कराया, जिससे समाज में धार्मिक एकता और सद्भाव का संदेश प्रसारित हुआ।",
  ],
  images: [
    "assets/event8/1 (13).jpg",
    "assets/event8/1 (14).jpg",
    "assets/event8/1 (68).jpg",
    "assets/event8/1 (29).jpg",
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

const ContentWithCarousel = () => {
  return (
    <div className="container-fluid mx-3 my-4">
      <div className="row align-items-center">
        {/* Left: Carousel */}
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

        {/* Right: Text */}
        <div className="col-12 col-md-6 p-3 py-4">
          <div className="bg-success" style={textCardStyle}>
            <span
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              भक्ति एवं सांस्कृतिक आयोजन
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
      </div>
    </div>
  );
};

export default ContentWithCarousel;
