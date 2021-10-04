import React from 'react';
import { Image } from 'react-bootstrap';
import img from "../../Images/404.jpg"

const Error = () => {
    return (
        <div>
            <h1>OPPS!! </h1>
            <div>
            <Image src={img} fluid />
            </div>
        </div>
    );
};

export default Error;