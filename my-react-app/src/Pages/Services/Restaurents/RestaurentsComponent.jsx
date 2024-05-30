import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./RestaurentsComponent.css";

const RestaurentsComponent = () => {
  const [restaurents, setrestaurents] = useState([]);
  const [filteredrestaurents, setFilteredrestaurents] = useState([]);
  const [starRatingFilter, setStarRatingFilter] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/restaurents")
      .then((response) => response.json())
      .then((data) => {
        setrestaurents(data);
        setFilteredrestaurents(data);
      })
      .catch((error) => console.error("Error fetching restaurents:", error));
  }, []);

  useEffect(() => {
    const filtered = restaurents.filter(
      (restaurent) => restaurent.stars >= starRatingFilter
    );
    setFilteredrestaurents(filtered);
  }, [starRatingFilter, restaurents]);

  const handleStarRatingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setStarRatingFilter(parseInt(value));
    } else {
      setStarRatingFilter(0); // Reset the filter if unchecked
    }
  };

  return (
    <div className="Container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Helmet>
      <div className="list-container">
        <div className="left-col">
          <p>10+ Options</p>
          <h1>Chose Your Restaurent and Enjoy Your Meal!</h1>
          {filteredrestaurents.map((restaurent) => (
            <div className="restaurent" key={restaurent.id}>
              <div className="restaurent-img">
                <img src={restaurent.image} alt={restaurent.name} />
              </div>
              <div className="restaurent-info">
                <div className="restaurent-info-head">
                  <h3>{restaurent.name}</h3>
                  <div className="restaurent-stars">
                    {[...Array(Math.floor(restaurent.stars))].map(
                      (_, index) => (
                        <i key={index} className="fa-solid fa-star icon"></i>
                      )
                    )}
                    {restaurent.stars % 1 !== 0 && (
                      <i className="fa-solid fa-star-half-stroke icon"></i>
                    )}
                  </div>
                </div>
                <div className="restaurent-info-location">
                  {/* <p>{restaurent.distance}</p> */}
                  {/* <a
                    href={restaurent.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    show on map
                  </a> */}
                </div>
                <div className="description-and-price">
                  <p>{restaurent.speciality}</p>
                  {/* <div className="restaurent-price">
                    <p>Price from</p>
                    <h3>{restaurent.price}</h3>
                    <p>per night</p>
                  </div> */}
                </div>
                <div className="see-availability-button">
                  <a
                    href={restaurent.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show on map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-col">
          <div className="map">
            <div className="map-content">
              <i className="fa-solid fa-map-location-dot map-icon"></i>
              <br />
              <a
                href="https://www.google.com/maps/search/restaurant+oran/@35.6827502,-0.959457,11z/data=!3m1!4b1?entry=ttu"
                target="_blank"
                className="map-button"
                rel="noopener noreferrer"
              >
                Show restaurents on map
              </a>
            </div>
          </div>
          <div className="sidebar">
            <h2>Filter by:</h2>
            <h3>Star rating</h3>
            <div className="filter">
              <input
                type="checkbox"
                name="starRating"
                id="5"
                value="5"
                onChange={handleStarRatingChange}
              />
              <label htmlFor="5">5 stars</label>
            </div>
            <div className="filter">
              <input
                type="checkbox"
                name="starRating"
                id="4"
                value="4"
                onChange={handleStarRatingChange}
              />
              <label htmlFor="4">4 stars</label>
            </div>
            <div className="filter">
              <input
                type="checkbox"
                name="starRating"
                id="3"
                value="3"
                onChange={handleStarRatingChange}
              />
              <label htmlFor="3">3 stars</label>
            </div>
            <div className="filter">
              <input
                type="checkbox"
                name="starRating"
                id="2"
                value="2"
                onChange={handleStarRatingChange}
              />
              <label htmlFor="2">2 stars</label>
            </div>
            <div className="filter">
              <input
                type="checkbox"
                name="starRating"
                id="1"
                value="1"
                onChange={handleStarRatingChange}
              />
              <label htmlFor="1">1 star</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentsComponent;
