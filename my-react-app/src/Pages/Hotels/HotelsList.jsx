import { useState, useEffect } from "react";
import "./HotelsList.css";

function HotelsList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div>
      <h1>Hotels List</h1>
      <ul className="hotel-list">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="hotel-item">
            <h2 className="hotel-name">{hotel.name}</h2>
            <p className="hotel-details">Location: {hotel.location}</p>
            <p className="hotel-details">Rating: {hotel.rating}</p>
            <p className="hotel-details">Price: ${hotel.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelsList;
