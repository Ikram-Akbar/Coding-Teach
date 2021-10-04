import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./HeroPart.css";
import hero from '../../Images/hero.png';

const HeroPart = () => {
  return (
    <div>
      <Container  className="container-custom-style shadow my-2">
        <Row>
          <Col md={8} >
            <h1>
              <span>Welcome</span> to{" "}
              <span className="custom-span-color">Coders Zone</span>
            </h1>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              assumenda ut! Ut aspernatur quia voluptatem modi quasi reiciendis
              ipsum ratione corporis dignissimos fugiat. Animi molestiae veniam,
              voluptatibus eligendi voluptas exercitationem?
            </p>
            <div className="btn-custom style">
              {" "}
              <Button className="my-3  " variant="outline-success">Click Me</Button>
            </div>
          </Col>
          <Col>
            <div>
              <Col md={4} >
                <Image className="img-fluid "  src={hero}  />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroPart;
