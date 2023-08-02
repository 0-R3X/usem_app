import React from "react";
import { Col, Row } from "react-bootstrap";

const membersData = [
  {
    id: 1,
    name: "मनोज कुमार",
    designation: "अध्यक्ष",
    photoUrl: "assets/images/user.jpg",
  },
  {
    id: 2,
    name: "सुभाष बुड़ाकोटी",
    designation: "उपाध्यक्ष",
    photoUrl: "assets/images/user.jpg",
  },
  {
    id: 3,
    name: "रमिंदर सिंह नेगी",
    designation: "महासचिव",
    photoUrl: "assets/images/user.jpg",
  },
  {
    id: 4,
    name: "मनोज कुमार",
    designation: "अध्यक्ष",
    photoUrl: "assets/images/user.jpg",
  },
  {
    id: 5,
    name: "मनोज कुमार",
    designation: "अध्यक्ष",
    photoUrl: "assets/images/user.jpg",
  },
  {
    id: 6,
    name: "मनोज कुमार",
    designation: "अध्यक्ष",
    photoUrl: "assets/images/user.jpg",
  },
];

const Member = () => {
    
  return (
    <div className="custom-bg-color px-5 py-3">
        <h1>कार्य समिति के सदस्य</h1>
        <br/>
      <Row className="py-3">
        {membersData.map((member) => (
          <Col key={member.id} md={4} className="mb-4">
            <div className="text-center">
              <img src={member.photoUrl} alt={member.name} className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px" }} />
              <h4>{member.name}</h4>
              <p>{member.designation}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Member;
