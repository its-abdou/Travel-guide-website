// src/components/AttractionCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const AttractionCard = ({ title, image, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          View on Map
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AttractionCard;
