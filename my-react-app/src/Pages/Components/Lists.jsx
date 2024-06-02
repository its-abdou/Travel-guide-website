import React from "react";
import "./Lists.css";

const Lists = ({ items, title, subtitle, itemType }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>); // Full star
    }

    if (halfStar) {
      stars.push(<i key="half" className="bi bi-star-half"></i>); // Half star
    }

    return stars;
  };

  return (
    <div className="list">
      <p className="subtitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div className="items-list">
        {items.map((item) => (
          <div className="item-preview" key={item.id}>
            <div className="item-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-info">
              <div className="item-info-head">
                <h3 className="item-name">{item.name}</h3>
                <div className="stars">{renderStars(item.rating)}</div>
              </div>
              <div className="item-info-location">
                <p className="item-type">{item[itemType]}</p>
                <p>{item.distance}</p>
                <a
                  href={item.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  show on map
                </a>
              </div>
              <div className="description-and-price">
                <p className="item-description">{item.description}</p>
                {/* <p>{item.description}</p> */}
                <div className="item-price">
                  <p>Price from</p>
                  <span className="price-amount">Pricing : {item.pricing}</span>

                  <p>per night</p>
                  <div className="price"></div>
                </div>
              </div>
              <div className="see-availability-button">
                <a
                  href={item.bookingLink}
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
    </div>
  );
};

export default Lists;
