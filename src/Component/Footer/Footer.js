import React from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white text-center shadow mt-5 pt-5">
      <Row>
        <Col>
          <h3> Thank u for visiting us </h3>
          <h6> To get up-to-date</h6>
          <FormControl
            className="w-75 mx-auto"
            size="text"
            type="text"
            placeholder="example@xyz.com"
          />
          <Button className="mx-auto my-3" variant="outline-light">
            Submit
          </Button>{" "}
          <p>All right are Reserved By Coders Zone || 2021-22</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
