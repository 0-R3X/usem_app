import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ClubJoin = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className='fw-bold'>हमारे समुदाय में शामिल हों</Card.Title>
              <Card.Text>
              "उत्तराखंड सांस्कृतिक एकता मंच" में सामूहिक शामिल हों
              <br/>
              <br/>
              आपका स्वागत है "उत्तराखंड सांस्कृतिक एकता मंच" में! हम एक साथ आकर उत्तराखंडी सांस्कृतिक धरोहर को सजीव रूप में बनाने का संकल्प लेते हैं। यदि आप भी हमारे संगठन में शामिल होकर इस सांस्कृतिक सफलता का हिस्सा बनना चाहते हैं, तो आपका स्वागत है।
              <br/>
              <br/>

              पंजीकरण के लिए कृपया Rs. 1000/- की पंजीकरण शुल्क की राशि "उत्तराखंड सांस्कृतिक एकता मंच" में जमा करें, साथ में 01 आईडी प्रूफ और 01 पता प्रूफ की प्रतियां और भुगतान लेनदेन की स्क्रीनशॉट को usemanch2017@gmail.com पर पंजीकृत मेल आईडी पर भेजें। आगामी जानकारी के लिए कृपया संपर्क करें...
              <br/>
              <br/>
              धन्यवाद!


              </Card.Text>
              <Button variant="primary">अब रजिस्टर करें</Button>
            </Card.Body>
          </Card>
          <br/>
          
          <Card>
          <Card.Body>
              <Card.Text>
                  अपने पसंदीदा भुगतान ऐप का उपयोग करके सदस्यता शुल्क भुगतान करने के लिए नीचे दिए गए QR कोड को स्कैन करें।
              </Card.Text>
              <div className="text-center">
                  <img
                    src="assets\images\qr fixed.png"
                    alt="QR Code for Fee Payment"
                    className="img-fluid"
                  />
                </div>
            </Card.Body>
          </Card>

        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className='fw-bold'>सदस्यता शुल्क</Card.Title>
              <Card.Text>
                अपने पसंदीदा भुगतान ऐप का उपयोग करके सदस्यता शुल्क भुगतान करने के लिए नीचे दिए गए QR कोड को स्कैन करें।
              </Card.Text>
              <div className="text-center">
                <img
                  src="assets\images\QR.jpg"
                  alt="QR Code for Fee Payment"
                  className="img-fluid"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClubJoin;
