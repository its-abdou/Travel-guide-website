import { useEffect, useState } from "react";
import axios from "axios";
import "./OtherServices.css"; // Import the CSS file

const OtherServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3001/OtherServices"); // Adjust the URL as needed
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services_body">
      <div className="services">
        <div className="wrapper2">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => window.open(service.mapLink, "_blank")}
            >
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
