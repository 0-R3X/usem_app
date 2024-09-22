import React from "react";
import { Col, Row } from "react-bootstrap";

const membersData = [
  {
    id: 1,
    name: "मनोज भंडारी",
    // designation: "उपाध्यक्ष",
    photoUrl: "/assets/members/मनोज भंडारी/1.jpeg",
  },
  {
    id: 2,
    name: "जगदीप रावत",
    photoUrl: "assets/members/जगदीप रावत/1.jpeg",
  },
  {
    id: 3,
    name: "जगमोहन रावत",
    // designation: "महासचिव",
    photoUrl: "assets/members/जगमोहन रावत/1.jpg",
  },
  {
    id: 4,
    name: "पुष्कर बिष्ट",
    // designation: "सचिवक्ष",
    photoUrl: "assets/members/पुष्कर बिष्ट/1.jpg",
  },
  {
    id: 5,
    name: "बिरजू नेगी",
    // designation: "कोषाध्यक्ष",
    photoUrl: "assets/members/बिरजू नेगी/1.jpeg",
  },
  {
    id: 6,
    name: "रामेन्द्र  सिंह नेगी",
    // designation: "सांस्कृतिक सचिव",
    photoUrl: "assets/members/रामेन्द्र  सिंह नेगी/1.jpg",
  },
];

const Member = () => {
  return (
    <>
      <div className="custom-bg-color px-5 py-3 mb-3">
        <h1>संस्थापक सदस्य</h1>
        <Row className="py-3">
          {membersData.map((member) => (
            <Col key={member.id} md={4} className="mb-4">
              <div className="text-center">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h4>{member.name}</h4>
                <p>{member.designation}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Member;
