import { Helmet } from "react-helmet";
import "./HotelsComponent.css";
import HMelissa from "../../../assets/Hotels/HMelissa.jpeg";

const HotelsComponent = () => {
  return (
    <div className="container">
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

          <div className="hotel">
            <div className="hotel-img">
              <img src={HMelissa} alt="Hotel Melissa" />
            </div>
            <div className="hotel-info">
              <div className="hotel-info-head">
                <h3>Melissa Hotel</h3>
                <div className="hotel-stars">
                  <i className="fa-solid fa-star icon"></i>
                  <i className="fa-solid fa-star icon"></i>
                  <i className="fa-solid fa-star icon"></i>
                  <i className="fa-solid fa-star icon"></i>
                  <i className="fa-solid fa-star-half-stroke icon"></i>
                </div>
              </div>
              <div className="hotel-info-location">
                <p>1,6 km from centre.</p>
                <a
                  href="https://maps.app.goo.gl/PucCnhythFxiAW7F8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  show on map
                </a>
              </div>
              <div className="description-and-price">
                <p>
                  Located in Oran, 5.9 km from Oran Santa Cruz fortress, Melissa
                  Hotel offers accommodation with a spa and wellness centre and
                  free private parking.
                </p>
                <div className="hotel-price">
                  <p>Price from</p>
                  <h3>17,600 DZD</h3>
                  <p>per night</p>
                </div>
              </div>
              <div className="see-availability-button">
                <a href="" target="_blank" rel="noopener noreferrer">
                  Check availability
                </a>
              </div>
            </div>
          </div>
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
          <div className="sidebar">
            <h2>Filter by:</h2>
            <h3>Star rating</h3>
            <div className="filter">
              <input type="checkbox" name="starRating" id="5" />
              <label htmlFor="5">5 stars</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="starRating" id="4" />
              <label htmlFor="4">4 stars</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="starRating" id="3" />
              <label htmlFor="3">3 stars</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="starRating" id="2" />
              <label htmlFor="2">2 stars</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="starRating" id="1" />
              <label htmlFor="1">1 star</label>
            </div>
            <h3>Review score</h3>
            <div className="filter">
              <input type="checkbox" name="review" id="9+" />
              <label htmlFor="9+">Superb: 9+</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="review" id="8+" />
              <label htmlFor="8+">Very good: 8+</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="review" id="7+" />
              <label htmlFor="7+">Good: 7+</label>
            </div>
            <div className="filter">
              <input type="checkbox" name="review" id="6+" />
              <label htmlFor="6+">Pleasant: 6+</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsComponent;