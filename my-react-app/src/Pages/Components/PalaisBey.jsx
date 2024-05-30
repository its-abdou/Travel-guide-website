import "./PalaisBey.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/PalaisDuBey/1.jpg";
import image2 from "../../assets/PalaisDuBey/2.jpg";
import image3 from "../../assets/PalaisDuBey/3.jpg";
import image4 from "../../assets/PalaisDuBey/4.jpg";
import image5 from "../../assets/PalaisDuBey/5.jpg";
import image6 from "../../assets/PalaisDuBey/6.jpg";
import image7 from "../../assets/PalaisDuBey/7.jpg";
import image8 from "../../assets/PalaisDuBey/8.jpg";
import image9 from "../../assets/PalaisDuBey/9.jpg";
import image10 from "../../assets/PalaisDuBey/10.jpg";
import image11 from "../../assets/PalaisDuBey/11.jpg";
import image12 from "../../assets/PalaisDuBey/12.jpg";
import image13 from "../../assets/PalaisDuBey/13.jpg";
import image14 from "../../assets/PalaisDuBey/14.jpg";
import image15 from "../../assets/PalaisDuBey/15.jpg";
import image16 from "../../assets/PalaisDuBey/16.jpg";
import image17 from "../../assets/PalaisDuBey/17.jpg";
import image18 from "../../assets/PalaisDuBey/18.jpg";
import image19 from "../../assets/PalaisDuBey/20.jpg";
import image20 from "../../assets/PalaisDuBey/21.jpg";

function PalaisBey() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];

  return (
    <div className="Carous">
      <Carousel className="Carou">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{`Palais Du Bey`}</h3>
              <p> {index + 1}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PalaisBey;
