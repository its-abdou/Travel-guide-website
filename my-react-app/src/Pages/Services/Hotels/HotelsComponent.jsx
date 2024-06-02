import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FilterAside from "../../Components/FilterAside"; // Import the new filter component
import "./HotelsComponent.css";

const HotelsComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  useEffect(() => {
    if (selectedStars.length === 0) {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter((hotel) =>
        selectedStars.includes(hotel.stars)
      );
      setFilteredHotels(filtered);
    }
  }, [selectedStars, hotels]);

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
          <h1>Book Your Hotel Now!</h1>

          {filteredHotels.map((hotel) => (
            <div className="hotel" key={hotel.id}>
              <div className="hotel-img">
                <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className="hotel-info">
                <div className="hotel-info-head">
                  <h3>{hotel.name}</h3>
                  <div className="hotel-stars">
                    {[...Array(Math.floor(hotel.stars))].map((_, index) => (
                      <i key={index} className="fa-solid fa-star icon"></i>
                    ))}
                    {hotel.stars % 1 !== 0 && (
                      <i className="fa-solid fa-star-half-stroke icon"></i>
                    )}
                  </div>
                </div>
                <div className="hotel-info-location">
                  <p>{hotel.distance}</p>
                  <a
                    href={hotel.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    show on map
                  </a>
                </div>
                <div className="description-and-price">
                  <p>{hotel.description}</p>
                  <div className="hotel-price">
                    <p>Price from</p>
                    <h3>{hotel.price}</h3>
                    <p>per night</p>
                  </div>
                </div>
                <div className="see-availability-button">
                  <a
                    href={hotel.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check availability
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
                href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaECIAQGYAQm4AQfIAQ3YAQHoAQH4AQuIAgGoAgO4AvD9zLIGwAIB0gIkNDZiODA3ZWYtYmE5MS00NDY0LTkyZmQtY2E5OGJmYzgyMmU12AIG4AIB&sid=53ce9c26bba32cba8e171b25bb4a6828&aid=304142&city=-480007&map=1&atlas_src=lp_map#map_opened"
                target="_blank"
                className="map-button"
                rel="noopener noreferrer"
              >
                Show hotels on map
              </a>
            </div>
          </div>

          <FilterAside
            selectedStars={selectedStars}
            setSelectedStars={setSelectedStars}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelsComponent;
