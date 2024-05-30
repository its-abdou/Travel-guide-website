import Santa_icon from "../../assets/rio-de-janeiro.png";
import Coliseum_icon from "../../assets/coliseum.png";
import Cathedral_icon from "../../assets/cathedral-of-morelia (1).png";
import Bey_icon from "../../assets/vaduz-cathedral.png";
// import Banner from "../../assets/Header.jpg";
import Bey_Palace from "../../assets/palais du bey.jpeg";
import Colisieum from "../../assets/Arènes-doran.jpg";
import Cathedral from "../../assets/Cathedral.jpg";
import Santa_Cruz from "../../assets/image2.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <header>
        <div className="content">
          <div className="cont_bx">
            <h1>Discover Oran: Your Gateway to the Heart of Algeria</h1>
            <p>
              Unveiling the Beauty, Culture, and History of Algeria's Vibrant
              Coastal Gem
            </p>
          </div>
          <div className="trip_bx">
            <div className="explore_bx">
              <div className="caption">
                <h4>Oran's Monuments: Timeless Heritage</h4>
              </div>
              <Link to="/attraction/monuments">
                <input type="button" value="Explore now" />
              </Link>
            </div>
            <div className="monument_bx">
              <h4>Monuments to visit</h4>
              <div className="cards">
                <div className="card">
                  <h3>
                    SANTA CRUZ
                    <img src={Santa_icon} alt="santa cruz 🗽" />
                  </h3>
                  <img src={Santa_Cruz} alt="" />
                  <a
                    href="https://maps.app.goo.gl/k1MnE7FeX2H1gWzS7"
                    target="_blank"
                  >
                    Visit Now
                  </a>
                </div>
                <div className="card">
                  <h3>
                    Cathedral
                    <img src={Cathedral_icon} alt="santa cruz 🗽" />
                  </h3>
                  <img src={Cathedral} alt="" />
                  <a
                    href="https://maps.app.goo.gl/e8bVFmDmkkswmjg67"
                    target="_blank"
                  >
                    Visit Now
                  </a>
                </div>
                <div className="card">
                  <h3>
                    Coliseum
                    <img src={Coliseum_icon} alt="santa cruz 🗽" />
                  </h3>
                  <img src={Colisieum} alt="" />
                  <a
                    href="https://maps.app.goo.gl/Dh3rb2M9vMXEdUY86"
                    target="_blank"
                  >
                    Visit Now
                  </a>
                </div>
                <div className="card">
                  <h3>
                    Bey's Palace
                    <img src={Bey_icon} alt="santa cruz 🗽" />
                  </h3>
                  <img src={Bey_Palace} alt="" />
                  <a
                    href="https://maps.app.goo.gl/R9oCbz3Sb4FVTaHk6"
                    target="_blank"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </header>
  );
}
export default Header;
