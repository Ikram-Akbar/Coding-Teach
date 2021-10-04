import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from '../../Images/hero.png'
import './About.css'
const About = () => {
  return (
    <div>
     <div border="dark" className="custom-img">
         <img src={img} alt="" />
         <br />
         <h2>Mrs Lelua Janah</h2>
         <h4>Jr Frontend Developer</h4>
         <p><small>Hai Hai company</small></p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit eaque cumque, fugiat quisquam provident ad omnis fuga temporibus assumenda quos earum odio rem dicta recusandae! Corrupti iusto expedita nesciunt velit soluta. Id corrupti ex dignissimos quibusdam error? Dicta, labore?</p>
     </div>
    </div>
  );
};

export default About;
