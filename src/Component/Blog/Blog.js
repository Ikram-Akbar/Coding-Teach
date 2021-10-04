import React from "react";
import { Badge,Button, Col, Container, Row } from "react-bootstrap";
import "./Blog.css"

const Blog = () => {
  return (
    <div>
      
      <Container>
        <Row>
          <Col  className="shadow my-4 custom-style">
                <h3>Web Application</h3>
                <p><small>Author: Ikram Akbar</small></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas magnam, dicta maxime repudiandae sint voluptates similique vitae. Recusandae alias eum corrupti earum optio. Minima, perspiciatis sequi. Quis quam iste asperiores amet eveniet hic aut autem sint. Hic consequuntur cumque voluptate dolore ducimus rerum rem tempore dolorem. Modi, est nobis.</p>
                <Button className="my-3  " variant="outline-dark">Read More</Button>
          </Col>
        </Row>
      </Container>
      
      
      <Container>
        <Row>
          <Col  className="shadow my-4 custom-style">
                <h3>Learn JS </h3>
                <p><small>Author: Ikram Akbar</small></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas magnam, dicta maxime repudiandae sint voluptates similique vitae. Recusandae alias eum corrupti earum optio. Minima, perspiciatis sequi. Quis quam iste asperiores amet eveniet hic aut autem sint. Hic consequuntur cumque voluptate dolore ducimus rerum rem tempore dolorem. Modi, est nobis.</p>
                <Button className="my-3  " variant="outline-dark">Read More</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col  className="shadow my-4 custom-style">
                <h3>Node JS</h3>
                <p><small>Author: Ikram Akbar</small></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas magnam, dicta maxime repudiandae sint voluptates similique vitae. Recusandae alias eum corrupti earum optio. Minima, perspiciatis sequi. Quis quam iste asperiores amet eveniet hic aut autem sint. Hic consequuntur cumque voluptate dolore ducimus rerum rem tempore dolorem. Modi, est nobis.</p>
                <Button className="my-3  " variant="outline-dark">Read More</Button>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
};

export default Blog;
