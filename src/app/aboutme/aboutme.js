import React from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Assets
import aboutImg from "../../assets/images/about.jpg";

const AboutMe = () => {
  return (
    <div className="fade-in-faster">
      <div className="top-banner-area">
        <Container>
          <h1>About Me</h1>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="row-spacing">
            <Col>
              <img className="img-fluid" src={aboutImg} />
            </Col>
            <Col>
              <div className="intro-text">
                <h1>Lets Build Something Great</h1>
                <p>
                  You think water moves fast? You should see ice. It moves like
                  it has a mind. Like it knows it killed the world once and got
                  a taste for murder. After the avalanche, it took us a week to
                  climb out. Now, I don't know exactly when we turned on each
                  other, but I know that seven of us survived the slide... and
                  only five made it out. Now we took an oath, that I'm breaking
                  now. We said we'd say it was the snow that killed the other
                  two, but it wasn't. Nature is lethal but it doesn't hold a
                  candle to man.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;
