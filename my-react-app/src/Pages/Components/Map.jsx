const Map = ({ url, list_name }) => {
  return (
    <div className="map">
      <div className="map-content">
        <i className="fa-solid fa-map-location-dot map-icon"></i>
        <br />
        <a
          href={url}
          target="_blank"
          className="map-button"
          rel="noopener noreferrer"
        >
          Show {list_name} on map
        </a>
      </div>
    </div>
  );
};

export default Map;
