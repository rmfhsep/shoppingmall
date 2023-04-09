import React from "react";
import Col from "react-bootstrap/Col";

export default function Card({ shoe, idx }) {
  return (
    <Col xs={6} md={4}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
        width="80%"
      />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </Col>
  );
}
