// src/pages/AttractionsPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AttractionCard from "./AttractionsComponent.jsx";
import "./AttractionsPage.css";

const attractions = [
  {
    title: "Monuments",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Chapelle_de_Santa_Cruz%2C_Oran.jpg",
    link: "https://www.google.com/maps/search/monuments+in+Oran",
  },
  {
    title: "Gardens",
    image:
      "https://capdz.dz/wp-content/uploads/2024/03/03-Grande-affluence-des-familles-au-nouveau-jardin-dEs-Seddikia.jpg",
    link: "https://www.google.com/maps/search/jardin+oran/@35.7034023,-0.6120291,15z/data=!3m1!4b1?entry=ttu",
  },
  {
    title: "Malls",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/8f/67/cb/l-interieur-du-centre.jpg",
    link: "https://www.google.com/maps/search/centre+commercial+oran/@35.7081512,-0.6799815,12z?entry=ttu",
  },
];

const AttractionsPage = () => {
  return (
    <div className="container">
      <Row>
        {attractions.map((attraction, index) => (
          <Col key={index}>
            <AttractionCard
              title={attraction.title}
              image={attraction.image}
              link={attraction.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AttractionsPage;
