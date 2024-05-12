import "./Location.css";
function Location() {
  return (
    <div className="location">
      <h1>Oran's Location</h1>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103667.64657667791!2d-0.6381918999999634!3d35.711116399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8854841f537d%3A0x4187f63762f7290f!2sOran!5e0!3m2!1sen!2sdz!4v1715032510993!5m2!1sen!2sdz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Location;
