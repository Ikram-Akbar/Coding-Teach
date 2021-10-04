import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <div>
          <h1>Our Services</h1>
        </div>
        <div>
          <div className="row">
            {services?.map((service) => (
              <div className="col-md-4">
                <Card border="dark" className="my-2 p-1 shadow  custom-service " style={{ width: "20rem" }}>
                  <Card.Img
                    ClassName="img-thumbnail"
                    variant="top"
                    src={service.img}
                  />
                  <Badge bg="dark">
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>
                        <p>Type: {service.type}</p>
                        <p>Duration: {service.duration} months</p>
                        <p>Language : {service.language}</p>
                      </Card.Text>
                      <Button variant="outline-light">Details</Button>
                    </Card.Body>
                  </Badge>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

/*









*/

/*



<div>
                                <div>
                                    <img className="w-50" src={service.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{service.name}</h4>
                                    <p>{service.price} $</p>
                                    <p> {service.type}</p>
                                    <button className="btn btn-success">Details</button>
                                </div>
                            </div>


*/
