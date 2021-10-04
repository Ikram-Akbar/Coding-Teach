import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./ServiceHome.css";
import Service from "../Service/Service";
import serviceImg5 from "../../Images/(5).jpg";
import serviceImg2 from "../../Images/(2).jpg";
import serviceImg3 from "../../Images/(3).jpg";
import serviceImg4 from "../../Images/(4).jpg";

const ServiceHome = () => {
  /* const { services, setServices } = useState([]);
  useEffect(() => {
    fetch("./fake.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []); */
  return (
    <div className="container mt-5 ">
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border="success" className=" shadow">
            <Card.Img variant="top" src={serviceImg5} />
            <Card.Body>
              <Card.Title>WEB DESIGN & DEVELOPMENT</Card.Title>
              <Card.Text>
                <p>Price: 10 $</p>
                <p>Type: Beginners</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, ab.
              </Card.Text>
              <Button className="mx-auto my-3" variant="outline-success">
                More
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="success" className="bordered shadow">
            <Card.Img variant="top" src={serviceImg4} />
            <Card.Body>
              <Card.Title>BACKEND DEV</Card.Title>
              <Card.Text>
                <p>Price: 20 $</p>
                <p>Type: Advanced </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, ab.
              </Card.Text>
              <Button className="mx-auto my-3" variant="outline-success">
                More
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="success" className="bordered shadow">
            <Card.Img variant="top" src={serviceImg2} />
            <Card.Body>
              <Card.Title>REACT - For All</Card.Title>
              <Card.Text>
                <p>Price: 30 $</p>
                <p>Type: Beginners</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, ab.
              </Card.Text>
              <Button className="mx-auto my-3" variant="outline-success">
                More
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="success" className="bordered shadow">
            <Card.Img className="" variant="top" src={serviceImg2} />
            <Card.Body>
              <Card.Title>REACT</Card.Title>
              <Card.Text>
                <p>Price: 20 $</p>
                <p>Type: Beginners</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, ab.
              </Card.Text>
              <Button className="mx-auto my-3" variant="outline-success">
                More
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceHome;
