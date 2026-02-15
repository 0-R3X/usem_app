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
  title: "मां भगवती जागरण - 2025: भक्ति, श्रद्धा और आध्यात्मिक ऊर्जा का संगम",
  description: [
    "1 अक्टूबर 2025 को आयोजित मां भगवती जागरण एक अत्यंत श्रद्धापूर्ण और आध्यात्मिक आयोजन रहा, जिसमें श्रद्धालुओं ने भक्तिमय वातावरण में माता रानी की आराधना की। भजन, कीर्तन और जागरण की प्रस्तुतियों ने सभी को भावविभोर कर दिया।",
    "श्रद्धालुओं ने पूरी रात जागकर माता के चरणों में अपनी श्रद्धा अर्पित की। दीपों, फूलों और साज-सज्जा से सुसज्जित आयोजन स्थल ने वातावरण को दिव्य और शांतिमय बना दिया।",
    "इस जागरण ने समाज में धार्मिक आस्था, आपसी सद्भाव और सकारात्मक ऊर्जा का संचार किया तथा सभी श्रद्धालुओं को आध्यात्मिक शांति का अनुभव कराया।",
  ],


  images: [
    "assets/event12/1 (56).jpg",
    "assets/event12/1 (57).jpg",
    "assets/event12/1 (58).jpg",
    "assets/event12/1 (59).jpg",
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
